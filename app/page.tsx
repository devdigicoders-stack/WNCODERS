import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LuClock, LuHexagon, LuUsers, LuUserPlus, LuCheck, LuPhone } from 'react-icons/lu';
import { FaPlay } from 'react-icons/fa';
import Partnership from '../components/Partnership';
import Services from '../components/Services';
import StatsBar from '../components/StatsBar';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import BlogSection from '../components/BlogSection';

export const metadata: Metadata = {
  title: 'WNCoders - Building Digital Solutions',
  description: 'We are a software development company delivering innovative, scalable and secure IT solutions to help businesses grow in the digital era.',
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[#f8f9fa] font-sans min-h-screen">

      {/* Dark Hero Section */}
      <section className="bg-[#040f1a] text-white relative overflow-hidden pb-12">
        {/* Subtle Background Glows */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00C265]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Hero Content */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 pt-10 sm:pt-16 pb-10 sm:pb-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 z-10 relative">

          {/* Left Side: Text */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left gap-5 z-10">

            {/* Badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00C265" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12l10 10 10-10L12 2z" /></svg>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">We are WNCoders</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-4xl lg:text-[46px] font-semibold leading-[1.15] tracking-tight text-white mt-2">
              Software Development Company in Qatar <br /> Solutions That <span className="text-[#00C265]">Drive Growth</span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-[15px] text-gray-300 max-w-[480px] leading-relaxed font-normal">
              We are a software development company delivering innovative, scalable and secure IT solutions, including mobile app development Doha, to help businesses grow in the digital era.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-6">
              <Link href="/services" className="px-8 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[17px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)]">
                Explore Services
              </Link>

              <a href="tel:+97431175515" className="flex items-center gap-4 text-white hover:text-[#00C265] font-bold text-[17px] transition-colors group">
                <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-600 group-hover:border-[#00C265] transition-colors bg-white/5">
                  <LuPhone size={20} className="text-white group-hover:text-[#00C265] transition-colors" />
                </span>
                Contact Now
              </a>
            </div>
          </div>

          {/* Right Side: Image from Public Folder */}
          <div className="w-full lg:w-[45%] mt-16 lg:mt-0 flex justify-center lg:justify-start relative z-10">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/wncoders-digital-solutions.png"
                alt="WNCoders Custom Software Development and Digital Solutions"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain object-right animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats Bar (Removed per request) */}

      {/* Partnership Section */}
      <Partnership />

      {/* Services Section */}
      <Services />

      {/* Stats Bar */}
      <StatsBar />

      {/* New Components */}
      <Process />
      <Portfolio />
      <BlogSection />
      <TechStack />
      <CTA />
      <Testimonials />

    </main>
  );
}
