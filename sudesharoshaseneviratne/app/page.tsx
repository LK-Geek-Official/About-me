"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/Hero";
import { Education } from "@/components/ui/Education";
import { Experience } from "@/components/ui/Experience";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";

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
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
