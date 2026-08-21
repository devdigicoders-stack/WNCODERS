"use client";

import React, { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-[#00C265] text-white rounded-full shadow-[0_10px_20px_rgba(0,194,101,0.3)] hover:bg-[#00a355] hover:shadow-[0_10px_30px_rgba(0,194,101,0.5)] hover:-translate-y-1 transition-all duration-300 z-[999]"
          aria-label="Scroll to top"
        >
          <LuArrowUp size={24} />
        </button>
      )}
    </>
  );
}
