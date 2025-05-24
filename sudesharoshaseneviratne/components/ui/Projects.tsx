"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Code2, Smartphone, Palette } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FancyHeading } from "./FancyHeading";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  inProgress?: boolean;
}

interface ProjectCategories {
  Web: Project[];
  Mobile: Project[];
  Desktop: Project[];
  "UI/UX": Project[];
}

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<keyof ProjectCategories>("Web");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName as keyof ProjectCategories);
  };

  const navItems = [
    { name: 'Web', url: '#', icon: Monitor },
    { name: 'Mobile', url: '#', icon: Smartphone },
    { name: 'Desktop', url: '#', icon: Code2 },
    { name: 'UI/UX', url: '#', icon: Palette }
  ];

  const allProjects: ProjectCategories = {
    Web: [
      {
        title: "Colossus AI Learning Guide System",
        description: "AI-powered learning management system built with Next.js and Python",
        image: "/projects/colossusai.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Python"],
        github: "https://github.com/Colossus-AI-Learning-Guide-System",
        live: "https://www.colossusai.net",
        inProgress: false
      },
      {
        title: "LK Geek Official",
        description: "Technology news and community platform",
        image: "/projects/lkgeekofficial.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
        github: "https://github.com/LK-Geek-Official",
        live: "https://lkgeekofficial.com",
        inProgress: false
      },
      {
        title: "Prasanthi Crafts",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/Prasanthi-Crafts",
        live: "https://prasanthicraftslk.com",
        inProgress: true
      },
      {
        title: "Arosha Distributors",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/Arosha-Distributors-Pvt-Ltd",
        live: "https://arosha-distributors.vercel.app/",
        inProgress: true
      },
      {
        title: "Arosha Electrical Works",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/Arosha-Electrical-Works-Pvt-Ltd",
        live: "https://arosha-electrical-works.vercel.app/",
        inProgress: true
      },
      {
        title: "Long Distance Bust Tracking System",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/LDBTS-LK",
        live: "#",
        inProgress: true
      },
      {
        title: "Report Now LK",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/Report-Now-LK",
        live: "#",
        inProgress: true
      },
      {
        title: "Rock, Paper, Scissors Game",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "#",
        live: "#",
        inProgress: true
      },
      {
        title: "Hand Cricket Game",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "#",
        live: "#",
        inProgress: true
      },
      {
        title: "Zero Hunger",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "#",
        live: "#",
        inProgress: true
      },
    ],
    Mobile: [
      {
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app for fitness and nutrition tracking",
        image: "/projects/portfolio.png",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        github: "https://github.com/example/fitness-app",
        live: "#",
        inProgress: true
      },
      {
        title: "Social Media App",
        description: "Feature-rich social networking app with real-time messaging",
        image: "/projects/portfolio.png",
        technologies: ["Flutter", "Firebase", "GetX", "WebRTC"],
        github: "https://github.com/example/social-app",
        live: "#",
        inProgress: true
      },
      {
        title: "Food Delivery App",
        description: "On-demand food delivery app with real-time order tracking",
        image: "/projects/portfolio.png",
        technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com/example/food-delivery",
        live: "#",
        inProgress: true
      }
    ],
    Desktop: [
      {
        title: "Microservices Architecture",
        description: "Scalable microservices system with service mesh",
        image: "/projects/portfolio.png",
        technologies: ["Node.js", "Kubernetes", "Docker", "gRPC"],
        github: "https://github.com/example/microservices",
        live: "#",
        inProgress: true
      },
      {
        title: "Real-time Analytics Engine",
        description: "High-performance data processing and analytics system",
        image: "/projects/portfolio.png",
        technologies: ["Python", "Apache Kafka", "Elasticsearch", "Redis"],
        github: "https://github.com/example/analytics-engine",
        live: "#",
        inProgress: true
      },
      {
        title: "Cloud Infrastructure",
        description: "Automated cloud infrastructure with CI/CD pipeline",
        image: "/projects/portfolio.png",
        technologies: ["AWS", "Terraform", "Jenkins", "Ansible"],
        github: "https://github.com/example/cloud-infra",
        live: "#",
        inProgress: true
      }
    ],
    "UI/UX": [
      {
        title: "Design System",
        description: "Comprehensive design system for enterprise applications",
        image: "/projects/portfolio.png",
        technologies: ["Figma", "React", "Storybook", "Styled Components"],
        github: "https://github.com/example/design-system",
        live: "#",
        inProgress: true
      },
      {
        title: "Mobile Banking App",
        description: "User-centered mobile banking application design",
        image: "/projects/portfolio.png",
        technologies: ["Sketch", "InVision", "Principle", "Zeplin"],
        github: "https://github.com/example/banking-app-design",
        live: "#",
        inProgress: true
      },
      {
        title: "Healthcare Dashboard",
        description: "Intuitive dashboard for healthcare professionals",
        image: "/projects/portfolio.png",
        technologies: ["Figma", "Adobe XD", "Protopie", "Analytics"],
        github: "https://github.com/example/healthcare-dashboard",
        live: "#",
        inProgress: true
      }
    ]
  };

  return (
    <section className="py-6 bg-black text-white justify-between">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FancyHeading title="Projects" />
          <div className="flex justify-center w-full">
            <NavBar 
              items={navItems} 
              className="relative !transform-none !mb-0 !mt-0" 
              onTabChange={handleTabChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {allProjects[activeTab].map((project: Project, index: number) => (
            <div key={`${activeTab}-${project.title}-${index}`} className="border-2 border-gray-600 rounded-lg bg-zinc-800 min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                {project.inProgress && (
                  <div className="absolute inset-0 z-10 backdrop-blur-xl bg-black/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block px-4 py-2 border-2 border-cyan-500 rounded-lg">
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-white bg-clip-text text-transparent animate-pulse">
                          Will Update Soon
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-300 ${!project.inProgress && 'group-hover:scale-110'}`}
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-primary hover:text-primary/80 transition-colors ${project.inProgress && 'pointer-events-none opacity-50'}`}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-primary hover:text-primary/80 transition-colors ${project.inProgress && 'pointer-events-none opacity-50'}`}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 