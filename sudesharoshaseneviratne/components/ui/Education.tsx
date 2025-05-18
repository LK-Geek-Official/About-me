"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "./Modal";

export const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<null | {
    title: string;
    institution: string;
    image: string;
  }>(null);

  return (
    <>
      <section id="education" className="min-h-screen py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center"><u>Education</u></h2>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {/* Bachelor's Degree */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/education/uow-logo.png"
                        alt="Education Icon"
                        width={100}
                        height={100}
                        className="opacity-100"
                      />
                    </div>
                    <div className="w-20 h-20  rounded-lg flex items-center justify-center mt-2">
                      <Image 
                        src="/education/iit-logo.png"
                        alt="Education Icon"
                        width={100}
                        height={100}
                        className="opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">BEng (Hons) Software Engineering</h3>
                        <h4 className="text-lg text-gray-300 mb-2"><i>Informatics Institute of Technology in collaboration with University of Westminster</i></h4>
                      </div>
                      <span className="text-gray-400">2023 - Present</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Currently pursuing a Bachelor’s degree in Software Engineering with a strong focus on 
                      modern software development practices, algorithms, and system design. Gaining hands-on 
                      experience in programming, problem-solving, and collaborative project work as part of the curriculum.
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-300 font-semibold">GPA :</span>
                      <span className="text-gray-300 ml-2">Still not completed the degree</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedEducation({
                    title: "BEng (Hons) Software Engineering",
                    institution: "University of Westminster - London, UK",
                    image: "/education/certifications/university-results.png"
                  })}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image 
                    src="/external-link.svg"
                    alt="View details"
                    width={24}
                    height={24}
                    className="transform hover:scale-110 transition-transform"
                  />
                </button>
              </div>

              {/* Associate Degree */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                      <Image 
                        src="/education/bc-logo.png"
                        alt="Education Icon"
                        width={100}
                        height={100}
                        className="opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">G.C.E. Advanced Level (Technology Stream)</h3>
                        <h4 className="text-lg text-gray-300 mb-2"><i>Bandaranayake Collage - Gampaha</i></h4>
                      </div>
                      <span className="text-gray-400">2020 - 2022</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                    Completed A/Ls in the Technology Stream with a focus on <b>Science for Technology</b>, 
                    <b>Bio-System Technology</b>, <b>Information & Communication Technology (ICT)</b>, <b>General English</b> and <b>General ICT</b>. <br />
                    Developed a strong foundation in technical concepts, problem-solving, and digital literacy, 
                    <br />preparing for further studies in software engineering.
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-300 font-semibold">Grades :</span>
                      <span className="text-gray-300 ml-2">1C's,3S's</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedEducation({
                    title: "G.C.E. Advanced Level (Technology Stream)",
                    institution: "Bandaranayake Collage - Gampaha",
                    image: "/education/certifications/al-result.jpg"
                  })}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image 
                    src="/external-link.svg"
                    alt="View details"
                    width={24}
                    height={24}
                    className="transform hover:scale-110 transition-transform"
                  />
                </button>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                      <Image 
                        src="/education/gc-logo.png"
                        alt="Education Icon"
                        width={100}
                        height={100}
                        className="opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">G.C.E. Ordinary Level</h3>
                        <h4 className="text-lg text-gray-300 mb-2"><i>Gurukula Collage - Kelaniya</i></h4>
                      </div>
                      <span className="text-gray-400">2014 - 2019</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Achieved 4A's, 3B's, and 2C's in the O/L examinations, demonstrating strong academic performance across key subjects. This foundation helped develop essential analytical and problem-solving skills, paving the way for advanced studies in technology and software engineering.
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-300 font-semibold">Grades :</span>
                      <span className="text-gray-300 ml-2">4A's, 3B's, 2C's</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedEducation({
                    title: "G.C.E. Ordinary Level",
                    institution: "Gurukula Collage - Kelaniya",
                    image: "/education/certifications/ol-results.jpg"
                  })}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image 
                    src="/external-link.svg"
                    alt="View details"
                    width={24}
                    height={24}
                    className="transform hover:scale-110 transition-transform"
                  />
                </button>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/education/skmv-logo.png"
                        alt="Education Icon"
                        width={100}
                        height={100}
                        className="opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Primary School - Scholarship Examination</h3>
                        <h4 className="text-lg text-gray-300 mb-2"><i>Sri Sidhartha Kumara Maha Vidyalaya - Gampaha</i></h4>
                      </div>
                      <span className="text-gray-400">2009 - 2013</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Achieved an outstanding score of 167/200 (83.5%) in the national scholarship examination, demonstrating strong academic potential from an early age. This accomplishment reflects my dedication to learning and problem-solving abilities, which later became the foundation for my technical education.
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-300 font-semibold">Marks :</span>
                      <span className="text-gray-300 ml-2">167 / 200 (83.5%)</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedEducation({
                    title: "Bachelor of Science in Computer Science",
                    institution: "University of Technology",
                    image: "/education/bs-degree.png"
                  })}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image 
                    src="/external-link.svg"
                    alt="View details"
                    width={24}
                    height={24}
                    className="transform hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Modal */}
      <Modal
        isOpen={selectedEducation !== null}
        onClose={() => setSelectedEducation(null)}
        title={selectedEducation?.title || ""}
        subtitle={selectedEducation?.institution}
      >
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          {selectedEducation && (
            <div className="aspect-[4/3] relative">
              <Image
                src={selectedEducation.image}
                alt={`${selectedEducation.title} Certificate`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}; 