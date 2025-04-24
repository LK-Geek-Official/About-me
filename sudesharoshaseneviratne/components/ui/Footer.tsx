"use client";

export const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-300">© {new Date().getFullYear()} Sudesh Arosha Seneviratne. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-300 hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}; 