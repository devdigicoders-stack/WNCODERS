"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import logoImg from '../public/logo.png';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Show loader
    setIsLoading(true);

    // Hide loader after a short delay to simulate page load transition
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading && !isInitialLoad) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#02080d] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with smooth slide and fade */}
        <div className={`transition-all duration-700 transform ease-out ${isLoading ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Image
            src={logoImg}
            alt="WNCoders"
            width={240}
            height={60}
            className="w-auto h-10 sm:h-12 object-contain drop-shadow-[0_0_15px_rgba(0,194,101,0.1)]"
            priority
          />
        </div>
        
        {/* Premium glowing spinner */}
        <div className={`mt-10 relative flex items-center justify-center transition-all duration-700 delay-100 ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-12 h-12 rounded-full border border-gray-800"></div>
          <div className="absolute w-12 h-12 rounded-full border border-transparent border-t-[#00C265] border-r-[#00C265]/50 animate-spin shadow-[0_0_15px_rgba(0,194,101,0.3)]"></div>
        </div>
      </div>
    </div>
  );
}
