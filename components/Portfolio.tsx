"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import DemoModal from './DemoModal';
export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Loop back to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 2500); // Scroll every 2.5 seconds
  };

  const handleInteraction = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }

    // Pause auto scroll
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);

    // Resume after 5 seconds
    resumeTimer.current = setTimeout(() => {
      startAutoScroll();
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "/image copy 6.png",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/image copy 5.png",
    },
    {
      title: "On-Demand Delivery App",
      category: "Mobile Application",
      image: "/image copy 4.png",
    },
    {
      title: "Cloud Migration",
      category: "Cloud Solutions",
      image: "/image copy 7.png",
    },
    // Duplicate for scrolling feel
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "/image copy 6.png",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/image copy 5.png",
    },
    {
      title: "On-Demand Delivery App",
      category: "Mobile Application",
      image: "/image copy 4.png",
    },
    {
      title: "Cloud Migration",
      category: "Cloud Solutions",
      image: "/image copy 7.png",
    }
  ];

  return (
    <>
    <section className="w-full bg-white py-24 px-6 sm:px-10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-auto lg:max-w-[400px] shrink-0">
          <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase mb-4 block">
            OUR WORK
          </span>
          <h2 className="text-[#040f1a] text-2xl md:text-[32px] font-bold leading-tight mb-8">
            Projects That Speak <br className="hidden lg:block"/> For Themselves
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-2.5 border-[1.5px] border-[#00C265] text-[#00C265] hover:bg-[#00C265] hover:text-white rounded-md font-bold transition-colors">
              View All Projects <LuArrowRight size={18} />
            </Link>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleInteraction('left')}
                className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:border-[#00C265] hover:text-[#00C265] hover:bg-[#00C265]/5 transition-all"
              >
                <LuArrowLeft size={20} />
              </button>
              <button 
                onClick={() => handleInteraction('right')}
                className="w-10 h-10 rounded-full bg-[#00C265] text-white flex items-center justify-center hover:bg-[#00a355] transition-all shadow-[0_4px_15px_rgba(0,194,101,0.4)]"
              >
                <LuArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Scroll Area */}
        <style>{`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div 
          ref={scrollRef}
          className="w-full lg:flex-1 overflow-x-auto pb-8 relative hide-scroll flex gap-6 snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setIsModalOpen(true)}
              className="w-[280px] md:w-[340px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 shrink-0 flex flex-col group cursor-pointer snap-start"
            >
              
              {/* Image Container */}
              <div className="w-full h-[240px] bg-gray-50 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white border-t border-gray-50">
                <h3 className="text-[#040f1a] text-lg font-bold mb-1 group-hover:text-[#00C265] transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-500 text-[13px]">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
