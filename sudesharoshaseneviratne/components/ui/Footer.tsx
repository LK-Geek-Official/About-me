"use client";

export const Footer = () => {
  return (
    <footer className="relative bg-black/80 py-8 text-center border-t border-cyan-500/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-cyan-500/50 before:to-transparent">
      <div className="container mx-auto px-4">
        <p className="text-gray-300">© {new Date().getFullYear()} Sudesh Arosha Seneviratne. All rights reserved.</p>
        <p className="text-gray-300">Built with Next.js ^15.2.4</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}; 