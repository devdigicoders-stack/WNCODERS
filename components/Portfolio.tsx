import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "/image.png",
      bg: "bg-[#f0f4f8]"
    },
    {
      title: "E-Commerce App",
      category: "Mobile Application",
      image: "/image copy.png",
      bg: "bg-[#eefcf5]"
    },
    {
      title: "Healthcare Portal",
      category: "UI/UX Design",
      image: "/image.png",
      bg: "bg-[#f4effc]"
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase block mb-4">
              Our Portfolio
            </span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold leading-tight">
              Latest Featured Projects
            </h2>
          </div>
          <Link href="/portfolio" className="text-[#00C265] font-bold hover:text-[#009b50] transition-colors flex items-center gap-2 group">
            View All Projects 
            <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col">
              
              {/* Image Container */}
              <div className={`w-full h-[280px] ${project.bg} relative overflow-hidden`}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#040f1a]/0 group-hover:bg-[#040f1a]/10 transition-colors duration-500"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <span className="text-[#00C265] text-xs font-bold tracking-[0.1em] uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-[#040f1a] text-2xl font-bold mb-4 group-hover:text-[#00C265] transition-colors">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-6 flex items-center gap-2 text-gray-500 font-semibold group-hover:text-[#040f1a] transition-colors">
                  <span className="text-sm">View Case Study</span>
                  <LuArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
