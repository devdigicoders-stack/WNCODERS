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
          <div className="lg:col-span-1 pr-4">
            <Link href="/" className="inline-block mb-8">
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
          <div>
            <h4 className="text-white font-bold mb-6 text-[17px]">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Blog', 'Careers', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[17px]">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions', 'IT Consulting'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[17px]">Resources</h4>
            <ul className="flex flex-col gap-4">
              {['Blog', 'Case Studies', 'Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-[#00C265] text-[15px] font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[17px]">Contact Info</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0">
                  <LuPhone className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0">
                  <LuMail className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <a href="mailto:info@worknestconnect.com" className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors">
                  info@worknestconnect.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/10 flex items-center justify-center group-hover:bg-[#00C265] transition-colors shrink-0 mt-1">
                  <LuMapPin className="text-[#00C265] group-hover:text-white transition-colors" size={16} />
                </div>
                <span className="text-gray-300 text-[15px] font-medium leading-relaxed">
                  123, Tech Park, Sector 62,<br />Noida, Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-[14px] text-center md:text-left">
            © {new Date().getFullYear()} WORKNESTCONNECT. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">Facebook</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">Twitter</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
