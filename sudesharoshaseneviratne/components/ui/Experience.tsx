import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FancyHeading } from "./FancyHeading";

export const TimelineDemo = () => {
  const data = [

    {
      title: "Jan 2025 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">ERP Next Developer</h3>
            <h4 className="text-lg text-gray-300 mb-4">Buildups Consultancy</h4>
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
      title: "Sep 2024 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Front-End Lead</h3>
            <h4 className="text-lg text-gray-300 mb-4">Colossus AI</h4>
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
      title: "Dec 2024 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Co - Chief Executive Officer</h3>
            <h4 className="text-lg text-gray-300 mb-4">Team-G32 Rebranded as CodeX-32</h4>
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
      title: "Oct 2020 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Website Administrator</h3>
            <h4 className="text-lg text-gray-300 mb-4">Prasanthi Crafts</h4>
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
      title: "Dec 2019 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Founder & Chief Executive Officer</h3>
            <h4 className="text-lg text-gray-300 mb-4">LK Geek Official</h4>
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
      title: "Sep 2019 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Website Administrator</h3>
            <h4 className="text-lg text-gray-300 mb-4">Arosha Electrical Works Pvt. Ltd</h4>
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
      title: "May 2019 - Present",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Website Administrator</h3>
            <h4 className="text-lg text-gray-300 mb-4">Arosha Distributors Pvt. Ltd</h4>
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
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <FancyHeading title="Experience" />
        <Timeline data={data} />
      </div>
    </section>
  );
};
