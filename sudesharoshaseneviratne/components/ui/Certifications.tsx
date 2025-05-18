"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "./Modal";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  logo: string;
  skills: string[];
  link?: string;
}

type Category = "technical" | "competitions" | "workshops" | "educational" | "extraCurricular";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("technical");

  const certifications = {
    technical: [
      {
        title: "Certificate Of Completion C Programming Basics",
        issuer: "Linkedin-Learning",
        date: "Issued: Nov 2024",
        image: "/certifications/meta-cert.png",
        logo: "/education/linkedin.svg",
        skills: ["C", "C Programming"],
        link: "https://www.linkedin.com/learning/certificates/447b33892dd01b0ad0ef63f10d11e75e443113346eb4b9d0587f20d6651edf6b?trk=share_certificate"
      },
      {
        title: "Certificate Of Completion React Essential Training",
        issuer: "Linkedin-Learning",
        date: "Issued: Dec 2024",
        image: "/certifications/meta-cert.png",
        logo: "/education/linkedin.svg",
        skills: ["React"],
        link: "https://www.linkedin.com/learning/certificates/999d19d0d974be506c48886e5243690608d75c6e8d492627dfbe81c97ff76bba?trk=share_certificate"
      },
      {
        title: "Certificate Of Completion Angular Essential Training",
        issuer: "Linkedin-Learning",
        date: "Issued: Dec 2024",
        image: "/certifications/meta-cert.png",
        logo: "/education/linkedin.svg",
        skills: ["Angular"],
        link: "https://www.linkedin.com/learning/certificates/a8b48574e5172c36ba810394e6bf0bdde3f80fde36682e5ffb30f382d9f1ffad?trk=share_certificate"
      },
      {
        title: "Certificate Of Completion Nodejs Essential Training",
        issuer: "Linkedin-Learning",
        date: "Issued: Dec 2024",
        image: "/certifications/google-ux-cert.png",
        logo: "/education/linkedin.svg",
        skills: ["Nodejs"],
        link: "https://www.linkedin.com/learning/certificates/04e5f7de95710c4a7db7ff5d4d79ffadc9b418d811dc879c884affbfd12879b2?trk=share_certificate"
      }
    ],
    competitions: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Facebook)",
        date: "Issued: 2024",
        image: "/certifications/meta-cert.png",
        logo: "/certifications/meta-logo.png",
        skills: ["React", "JavaScript", "HTML", "CSS", "Version Control", "UX/UI"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      },
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "Issued: 2023",
        image: "/certifications/google-ux-cert.png",
        logo: "/certifications/google-logo.png",
        skills: ["Figma", "UX Research", "Wireframing", "Prototyping"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      }
    ],
    workshops: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Facebook)",
        date: "Issued: 2024",
        image: "/certifications/meta-cert.png",
        logo: "/certifications/meta-logo.png",
        skills: ["React", "JavaScript", "HTML", "CSS", "Version Control", "UX/UI"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      },
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "Issued: 2023",
        image: "/certifications/google-ux-cert.png",
        logo: "/certifications/google-logo.png",
        skills: ["Figma", "UX Research", "Wireframing", "Prototyping"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      }
    ],
    educational: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Facebook)",
        date: "Issued: 2024",
        image: "/certifications/meta-cert.png",
        logo: "/certifications/meta-logo.png",
        skills: ["React", "JavaScript", "HTML", "CSS", "Version Control", "UX/UI"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      },
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "Issued: 2023",
        image: "/certifications/google-ux-cert.png",
        logo: "/certifications/google-logo.png",
        skills: ["Figma", "UX Research", "Wireframing", "Prototyping"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      }
    ],
    extraCurricular: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Facebook)",
        date: "Issued: 2024",
        image: "/certifications/meta-cert.png",
        logo: "/certifications/meta-logo.png",
        skills: ["React", "JavaScript", "HTML", "CSS", "Version Control", "UX/UI"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      },
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "Issued: 2023",
        image: "/certifications/google-ux-cert.png",
        logo: "/certifications/google-logo.png",
        skills: ["Figma", "UX Research", "Wireframing", "Prototyping"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/..."
      }
    ]
  };

  const categories = [
    { id: "technical", label: "Technical", color: "blue" },
    { id: "competitions", label: "Competitions", color: "green" },
    { id: "workshops", label: "Workshops", color: "purple" },
    { id: "educational", label: "Educational", color: "yellow" },
    { id: "extraCurricular", label: "Extra-Curricular", color: "red" }
  ] as const;

  return (
    <section id="certifications" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center text-white"><u>Certifications</u></h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(({ id, label, color }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id as Category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all
                  ${activeCategory === id 
                    ? `bg-${color}-500/80 text-white` 
                    : `bg-gray-800/50 hover:bg-gray-700/70 text-${color}-400`
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications[activeCategory].map((cert, index) => (
              <CertificationCard 
                key={index} 
                cert={cert} 
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      <Modal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ""}
        subtitle={selectedCert?.issuer}
      >
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          {selectedCert && (
            <div className="aspect-[4/3] relative">
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
};

const CertificationCard = ({ 
  cert, 
  onClick 
}: { 
  cert: Certification; 
  onClick: () => void;
}) => {
  return (
    <div 
      className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-12 h-12 relative">
          <Image
            src={cert.logo}
            alt={`${cert.issuer} logo`}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-blue-400 text-xl font-semibold mb-1">
            {cert.title}
          </h3>
          <p className="text-gray-400 mb-1">{cert.issuer}</p>
          <p className="text-gray-500 text-sm mb-3">{cert.date}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-900/50 text-blue-400 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* View Credential Link */}
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm gap-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(cert.link, '_blank');
              }}
            >
              View Credential
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}; 