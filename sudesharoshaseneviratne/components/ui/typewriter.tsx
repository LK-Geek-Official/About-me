"use client"

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
  eraseSpeed?: number;
  typeSpeed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  delay = 1500,
  eraseSpeed = 50,
  typeSpeed = 100,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[currentWordIndex];
    
    if (isTyping && !isDeleting) {
      if (visibleText.length < currentWord.length) {
        // Still typing
        timeout = setTimeout(() => {
          setVisibleText(currentWord.substring(0, visibleText.length + 1));
        }, typeSpeed);
      } else {
        // Word is complete, pause before deleting
        setIsTyping(false);
        setIsPaused(true);
      }
    } else if (isDeleting) {
      if (visibleText.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setVisibleText(currentWord.substring(0, visibleText.length - 1));
        }, eraseSpeed);
      } else {
        // Word is completely deleted, move to next word
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [words, currentWordIndex, visibleText, isTyping, isDeleting, isPaused, delay, typeSpeed, eraseSpeed]);

  return (
    <span className={className}>
      {visibleText}
      <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-blink"></span>
    </span>
  );
};