import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import whyChooseUsImg from '../public/image copy.png';

export default function WhyChooseUs() {
  const points = [
    "Experienced & Skilled Professionals",
    "Agile & Transparent Process",
    "On-time Delivery",
    "24/7 Support & Maintenance"
  ];

  return (
    <section className="w-full bg-[#040f1a] text-white py-24 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-6">
            We Deliver More Than <br className="hidden md:block" /> Just Code
          </h2>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-8 max-w-[480px]">
            We are committed to quality, innovation and customer success. Our solutions are reliable, scalable and future-ready.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#00C265] text-lg shrink-0" />
                <span className="text-gray-200 text-[15px] font-medium">{point}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/about" className="px-8 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[17px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)]">
            Learn More About Us
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[45%] relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src={whyChooseUsImg} 
              alt="Team working together" 
              className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              placeholder="blur"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center group-hover:bg-[#00C265]/20 group-hover:border-[#00C265] transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-[#00C265] text-xl ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
