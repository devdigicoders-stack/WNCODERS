"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuMenu, LuX, LuGlobe } from 'react-icons/lu';
import logoImg from '../public/wncoders-software-company-logo.png';

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
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    // Read current language from cookie
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match && match[2]) {
      const parts = match[2].split('/');
      if (parts.length > 2) setCurrentLang(parts[2]);
    }

    // Initialize Google Translate Element (script already loaded in layout.tsx)
    const initTranslate = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ar',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };

    // If Google Translate is already loaded, init immediately; otherwise wait for callback
    if ((window as any).google && (window as any).google.translate) {
      initTranslate();
    } else {
      // Assign the callback for when the script finishes loading
      (window as any).googleTranslateElementInit = initTranslate;
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    setIsLangMenuOpen(false);
    
    const hostname = window.location.hostname;
    const baseDomain = hostname.startsWith('www.') ? hostname.substring(4) : hostname;
    
    if (lang === 'en') {
      // Clear all possible variations of the googtrans cookie to reset to default English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/`;
      if (hostname !== baseDomain) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${baseDomain}; path=/`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${baseDomain}; path=/`;
      }
    } else {
      // Set cookies for the new language across all possible domain variations
      document.cookie = `googtrans=/en/${lang}; path=/`;
      document.cookie = `googtrans=/en/${lang}; domain=${hostname}; path=/`;
      document.cookie = `googtrans=/en/${lang}; domain=.${hostname}; path=/`;
      if (hostname !== baseDomain) {
        document.cookie = `googtrans=/en/${lang}; domain=${baseDomain}; path=/`;
        document.cookie = `googtrans=/en/${lang}; domain=.${baseDomain}; path=/`;
      }
    }
    
    // Reload page to apply translation safely
    window.location.reload();
  };

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
                className="w-auto h-10 sm:h-12 md:h-14 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex gap-2 text-[15px] font-semibold items-center">
            <NavLink href="/" label="Home" currentPath={pathname} />
            <NavLink href="/about" label="About Us" currentPath={pathname} />
            <NavLink href="/services" label="Services" currentPath={pathname} />
            
            {/* Portfolio Dropdown */}
            <div className="relative group flex items-center h-full py-2">
              <button className={`relative px-4 py-2 rounded-lg font-semibold text-[15px] transition-all duration-300 flex items-center gap-1 ${pathname.startsWith('/portfolio') ? 'text-[#00C265] bg-[#00C265]/10' : 'text-gray-200 hover:text-[#00C265] hover:bg-[#00C265]/10'}`}>
                Portfolio
                <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#00C265] transition-all duration-300 ${pathname.startsWith('/portfolio') ? 'w-[50%]' : 'w-0 group-hover:w-[50%]'}`}></span>
              </button>
              <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/portfolio/clients" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#00C265]/10 hover:text-[#00C265] font-semibold transition-colors">
                  Our Clients
                </Link>
                <Link href="/portfolio/projects" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#00C265]/10 hover:text-[#00C265] font-semibold transition-colors border-t border-gray-100">
                  Our Projects
                </Link>
              </div>
            </div>

            <NavLink href="/blog" label="Blog" currentPath={pathname} />
            <NavLink href="/team" label="Our Team" currentPath={pathname} />

          </div>

          {/* Right Section (Button & Mobile Menu Toggle) */}
          <div className="flex items-center gap-4 z-50">
            {/* Custom Google Translate Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="w-10 h-10 rounded-full border border-gray-700/50 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                aria-label="Select Language"
              >
                <LuGlobe size={20} className="text-[#00C265]" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                  <button 
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${currentLang === 'en' ? 'text-[#00C265] font-bold bg-[#00C265]/5' : 'text-gray-700'}`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 border-t border-gray-100 ${currentLang === 'ar' ? 'text-[#00C265] font-bold bg-[#00C265]/5' : 'text-gray-700'}`}
                  >
                    Arabic (Qatar)
                  </button>
                </div>
              )}
              <div id="google_translate_element" className="hidden"></div>
            </div>

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
        className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-[#040f1a] border-r border-gray-800 transition-transform duration-300 ease-in-out shadow-2xl z-50 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <Image
            src={logoImg}
            alt="WORKNESTCONNECT Logo"
            width={180}
            height={45}
            className="w-auto h-10 object-contain"
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
          
          <div className="w-full flex flex-col gap-1 pl-4 border-l-2 border-[#00C265]/30 my-1">
            <span className="text-gray-400 text-sm font-semibold mb-1">Portfolio</span>
            <NavLink href="/portfolio/clients" label="Our Clients" currentPath={pathname} onClick={closeMobileMenu} />
            <NavLink href="/portfolio/projects" label="Our Projects" currentPath={pathname} onClick={closeMobileMenu} />
          </div>

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
