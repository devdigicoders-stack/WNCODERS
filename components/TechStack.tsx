import React from 'react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, 
  SiHtml5, SiCss, SiTailwindcss, SiPython, SiDjango, 
  SiGooglecloud, SiDocker, SiKubernetes, 
  SiFigma, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiGit 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss, color: 'text-[#1572B6]' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'Django', icon: SiDjango, color: 'text-[#092E20]' },
    { name: 'AWS', icon: FaAws, color: 'text-[#232F3E]' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-[#4285F4]' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
  ];

  // Duplicate for seamless infinite scrolling
  const scrollItems = [...technologies, ...technologies];

  return (
    <section className="w-full bg-[#f8f9fa] py-20 border-t border-gray-200 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto text-center px-6 sm:px-10 mb-12">
        <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">
          Our Tech Stack
        </span>
        <h2 className="text-[#040f1a] text-3xl font-bold">
          Technologies We Work With
        </h2>
      </div>
      
      {/* Infinite Scroll Container */}
      <div className="w-full relative">
        {/* Left and Right Gradient Masks for smooth fade out */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f8f9fa] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent z-10"></div>
        
        <div className="animate-infinite-scroll flex items-center gap-10 md:gap-16 py-4 px-8">
          {scrollItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer w-[100px] shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className={`text-4xl ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                </div>
                <span className="text-gray-600 font-semibold text-sm whitespace-nowrap">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
