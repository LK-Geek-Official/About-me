"use client";

import { useEffect } from "react";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { Typewriter } from "@/components/ui/typewriter";

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
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center">
          <div className="section-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sudesh Arosha Seneviratne
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Welcome to my portfolio. I'm a passionate <Typewriter 
                words={[
                  "UI/UX Designer", 
                  "Web Developer", 
                  "Mobile App Developer", 
                  "Content Creator", 
                  "Crypto Investor"
                ]} 
                className="text-primary font-bold"
              />
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

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education Item 1 */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Bachelor's Degree</h3>
                <h4 className="text-lg font-semibold mb-4">University Name</h4>
                <p className="text-gray-300 mb-2">2018 - 2022</p>
                <p className="text-gray-300">
                  Computer Science major with focus on software development and 
                  artificial intelligence. Graduated with honors.
                </p>
              </div>
              
              {/* Education Item 2 */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Certification</h3>
                <h4 className="text-lg font-semibold mb-4">Online Learning Platform</h4>
                <p className="text-gray-300 mb-2">2023</p>
                <p className="text-gray-300">
                  Advanced Web Development certification covering modern frontend and 
                  backend technologies including React, Node.js, and cloud computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-400">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">NextJS</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">Demo</a>
                    <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-400">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">MongoDB</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">Express</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">Demo</a>
                    <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-400">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">Python</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">Machine Learning</span>
                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">Flask</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">Demo</a>
                    <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <p className="text-lg font-semibold text-primary">2022 - Present</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Software Developer</h3>
                  <h4 className="text-lg text-gray-300 mb-4">Company Name</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                    <li>Implemented responsive designs and optimized application performance</li>
                    <li>Participated in code reviews and mentored junior developers</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <p className="text-lg font-semibold text-primary">2020 - 2022</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Web Developer Intern</h3>
                  <h4 className="text-lg text-gray-300 mb-4">Startup Name</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Assisted in developing frontend components using React</li>
                    <li>Implemented responsive layouts using CSS and Bootstrap</li>
                    <li>Fixed bugs and improved application performance</li>
                    <li>Participated in daily stand-ups and sprint planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">Profile Photo</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  Hello! I'm Sudesh Arosha Seneviratne, a passionate developer with expertise in web development 
                  and software engineering. I love creating elegant solutions to complex problems and am constantly 
                  learning to stay at the forefront of technology.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Throughout my career, I have worked on various projects ranging from small websites to large-scale 
                  applications. I enjoy collaborating with teams and bringing ideas to life through code.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or enjoying outdoor activities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                    <h4 className="font-bold mb-1">Frontend</h4>
                    <p className="text-gray-300">React, Next.js, TypeScript</p>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                    <h4 className="font-bold mb-1">Backend</h4>
                    <p className="text-gray-300">Node.js, Express, MongoDB</p>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                    <h4 className="font-bold mb-1">Tools</h4>
                    <p className="text-gray-300">Git, Docker, AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300">your.email@example.com</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">City, Country</p>
                </div>
              </div>
              
              <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Your Name" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Your message here..." 
                  ></textarea>
                </div>
                <GradientButton className="w-full">Send Message</GradientButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-300">© {new Date().getFullYear()} Sudesh Arosha Seneviratne. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
