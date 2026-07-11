"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border-line pt-20 pb-8 text-foreground-muted overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-border-line">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="Indo Global Properties"
                width={200}
                height={35}
                className="w-auto h-10 object-contain brightness-105"
              />
            </div>
            <p className="text-sm leading-relaxed text-foreground-muted">
              <span className="font-semibold dark:text-neutral-200 text-neutral-800">Indo Global Properties</span> is Mumbai's premier mandate sales force, specializing in accelerating real estate sales and scaling developer growth through strategic marketing and structured execution.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold hover:-translate-y-1 transition-premium duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold hover:-translate-y-1 transition-premium duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold hover:-translate-y-1 transition-premium duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold hover:-translate-y-1 transition-premium duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-neutral-200 text-neutral-800 mb-6 font-sans">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="#about" className="hover:text-gold transition-premium duration-300">About Company</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold transition-premium duration-300">Why Choose Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-premium duration-300">Recent Projects</a>
              </li>
              <li>
                <a href="#performance" className="hover:text-gold transition-premium duration-300">Sales Performance</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-premium duration-300">Developer Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-neutral-200 text-neutral-800 mb-6 font-sans">Our Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="#services" className="hover:text-gold transition-premium duration-300">Sales Strategy & Execution</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-premium duration-300">Channel Partner Activation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-premium duration-300">Digital Marketing & Lead Gen</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-premium duration-300">Branding & Creative Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-premium duration-300">Pre-sales & Reporting Systems</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-neutral-200 text-neutral-800 mb-1 font-sans">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  First Floor, Silicon Park Building No.3,
                  <br />Jankalyan Nagar, Malad (West),
                  <br />Mumbai - 400095
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+917022501222" className="hover:text-gold transition-premium duration-300">+91 7022501222</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@indoglobalproperties.com" className="hover:text-gold transition-premium duration-300">info@indoglobalproperties.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gold shrink-0" />
                <a href="https://www.indoglobalproperties.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-premium duration-300">www.indoglobalproperties.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 text-xs dark:text-neutral-500 text-neutral-400">
          <p>© {currentYear} Indo Global Properties. All rights reserved. Designed for elite real estate sales.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:dark:text-white hover:text-zinc-900 transition-premium">Privacy Policy</a>
            <a href="#" className="hover:dark:text-white hover:text-zinc-900 transition-premium">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md flex items-center justify-center group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
