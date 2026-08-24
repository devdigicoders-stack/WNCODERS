"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  LuUsers, LuAward, LuRocket, LuHeart, 
  LuLinkedin, LuTwitter, LuMail, LuPhone, 
  LuArrowRight 
} from 'react-icons/lu';
import CTA from '@/components/CTA';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/team-members`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setTeamMembers(data.filter((m: any) => m.status === 'Active').reverse());
        } else if (data.data && Array.isArray(data.data)) {
           setTeamMembers(data.data.filter((m: any) => m.status === 'Active').reverse());
        }
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);


  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#040f1a] pt-10 pb-12 md:py-[69px] relative overflow-hidden">
        {/* Background Subtle Gradient/Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C265] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10 md:mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="text-[#00C265] font-bold tracking-widest text-sm mb-4 uppercase">
                Our Team
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                Meet the People Behind <br className="hidden md:block" /> Our Success
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                We are a passionate team of innovators, developers, and problem-solvers dedicated to building powerful digital solutions that drive real business impact.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <LuUsers size={28} className="text-[#00C265] mb-3" />
                  <h3 className="text-white font-bold text-2xl mb-1">50+</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Team Members</p>
                </div>
                <div>
                  <LuAward size={28} className="text-[#00C265] mb-3" />
                  <h3 className="text-white font-bold text-2xl mb-1">10+</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Years Experience</p>
                </div>
                <div>
                  <LuRocket size={28} className="text-[#00C265] mb-3" />
                  <h3 className="text-white font-bold text-2xl mb-1">250+</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Projects Delivered</p>
                </div>
                <div>
                  <LuHeart size={28} className="text-[#00C265] mb-3" />
                  <h3 className="text-white font-bold text-2xl mb-1">100%</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full flex justify-center items-center h-[280px] lg:h-[400px]">
               <img 
                 src="/image copy 4.png" 
                 alt="Team illustration" 
                 className="object-contain w-full h-full"
               />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP TEAM SECTION */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#00C265]"></div>
              <span className="text-[#00C265] font-bold tracking-widest text-[13px] uppercase">Our Experts</span>
              <div className="w-2 h-2 rounded-full bg-[#00C265]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#040f1a] mb-6">
              Leadership & <span className="text-[#00C265]">Team</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Our leaders and talented professionals are the driving force behind every successful project. We work together to turn your vision into reality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
              <div className="col-span-full flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-[#00C265] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : teamMembers.length > 0 ? (
              teamMembers.map((leader, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="h-[360px] sm:h-[280px] w-full bg-[#040f1a] relative overflow-hidden">
                    <img src={leader.imageUrl || "https://via.placeholder.com/400x500"} alt={leader.name} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#040f1a] mb-1">{leader.name}</h3>
                    <p className="text-[#00C265] font-bold text-[13px] mb-4">{leader.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{leader.description}</p>
                    <div className="flex items-center gap-3">
                      <a href="tel:6394296293" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                        <LuPhone size={14} />
                      </a>
                      {leader.socialLinks?.linkedin ? (
                        <a href={leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                          <LuLinkedin size={14} />
                        </a>
                      ) : (
                        <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                          <LuLinkedin size={14} />
                        </a>
                      )}
                      <a href="mailto:info@worknestconnect.com" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                        <LuMail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No leadership team members found.
              </div>
            )}
          </div>
        </div>
      </section>



      <CTA />

    </main>
  );
}
