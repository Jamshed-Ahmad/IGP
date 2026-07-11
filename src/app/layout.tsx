import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Indo Global Properties | The Real Estate Sales Force",
  description: "Beyond Sales. Built for Growth. Indo Global Properties is a premium real estate mandate sales specialist delivering complete sales solutions for developers in Mumbai.",
  keywords: ["Real Estate Mandate Sales", "Indo Global Properties", "Real Estate Mumbai", "Developer Sales", "Mandate Sales Force", "Luxury Real Estate", "Strategic Alliances", "Channel Partner Network"],
  openGraph: {
    title: "Indo Global Properties | The Real Estate Sales Force",
    description: "Beyond Sales. Built for Growth. Indo Global Properties is a premium real estate mandate sales specialist.",
    url: "https://www.indoglobalproperties.com",
    siteName: "Indo Global Properties",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${manrope.variable} font-sans bg-background text-foreground antialiased selection:bg-[#c5a880] selection:text-black min-h-screen flex flex-col transition-colors duration-300`}>
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
