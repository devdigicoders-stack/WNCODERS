"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImg from '../public/logo.png';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#040f1a]/95 backdrop-blur-lg border-b border-gray-800/50 sticky top-0 z-50 px-6 sm:px-10 py-5 transition-all">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image 
              src={logoImg} 
              alt="WORKNESTCONNECT Logo" 
              width={240} 
              height={60} 
              className="w-auto h-10 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex gap-10 text-[15px] font-semibold">
          <Link href="/" className={`${pathname === '/' ? 'text-[#00C265]' : 'text-gray-200 hover:text-white'} transition-colors`}>Home</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-[#00C265]' : 'text-gray-200 hover:text-white'} transition-colors`}>About Us</Link>
          <Link href="/services" className={`${pathname === '/services' ? 'text-[#00C265]' : 'text-gray-200 hover:text-white'} transition-colors`}>Services</Link>
          <Link href="/blog" className={`${pathname === '/blog' ? 'text-[#00C265]' : 'text-gray-200 hover:text-white'} transition-colors`}>Blog</Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#00C265]' : 'text-gray-200 hover:text-white'} transition-colors`}>Contact Us</Link>
        </div>

        {/* Right Button */}
        <div>
          <Link href="/contact" className="px-7 py-3 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[15px] font-bold transition-all shadow-lg shadow-[#00C265]/20">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
