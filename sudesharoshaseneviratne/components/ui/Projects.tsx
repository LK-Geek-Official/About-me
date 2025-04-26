"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "./Modal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    image: string;
  }>(null);

  const projects = [
    {
      title: "Colossus AI Learning Guide System - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/colossusai.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer-Motion", "Lucid-React", "ShadCn", "Pyton", "Colpali"],
      github: "https://github.com/Colossus-AI-Learning-Guide-System",
      live: "https://www.colossusai.net"
    },

    {
      title: "LK Geek Official - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/lkgeekofficial.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/LK-Geek-Official",
      live: "https://lkgeekofficial.com"
    },

    {
      title: "Report Now LK - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Report-Now-LK",
      live: "https://your-portfolio.com"
    },

    {
      title: "Prasanthi Crafts - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Prasanthi-Crafts",
      live: "https://your-portfolio.com"
    },

    {
      title: "Arosha Distributors - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Arosha-Distributors-Pvt-Ltd",
      live: "https://your-portfolio.com"
    },

    {
      title: "Arosha Electrical Works - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Arosha-Electrical-Works-Pvt-Ltd",
      live: "https://your-portfolio.com"
    },

    {
      title: "Zero Hunger - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    },

    {
      title: "Real-Time Event Tracking System - Web Application",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      technologies: ["React", "Nodejs", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    },


  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center"><u>Projects</u></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 