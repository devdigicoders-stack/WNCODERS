import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LuClock, LuHexagon, LuUsers, LuUserPlus, LuCheck } from 'react-icons/lu';
import { FaPlay } from 'react-icons/fa';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'WORKNESTCONNECT - Building Digital Solutions',
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
        <div className="w-full max-w-[1400px] mx-auto px-10 pt-24 pb-24 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 z-10 relative">
          
          {/* Left Side: Text */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left gap-5 z-10">
            
            {/* Badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00C265" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">We are WORKNESTCONNECT</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-[46px] font-semibold leading-[1.15] tracking-tight text-white mt-2">
              Building Digital Solutions <br /> That <span className="text-[#00C265]">Drive Success</span>
            </h1>
            
            {/* Description */}
            <p className="text-base lg:text-[15px] text-gray-300 max-w-[480px] leading-relaxed font-normal">
              We are a software development company delivering innovative, scalable and secure IT solutions to help businesses grow in the digital era.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-8 mt-6">
              <Link href="/services" className="px-8 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[17px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)]">
                Explore Services
              </Link>
              
              <button className="flex items-center gap-4 text-white hover:text-gray-200 font-bold text-[17px] transition-colors group">
                <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-600 group-hover:border-gray-400 transition-colors">
                  <FaPlay size={16} className="text-white ml-1" />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Side: Image from Public Folder */}
          <div className="w-full lg:w-[45%] mt-16 lg:mt-0 flex justify-center lg:justify-start relative z-10">
             <div className="relative w-full max-w-[600px]">
               <Image 
                 src="/image.png" 
                 alt="Digital Solutions Hand" 
                 width={1200} 
                 height={1200} 
                 className="w-full h-auto object-contain object-right animate-float"
                 priority
               />
               {/* Gradient Fade to hide the sharp bottom cut */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040f1a] to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats Bar (Overlapping) */}
      <section className="w-full max-w-[1400px] mx-auto px-10 relative z-20 -mt-16 pb-16">
        <div className="bg-white rounded-3xl px-10 py-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#00C265]">
              <LuClock size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#040f1a] text-[28px] leading-tight font-black">10+</h3>
              <p className="text-gray-500 text-[13px] font-bold whitespace-nowrap">Years of Excellence</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#00C265]">
              <LuHexagon size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#040f1a] text-[28px] leading-tight font-black">250+</h3>
              <p className="text-gray-500 text-[13px] font-bold whitespace-nowrap">Projects Delivered</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#00C265]">
              <LuUsers size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#040f1a] text-[28px] leading-tight font-black">50+</h3>
              <p className="text-gray-500 text-[13px] font-bold whitespace-nowrap">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#00C265]">
              <LuUserPlus size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#040f1a] text-[28px] leading-tight font-black">30+</h3>
              <p className="text-gray-500 text-[13px] font-bold whitespace-nowrap">Expert Developers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#00C265]">
              <LuCheck size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#040f1a] text-[28px] leading-tight font-black">100%</h3>
              <p className="text-gray-500 text-[13px] font-bold whitespace-nowrap">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* New Components */}
      <TechStack />
      <Process />
      <Portfolio />
      <FAQ />
      <CTA />
      <Testimonials />

    </main>
  );
}
