"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building, Home, ArrowUpRight, Filter, X } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Agarwal Mannat",
    developer: "Agarwal Group",
    location: "Andheri East",
    apartments: "100",
    image: "/assets/projects/agarwal-mannat.jpg",
  },
  {
    id: "02",
    name: "Prayag Heights",
    developer: "Jee N Vee",
    location: "Goregaon East",
    apartments: "35",
    image: "/assets/projects/prayag-heights.jpg",
  },
  {
    id: "03",
    name: "Bhavya Heights",
    developer: "Bhavya Buildtech Ass.",
    location: "Kandivli West",
    apartments: "85",
    image: "/assets/projects/bhavya-heights.jpg",
  },
  {
    id: "04",
    name: "Ellora Heights",
    developer: "Ellora",
    location: "Mira Road East",
    apartments: "90",
    image: "/assets/projects/ellora-heights.jpg",
  },
  {
    id: "05",
    name: "Bhawani Heights",
    developer: "Crystal Group",
    location: "Jogeshwari East",
    apartments: "85",
    image: "/assets/projects/bhawani-heights.jpg",
  },
  {
    id: "06",
    name: "Krishna Kunj",
    developer: "Bhavya Buildtech Ass.",
    location: "Kandivli West",
    apartments: "85",
    image: "/assets/projects/krishna-kunj.jpg",
  },
  {
    id: "07",
    name: "Ratnadeep CHS",
    developer: "Westin Group",
    location: "Chembur West",
    apartments: "75",
    image: "/assets/projects/ratnadeep-chs.jpg",
  },
  {
    id: "08",
    name: "95 West",
    developer: "Stans Buildtech",
    location: "Malad West",
    apartments: "200",
    image: "/assets/projects/95-west.jpg",
  },
  {
    id: "09",
    name: "Ebony Tower",
    developer: "SMGK Developers",
    location: "Jogeshwari West",
    apartments: "90",
    image: "/assets/projects/ebony-tower.jpg",
  },
];

// Extracted unique locations for filtering
const locations = ["All", ...Array.from(new Set(projects.map((p) => p.location.split(" ")[1] || p.location)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.location.includes(filter);
  });

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Our Recent <span className="gold-gradient">Mandates</span>
            </h3>
          </div>
          
          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs dark:text-neutral-500 text-neutral-400 flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter by Region:
            </span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setFilter(loc)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-premium duration-300 ${
                  (filter === loc)
                    ? "bg-gold text-black border-gold"
                    : "bg-white/5 text-foreground-muted border-border-line hover:border-border-line hover:dark:text-white hover:text-zinc-900"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-6 group hover:-translate-y-2 ${
                  idx % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                } transition-premium duration-500`}
              >
                {/* Image Container with PDF arched shape design */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-[4/5] rounded-t-full border-2 border-gold/20 group-hover:border-gold/60 transition-premium duration-500 overflow-hidden shadow-2xl cursor-pointer dark:bg-neutral-900 bg-neutral-100"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-premium duration-700 rounded-t-full"
                  />
                  {/* Glossy shine sweep effect */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-20 -translate-x-[110%] group-hover:translate-x-[60%] transition-transform duration-1000 ease-out z-10 pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Project Number badge */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full glass border border-gold/30 text-gold text-xs font-bold font-sans tracking-widest shadow-lg">
                    {project.id}
                  </div>
                </div>

                {/* Info Text */}
                <div className="px-2 flex flex-col gap-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xl font-bold font-sans dark:text-neutral-100 text-neutral-900 group-hover:text-gold transition-colors duration-300">
                        {project.name}
                      </h4>
                      <p className="text-xs text-foreground-muted mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md group-hover:bg-gold group-hover:text-black shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-white/5" />

                  {/* Specs footer */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <Building className="w-4 h-4 text-gold shrink-0" />
                      <span>
                        <strong className="dark:text-neutral-200 text-neutral-800">Dev:</strong> {project.developer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted justify-end">
                      <Home className="w-4 h-4 text-gold shrink-0" />
                      <span>
                        <strong className="dark:text-neutral-200 text-neutral-800">Apts:</strong> {project.apartments}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl glass border border-border-line rounded-3xl overflow-hidden shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold transition-premium duration-300"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Arched Image representation */}
              <div className="w-full md:w-1/2 aspect-[4/5] relative rounded-2xl overflow-hidden border border-border-line shrink-0 dark:bg-neutral-900 bg-neutral-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right Side: Details */}
              <div className="flex flex-col justify-between py-2 w-full">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-widest font-sans">
                      Mandate Sales Project {selectedProject.id}
                    </span>
                    <h3 className="text-3xl font-extrabold dark:text-neutral-100 text-neutral-900 font-sans mt-2">
                      {selectedProject.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-border-line rounded-xl flex items-center gap-3">
                      <Building className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Developer</p>
                        <p className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">{selectedProject.developer}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-border-line rounded-xl flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Location</p>
                        <p className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">{selectedProject.location}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-border-line rounded-xl flex items-center gap-3">
                      <Home className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Apartments Count</p>
                        <p className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">{selectedProject.apartments} Units</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-border-line rounded-xl flex items-center gap-3">
                      <Home className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Status</p>
                        <p className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Active Mandate</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold dark:text-neutral-200 text-neutral-800">Mandate Overview</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed font-body">
                      Indo Global Properties serves as the exclusive mandate sales force for {selectedProject.name}. Our mandate scope encompasses executing complete digital lead generation campaigns, activating the channel partner network, managing CRM workflows, and staffing on-ground sales teams to achieve rapid project sell-out.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setSelectedProject(null);
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full text-center py-4 text-xs font-bold uppercase tracking-widest dark:text-black bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                  >
                    Inquire About This Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
