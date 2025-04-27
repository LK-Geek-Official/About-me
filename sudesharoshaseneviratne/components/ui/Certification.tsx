"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Certification {
  title: string;
  issuedBy: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
}

export function Certification() {
  const certifications: Certification[] = [
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuedBy: "Meta (Facebook)",
      date: "2024",
      credentialId: "UC-XXXXX",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/xxxxx",
      image: "/certifications/meta.png",
      skills: ["React", "JavaScript", "HTML", "CSS", "Version Control", "UX/UI"]
    },
    {
      title: "Google UX Design Professional Certificate",
      issuedBy: "Google",
      date: "2023",
      credentialId: "UC-YYYYY",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/yyyyy",
      image: "/certifications/google.png",
      skills: ["Figma", "UX Research", "Wireframing", "Prototyping"]
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <u>Certifications</u>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                    <Image
                      src={cert.image}
                      alt={cert.issuedBy}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{cert.issuedBy}</p>
                    <p className="text-gray-500 text-sm mt-1">Issued: {cert.date}</p>
                    
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mt-3 text-sm"
                      >
                        View Credential
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-900/50 text-indigo-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border border-indigo-500/20 rounded-xl pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 