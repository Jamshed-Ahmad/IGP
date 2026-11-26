import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const ALLOWED_FOLDERS = new Set([
  "certificate",
  "group_photos",
  "testimonials_video",
]);

const MIME_TYPES: Record<string, string> = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function resolveAssetPath(segments: string[]): string | null {
  if (!segments || segments.length < 2) {
    return null;
  }

  const [folder, ...rest] = segments;
  if (!ALLOWED_FOLDERS.has(folder) || rest.length === 0) {
    return null;
  }

  const baseDir = path.resolve(/*turbopackIgnore: true*/ process.cwd(), "extracted_assets");
  const candidate = path.resolve(/*turbopackIgnore: true*/ baseDir, folder, ...rest);

  if (!candidate.startsWith(baseDir + path.sep)) {
    return null;
  }

  return candidate;
}

async function handleRequest(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
  headOnly: boolean
): Promise<Response> {
  const { path: segments } = await context.params;
  const filePath = resolveAssetPath(segments);

  if (!filePath) {
    return new Response("Not Found", { status: 404 });
  }

  let stat: fs.Stats;
  try {
    stat = await fs.promises.stat(filePath);
    if (!stat.isFile()) {
      return new Response("Not Found", { status: 404 });
    }
  } catch {
    return new Response("Not Found", { status: 404 });
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? "application/octet-stream";
  const fileSize = stat.size;
  const rangeHeader = request.headers.get("range");

  if (rangeHeader) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());
    if (!match) {
      return new Response("Range Not Satisfiable", {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    const startStr = match[1];
    const endStr = match[2];

    let start = startStr ? Number.parseInt(startStr, 10) : 0;
    let end = endStr ? Number.parseInt(endStr, 10) : fileSize - 1;

    if (!startStr && endStr) {
      const suffixLength = Number.parseInt(endStr, 10);
      start = Math.max(0, fileSize - suffixLength);
      end = fileSize - 1;
    }

    if (
      Number.isNaN(start) ||
      Number.isNaN(end) ||
      start < 0 ||
      end >= fileSize ||
      start > end
    ) {
      return new Response("Range Not Satisfiable", {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    const chunkSize = end - start + 1;
    const headers = new Headers({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": String(chunkSize),
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
    });

    if (headOnly) {
      return new Response(null, { status: 206, headers });
    }

    const nodeStream = fs.createReadStream(filePath, { start, end });
    const webStream = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;
    return new Response(webStream, { status: 206, headers });
  }

  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Length": String(fileSize),
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=3600",
  });

  if (headOnly) {
    return new Response(null, { status: 200, headers });
  }

  const nodeStream = fs.createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;
  return new Response(webStream, { status: 200, headers });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
): Promise<Response> {
  return handleRequest(request, context, false);
}

export async function HEAD(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
): Promise<Response> {
  return handleRequest(request, context, true);
}
