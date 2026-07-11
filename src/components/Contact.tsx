"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, PhoneCall, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Contact Force</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
                Let's Build <br />
                Your <span className="gold-gradient">Sales momentum</span>
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Connect with our mandate sales division to discuss your property development, positioning strategy, or alliance opportunities in Mumbai.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-border-line text-gold rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Our Office</h5>
                    <p className="text-xs text-foreground-muted mt-1 leading-relaxed">
                      First Floor, Silicon Park Building No.3, <br />
                      Jankalyan Nagar, Malad (West), <br />
                      Mumbai - 400095
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-border-line text-gold rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Call Us Direct</h5>
                    <p className="text-xs text-foreground-muted mt-1">
                      <a href="tel:+917022501222" className="hover:text-gold transition-premium">+91 7022501222</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-border-line text-gold rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Email Inquiry</h5>
                    <p className="text-xs text-foreground-muted mt-1">
                      <a href="mailto:info@indoglobalproperties.com" className="hover:text-gold transition-premium">info@indoglobalproperties.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-border-line shadow-2xl relative dark:bg-neutral-900 bg-neutral-100 shrink-0"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1887372274474!2d72.82276537599026!3d19.186985449221197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7389ab410d3%3A0xe543df5e975bc6cb!2sSilicon%20Park%2C%20Jankalyan%20Nagar%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:grayscale dark:opacity-80 dark:invert dark:contrast-[110%] grayscale-0 opacity-100 scale-[1.01] transition-all duration-300"
              />
            </motion.div>
          </div>
 
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-10 rounded-3xl border border-border-line h-full flex flex-col justify-center">
              <h4 className="text-xl font-bold font-sans dark:text-neutral-100 text-neutral-900 mb-2">Send a Proposal</h4>
              <p className="text-xs text-foreground-muted mb-8 font-body">Fill out the form below, and our mandate sales director will contact you within 24 hours.</p>
 
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground-muted font-sans">Full Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. James Kalvin"
                      className="px-5 py-3 dark:bg-neutral-900 bg-neutral-100 border border-border-line rounded-xl dark:text-neutral-100 text-neutral-900 text-sm focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all duration-300"
                    />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground-muted font-sans">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 8429**9343"
                      className="px-5 py-3 dark:bg-neutral-900 bg-neutral-100 border border-border-line rounded-xl dark:text-neutral-100 text-neutral-900 text-sm focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all duration-300"
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="email" className="text-xs font-semibold text-foreground-muted font-sans">Email Address *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="e.g. info@developergroup.com"
                    className="px-5 py-3 dark:bg-neutral-900 bg-neutral-100 border border-border-line rounded-xl dark:text-neutral-100 text-neutral-900 text-sm focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all duration-300"
                  />
                </motion.div>
 
                {/* Project Interest dropdown */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="interest" className="text-xs font-semibold text-foreground-muted font-sans">Project Interest</label>
                  <select
                    required
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleInputChange}
                    className="px-5 py-3 dark:bg-neutral-900 bg-neutral-100 border border-border-line rounded-xl text-foreground-muted text-sm focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select</option>
                    <option value="General Inquiry">General Mandate Inquiry</option>
                    <option value="Sales execution">Sales Strategy & Execution</option>
                    <option value="CP Activation">Channel Partner Activation</option>
                    <option value="Digital Lead Gen">Digital Marketing & Lead Gen</option>
                    <option value="Branding">Branding & Creative Support</option>
                  </select>
                </motion.div>
 
                {/* Message Input */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="message" className="text-xs font-semibold text-foreground-muted font-sans">Project Details / Message</label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about your project size, location, and requirements..."
                    className="px-5 py-3 dark:bg-neutral-900 bg-neutral-100 border border-border-line rounded-xl dark:text-neutral-100 text-neutral-900 text-sm focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all duration-300 resize-none"
                  />
                </motion.div>
 
                {/* Success Message Banner */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-semibold flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    Your inquiry has been successfully sent. A representative will contact you shortly.
                  </motion.div>
                )}
 
                {/* Submit Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-widest dark:text-black bg-gold hover:bg-gold-hover disabled:bg-neutral-800 disabled:dark:text-neutral-500 text-neutral-400 rounded-xl transition-premium duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold/10 relative overflow-hidden group/btn"
                  >
                    {isSubmitting ? (
                      "Sending Proposal..."
                    ) : (
                      <>
                        Submit Proposal <Send className="w-3.5 h-3.5 z-10" />
                        <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full scale-0 group-active/btn:scale-150 transition-transform duration-500 ease-out pointer-events-none" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Shortcuts */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Call Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+917022501222"
          className="p-4 bg-[#c5a880] text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gold-hover duration-300"
          aria-label="Call Direct"
        >
          <PhoneCall className="w-5 h-5" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/917022501222?text=Hello%20Indo%20Global%20Properties,%20I%20am%20interested%20in%20your%20mandate%20sales%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] dark:text-white text-zinc-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba56] duration-300"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </motion.a>
      </div>
    </section>
  );
}
