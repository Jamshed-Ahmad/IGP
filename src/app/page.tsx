import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import SalesPerformance from "@/components/SalesPerformance";
import Testimonials from "@/components/Testimonials";
import TestimonialsAppreciation from "@/components/TestimonialsAppreciation";
import CertificationsRecognition from "@/components/CertificationsRecognition";
import EventHighlights from "@/components/EventHighlights";
import TrustedDevelopers from "@/components/TrustedDevelopers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <About />
        <WhyChooseUs />
        <Services />
        <Leadership />
        <Projects />
        <SalesPerformance />
        <Testimonials />
        <TestimonialsAppreciation />
        <CertificationsRecognition />
        <EventHighlights />
        <TrustedDevelopers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
