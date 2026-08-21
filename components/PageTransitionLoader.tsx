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
      className={`fixed inset-0 z-[99999] bg-[#040f1a] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00C265]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Logo */}
      <div className="relative z-10 mb-12 animate-pulse">
        <Image
          src={logoImg}
          alt="Loading WORKNESTCONNECT..."
          width={280}
          height={70}
          className="w-auto h-12 sm:h-14 object-contain drop-shadow-[0_0_20px_rgba(0,194,101,0.2)]"
          priority
        />
      </div>
      
      {/* Premium Loader Ring */}
      <div className="relative w-10 h-10 z-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[2px] border-gray-800/60"></div>
        <div className="absolute inset-0 rounded-full border-[2px] border-[#00C265] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
    </div>
  );
}
