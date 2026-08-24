"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import DemoModal from './DemoModal';
export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/projects`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjectsData(data);
        } else if (data.data && Array.isArray(data.data)) {
          setProjectsData(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

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

  const displayProjects = projectsData.length > 0 ? [...projectsData, ...projectsData, ...projectsData] : [];

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
          {isLoading ? (
            <div className="w-full flex justify-center items-center py-10">
               <div className="w-8 h-8 border-4 border-[#00C265] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            displayProjects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => {
                  if(project.projectLink) {
                    window.open(project.projectLink, '_blank');
                  } else {
                    setIsModalOpen(true);
                  }
                }}
                className="w-[280px] md:w-[340px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 shrink-0 flex flex-col group cursor-pointer snap-start"
              >
                
                {/* Image Container */}
                <div className="w-full h-[220px] bg-gray-50 relative overflow-hidden">
                  <Image 
                    src={project.imageUrl && project.imageUrl.startsWith('http') ? project.imageUrl : (project.imageUrl ? `http://localhost:5000${project.imageUrl}` : "/image copy 5.png")} 
                    alt={project.title || "Project Image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {project.status && (
                    <div className={`absolute top-4 right-4 px-3 py-1 text-[11px] font-bold rounded-full ${project.status === 'Completed' ? 'bg-[#00C265] text-white' : 'bg-orange-500 text-white shadow-sm'}`}>
                      {project.status}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 bg-white border-t border-gray-50 flex-1 flex flex-col">
                  <h3 className="text-[#040f1a] text-lg font-bold mb-2 group-hover:text-[#00C265] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies && project.technologies.slice(0, 3).map((tech: string, i: number) => (
                      <span key={i} className="px-2.5 py-1 bg-[#f0fdf4] text-[#00C265] text-[11px] font-bold rounded-md whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-[11px] font-bold rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
    <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
