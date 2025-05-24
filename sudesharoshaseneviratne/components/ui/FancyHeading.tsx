import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FancyHeadingProps {
  title: string;
  className?: string;
}

export const FancyHeading = ({ title, className = "" }: FancyHeadingProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`section-${title.replace(/\s+/g, '-').toLowerCase()}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const parentRect = element.parentElement?.getBoundingClientRect();
        
        // Check if we're within the section boundaries
        if (parentRect) {
          setIsInView(parentRect.top <= 0 && parentRect.bottom >= 0);
        }
        setIsVisible(rect.top > -100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  const letters = title.split("");

  return (
    <>
      {/* Main centered heading */}
      <motion.h2
        id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={`text-4xl font-bold text-center mb-12 relative ${className} ${!isVisible ? 'invisible' : 'visible'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                background: "linear-gradient(to right, #00ffff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="inline-block hover:scale-110 transition-transform cursor-default"
              style={{
                textShadow: "0 0 10px rgba(0,255,255,0.5)",
                marginRight: letter === " " ? "0.5rem" : "0.1rem"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.h2>

      {/* Sticky side heading */}
      <motion.div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 ${isInView ? 'visible' : 'invisible'}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: isInView ? 0 : -100,
          opacity: isInView ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="bg-gradient-to-r from-cyan-500/20 to-transparent p-4 backdrop-blur-sm"
        >
          <div className="flex flex-col">
            {letters.map((letter, index) => (
              letter !== " " && (
                <span 
                  key={index}
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(to right, #00ffff, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 10px rgba(0,255,255,0.3)",
                    lineHeight: "1.2"
                  }}
                >
                  {letter}
                </span>
              )
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}; 