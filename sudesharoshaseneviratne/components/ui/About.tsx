"use client";

import Image from "next/image";

export const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "SQL"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Figma", "Agile/Scrum"] }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center"><u>About Me</u></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Personal Info */}
            <div className="space-y-6">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <Image
                  src="/profile picture.png"
                  alt="Profile Photo"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate software engineer with a strong foundation in web development
                  and a keen interest in building user-friendly applications. I love learning
                  new technologies and solving complex problems through innovative solutions.
                </p>
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <hr className="opacity-50" />
        </div>
      </div>
    </section>
  );
}; 