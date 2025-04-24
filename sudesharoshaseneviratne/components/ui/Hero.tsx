"use client";

import Image from "next/image";
import { GradientButton } from "./gradient-button";
import { Typewriter } from "./typewriter";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center">
        <div className="section-fade-in">
          <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-primary mb-6 mx-auto">
            <Image 
              src="/Profile Picture.png"
              alt="Sudesh Arosha Seneviratne"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sudesh Arosha Seneviratne
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to my portfolio. I'm a passionate <br></br>{" "}
            <span className="text-primary font-bold">
              <Typewriter 
                words={[
                  "Undergraduate Software Engineer.",
                  "UI/UX Designer.", 
                  "Web Developer.", 
                  "Mobile App Developer.", 
                  "Content Creator.", 
                  "Crypto Investor."
                ]}
              />
            </span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <GradientButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </GradientButton>
            <GradientButton 
              variant="variant" 
              onClick={() => window.open("/Sudesh_Arosha_Seneviratne_Resume.pdf", "_blank")}
            >
              Download CV
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}; 