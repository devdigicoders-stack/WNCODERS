import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import logoImg from '../public/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#040f1a] pt-12 pb-8 px-6 sm:px-10 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1 pr-0 lg:pr-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block mb-6 md:mb-8">
              <Image 
                src={logoImg} 
                alt="WORKNESTCONNECT Logo" 
                width={220} 
                height={60} 
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              We build digital solutions that empower businesses to grow, innovate and succeed in the digital era.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-[17px]">Quick Links</h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Our Team', href: '/team' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-[17px]">Services</h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions', 'IT Consulting'].map((link, i) => (
                <li key={i}>
                  <Link href="/services" className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-[17px]">Resources</h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {['Blog', 'Case Studies', 'Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link, i) => (
                <li key={i}>
                  <Link href={link === 'Blog' ? '/blog' : '/contact'} className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-[17px]">Contact Info</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0">
                  <LuPhone className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <div className="flex flex-col gap-1 md:mt-1">
                  <a href="tel:+919140967607" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                    +91 9140967607
                  </a>
                  <a href="tel:+916394296293" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                    +91 6394296293
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0">
                  <LuMail className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <div className="flex flex-col gap-1 md:mt-1">
                  <a href="mailto:info@thedigicoders.com" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                    info@thedigicoders.com
                  </a>
                  <a href="mailto:digicoderstech@gmail.com" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                    digicoderstech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0 md:mt-1">
                  <LuMapPin className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Central+Complex,+Near+Doha+Municipality,+B+Ring+Rd,+Doha,+Qatar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00C265] hover:underline text-[15px] font-medium leading-relaxed transition-all cursor-pointer">
                  4th Floor, Office 405, Room 09,<br />Central Complex, Near Doha Municipality,<br />B Ring Rd, Doha, Qatar
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <p className="text-gray-400 text-[14px] text-center md:text-left">
            © {new Date().getFullYear()} WORKNESTCONNECT. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">Facebook</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">Twitter</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
