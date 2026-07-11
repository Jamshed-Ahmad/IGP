"use client";
 
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticWrapper from "@/components/MagneticWrapper";
 
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Why IGP", href: "#why-choose-us" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Performance", href: "#performance" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
 
export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    setIsLoaded(true);
    // Read the current theme from the HTML element's class list
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);
  }, []);
 
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
          immediate: false,
        });
      } else {
        const offset = 80; // height of header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
 
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };
 
  return (
    <motion.header
      initial={{ opacity: 0, y: -45, filter: "blur(10px)" }}
      animate={isLoaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-premium duration-300 ${
        scrolled ? "glass py-4 shadow-lg border-b border-border-line" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - smooth scale scale-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#" className="relative flex items-center gap-3 group" onClick={(e) => handleScrollTo(e, "#top")}>
            <Image
              src="/assets/logo.png"
              alt="Indo Global Properties"
              width={180}
              height={32}
              className="w-auto h-8 md:h-10 object-contain brightness-105 group-hover:scale-[1.02] transition-premium duration-300"
              priority
            />
          </a>
        </motion.div>
 
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-foreground-muted hover:dark:text-white hover:text-zinc-900 transition-premium duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
 
        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/5 border border-border-line dark:hover:border-gold dark:hover:text-gold hover:border-black/20 hover:text-gold transition-premium duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <MagneticWrapper>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="relative px-6 py-2.5 text-xs font-semibold uppercase tracking-wider dark:text-black bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 flex items-center gap-1.5 overflow-hidden group shadow-lg shadow-gold/10"
            >
              Schedule Consultation
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </MagneticWrapper>
        </div>

        {/* Mobile Theme Toggle & Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 border border-border-line text-foreground-muted hover:dark:text-white hover:text-zinc-900 transition-premium cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground-muted hover:dark:text-white hover:text-zinc-900 transition-premium"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-b border-border-line overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-border-line pb-2">
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-lg font-medium dark:text-neutral-300 text-neutral-700 hover:text-gold block transition-premium py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider dark:text-black bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-gold/10"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
