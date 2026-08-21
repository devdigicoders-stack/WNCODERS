"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuMenu, LuX } from 'react-icons/lu';
import logoImg from '../public/logo.png';

const NavLink = ({ href, label, currentPath, onClick }: { href: string; label: string; currentPath: string; onClick?: () => void }) => {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg font-semibold text-[15px] transition-all duration-300 group flex flex-col items-center justify-center w-full lg:w-auto ${isActive ? 'text-[#00C265] bg-[#00C265]/10' : 'text-gray-200 hover:text-[#00C265] hover:bg-[#00C265]/10'
        }`}
    >
      {label}
      <span className={`absolute bottom-1.5 h-[2px] rounded-full bg-[#00C265] transition-all duration-300 ${isActive ? 'w-[50%]' : 'w-0 group-hover:w-[50%]'}`}></span>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-[#040f1a]/95 backdrop-blur-lg border-b border-gray-800/50 sticky top-0 z-50 transition-all">
      <div className="px-6 sm:px-10 py-4 sm:py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 z-50">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src={logoImg}
                alt="WORKNESTCONNECT Logo"
                width={240}
                height={60}
                className="w-auto h-8 sm:h-10 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex gap-2 text-[15px] font-semibold">
            <NavLink href="/" label="Home" currentPath={pathname} />
            <NavLink href="/about" label="About Us" currentPath={pathname} />
            <NavLink href="/services" label="Services" currentPath={pathname} />
            <NavLink href="/team" label="Our Team" currentPath={pathname} />
            <NavLink href="/blog" label="Blog" currentPath={pathname} />
          </div>

          {/* Right Section (Button & Mobile Menu Toggle) */}
          <div className="flex items-center gap-4 z-50">
            <Link href="/contact" className="hidden sm:flex px-6 sm:px-7 py-2.5 sm:py-3 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[14px] sm:text-[15px] font-bold transition-all shadow-lg shadow-[#00C265]/20">
              Get in Touch
            </Link>

            {/* Hamburger Icon for Mobile */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" 
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer (Left Side) */}
      <div 
        className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-[#040f1a] border-r border-gray-800 transition-transform duration-300 ease-in-out shadow-2xl z-50 flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <Image
            src={logoImg}
            alt="WORKNESTCONNECT Logo"
            width={180}
            height={45}
            className="w-auto h-8 object-contain"
          />
          <button 
            className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={closeMobileMenu}
          >
            <LuX size={24} />
          </button>
        </div>

        <div className="flex flex-col items-start gap-2 p-6 overflow-y-auto">
          <NavLink href="/" label="Home" currentPath={pathname} onClick={closeMobileMenu} />
          <NavLink href="/about" label="About Us" currentPath={pathname} onClick={closeMobileMenu} />
          <NavLink href="/services" label="Services" currentPath={pathname} onClick={closeMobileMenu} />
          <NavLink href="/team" label="Our Team" currentPath={pathname} onClick={closeMobileMenu} />
          <NavLink href="/blog" label="Blog" currentPath={pathname} onClick={closeMobileMenu} />
          
          <Link 
            href="/contact" 
            onClick={closeMobileMenu} 
            className="sm:hidden w-full text-center mt-6 px-6 py-3 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[15px] font-bold transition-all shadow-lg shadow-[#00C265]/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
