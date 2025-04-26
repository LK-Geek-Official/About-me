"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/Hero";
import { Education } from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import { Projects } from "@/components/ui/Projects";
import { Testimonials } from "@/components/ui/Testimonials";
import { About } from "@/components/ui/About";
import { Contact } from "@/components/ui/Connect";
import { Footer } from "@/components/ui/Footer";
import { UnderConstruction } from "@/components/ui/UnderConstruction";

export default function Home() {
  // Add scroll animation functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-fade-in");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <UnderConstruction isVisible={true} />
      
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
