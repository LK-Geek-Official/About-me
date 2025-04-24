"use client";

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {/* Experience Item 1 */}
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

            {/* Experience Item 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <p className="text-lg font-semibold text-primary">2020 - 2022</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Web Developer Intern</h3>
                <h4 className="text-lg text-gray-300 mb-4">Startup Name</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Assisted in developing frontend components using React</li>
                  <li>Implemented responsive layouts using CSS and Bootstrap</li>
                  <li>Fixed bugs and improved application performance</li>
                  <li>Participated in daily stand-ups and sprint planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 