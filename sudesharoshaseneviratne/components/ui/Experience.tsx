import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [

    {
      title: "Changelog",
      content: (
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
      ),
    },

    {
      title: "Changelog",
      content: (
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
      ),
    },

    {
      title: "Changelog",
      content: (
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
      ),
    },

    {
      title: "Changelog",
      content: (
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
      ),
    },

    {
      title: "Changelog",
      content: (
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
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full py-10 px-4">
      <div className="container mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
}
