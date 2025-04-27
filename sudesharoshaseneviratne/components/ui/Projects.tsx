"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Code2, Smartphone, Palette } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

interface ProjectCategories {
  Web: Project[];
  Mobile: Project[];
  Backend: Project[];
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
    { name: 'Backend', url: '#', icon: Code2 },
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
        live: "https://www.colossusai.net"
      },
      {
        title: "LK Geek Official",
        description: "Technology news and community platform",
        image: "/projects/lkgeekofficial.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        github: "https://github.com/LK-Geek-Official",
        live: "https://lkgeekofficial.com"
      },
      {
        title: "E-commerce Platform",
        description: "Modern e-commerce platform with real-time inventory management",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Redis"],
        github: "https://github.com/example/ecommerce",
        live: "#"
      }
    ],
    Mobile: [
      {
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app for fitness and nutrition tracking",
        image: "/projects/portfolio.png",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        github: "https://github.com/example/fitness-app",
        live: "#"
      },
      {
        title: "Social Media App",
        description: "Feature-rich social networking app with real-time messaging",
        image: "/projects/portfolio.png",
        technologies: ["Flutter", "Firebase", "GetX", "WebRTC"],
        github: "https://github.com/example/social-app",
        live: "#"
      },
      {
        title: "Food Delivery App",
        description: "On-demand food delivery app with real-time order tracking",
        image: "/projects/portfolio.png",
        technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com/example/food-delivery",
        live: "#"
      }
    ],
    Backend: [
      {
        title: "Microservices Architecture",
        description: "Scalable microservices system with service mesh",
        image: "/projects/portfolio.png",
        technologies: ["Node.js", "Kubernetes", "Docker", "gRPC"],
        github: "https://github.com/example/microservices",
        live: "#"
      },
      {
        title: "Real-time Analytics Engine",
        description: "High-performance data processing and analytics system",
        image: "/projects/portfolio.png",
        technologies: ["Python", "Apache Kafka", "Elasticsearch", "Redis"],
        github: "https://github.com/example/analytics-engine",
        live: "#"
      },
      {
        title: "Cloud Infrastructure",
        description: "Automated cloud infrastructure with CI/CD pipeline",
        image: "/projects/portfolio.png",
        technologies: ["AWS", "Terraform", "Jenkins", "Ansible"],
        github: "https://github.com/example/cloud-infra",
        live: "#"
      }
    ],
    "UI/UX": [
      {
        title: "Design System",
        description: "Comprehensive design system for enterprise applications",
        image: "/projects/portfolio.png",
        technologies: ["Figma", "React", "Storybook", "Styled Components"],
        github: "https://github.com/example/design-system",
        live: "#"
      },
      {
        title: "Mobile Banking App",
        description: "User-centered mobile banking application design",
        image: "/projects/portfolio.png",
        technologies: ["Sketch", "InVision", "Principle", "Zeplin"],
        github: "https://github.com/example/banking-app-design",
        live: "#"
      },
      {
        title: "Healthcare Dashboard",
        description: "Intuitive dashboard for healthcare professionals",
        image: "/projects/portfolio.png",
        technologies: ["Figma", "Adobe XD", "Protopie", "Analytics"],
        github: "https://github.com/example/healthcare-dashboard",
        live: "#"
      }
    ]
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center"><u>Projects</u></h2>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
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
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
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
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 