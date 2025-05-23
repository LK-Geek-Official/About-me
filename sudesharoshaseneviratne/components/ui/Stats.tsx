import React from "react";
import { FaGithub, FaProjectDiagram, FaClock, FaStar, FaCertificate } from "react-icons/fa";

const stats = [
  {
    icon: <FaGithub size={32} className="text-white" />,
    value: "100+",
    label: "GitHub Commits",
    link: "https://github.com/sudesharoshaseneviratne",
  },
  {
    icon: <FaProjectDiagram size={32} className="text-white" />,
    value: "30+",
    label: "Projects",
    link: "https://github.com/sudesharoshaseneviratne?tab=repositories",
  },
  {
    icon: <FaClock size={32} className="text-white" />,
    value: "8000+",
    label: "Coding Hours",
    link: undefined,
  },
  {
    icon: <FaStar size={32} className="text-white" />,
    value: "3+",
    label: "External Project Contributions",
    link: undefined,
  },
  {
    icon: <FaCertificate size={32} className="text-white" />,
    value: "25+",
    label: "Certifications",
    link: undefined,
  },
];

const Stats = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center"><u>My Stats</u></h2>
        
        {/* Main content container with flex */}
        <div className="flex justify-center items-start gap-8 mb-12">
          {/* Left side - Stats with icons */}
          <div className="flex flex-col gap-4 w-1/3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-zinc-900 rounded-lg p-5 shadow-md"
              >
                <div className="bg-zinc-800 p-3 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-extrabold">
                    {stat.link ? (
                      <a href={stat.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                        {stat.value}
                      </a>
                    ) : (
                      stat.value
                    )}
                    <span className="ml-1 text-lg font-bold align-top">+</span>
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] bg-gray-600 self-stretch mx-4"></div>

          {/* Right side - GitHub stats */}
          <div className="w-1/3 flex flex-col gap-4">
            <div className="border-2 border-white rounded-lg overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=sudesharoshaseneviratne&theme=dark&show_icons=true&hide_border=true&count_private=true" 
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
            <div className="border-2 border-white rounded-lg overflow-hidden">
              <img 
                src="https://streak-stats.demolab.com?user=sudesharoshaseneviratne&theme=dark&hide_border=true" 
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
            <div className="border-2 border-white rounded-lg overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sudesharoshaseneviratne&theme=dark&show_icons=true&hide_border=true&layout=compact" 
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom centered iframe */}
        <div className="flex justify-center">
          <iframe 
            frameBorder="0" 
            height="157px" 
            width="690px" 
            src="https://git-graph.vercel.app/embed/sudesharoshaseneviratne?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=0&blockSize=10&fontSize=14&weekStart=4&year=2025"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Stats;