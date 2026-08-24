"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LuUsers, LuAward, LuRocket, LuHeart, 
  LuLinkedin, LuTwitter, LuMail, LuPhone, 
  LuArrowRight 
} from 'react-icons/lu';
import CTA from '@/components/CTA';

export default function TeamPage() {
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
              Leadership <span className="text-[#00C265]">Team</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Our leaders bring a wealth of experience and a shared vision for innovation, collaboration, and delivering exceptional results.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Leader 1 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="h-[360px] sm:h-[280px] w-full bg-[#040f1a] relative overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Johnson" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#040f1a] mb-1">Alex Johnson</h3>
                <p className="text-[#00C265] font-bold text-[13px] mb-4">Chief Executive Officer</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Visionary leader with 12+ years of experience in driving innovation and business growth.</p>
                <div className="flex items-center gap-3">
                  <a href="tel:6394296293" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuPhone size={14} />
                  </a>
                  <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuLinkedin size={14} />
                  </a>
                  <a href="mailto:digicoderstech@gmail.com" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuMail size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="h-[360px] sm:h-[280px] w-full bg-[#040f1a] relative overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Williams" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#040f1a] mb-1">Sarah Williams</h3>
                <p className="text-[#00C265] font-bold text-[13px] mb-4">Chief Operating Officer</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Expert in operational excellence and building scalable processes that deliver results.</p>
                <div className="flex items-center gap-3">
                  <a href="tel:6394296293" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuPhone size={14} />
                  </a>
                  <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuLinkedin size={14} />
                  </a>
                  <a href="mailto:digicoderstech@gmail.com" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuMail size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="h-[360px] sm:h-[280px] w-full bg-[#040f1a] relative overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Michael Brown" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#040f1a] mb-1">Michael Brown</h3>
                <p className="text-[#00C265] font-bold text-[13px] mb-4">Chief Technology Officer</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Technology enthusiast leading our tech strategy and delivering cutting-edge solutions.</p>
                <div className="flex items-center gap-3">
                  <a href="tel:6394296293" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuPhone size={14} />
                  </a>
                  <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuLinkedin size={14} />
                  </a>
                  <a href="mailto:digicoderstech@gmail.com" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuMail size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="h-[360px] sm:h-[280px] w-full bg-[#040f1a] relative overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Davis" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#040f1a] mb-1">Emily Davis</h3>
                <p className="text-[#00C265] font-bold text-[13px] mb-4">Head of Business Development</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Building strong partnerships and identifying new opportunities for sustainable growth.</p>
                <div className="flex items-center gap-3">
                  <a href="tel:6394296293" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuPhone size={14} />
                  </a>
                  <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuLinkedin size={14} />
                  </a>
                  <a href="mailto:digicoderstech@gmail.com" className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                    <LuMail size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR TEAM MEMBERS SECTION */}
      <section className="w-full py-24 bg-[#f9fafb]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#00C265]"></div>
              <span className="text-[#00C265] font-bold tracking-widest text-[13px] uppercase">Our Team Members</span>
              <div className="w-2 h-2 rounded-full bg-[#00C265]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#040f1a] mb-8">
              Meet Our Amazing <span className="text-[#00C265]">Team</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Our talented professionals are the driving force behind every successful project. With a perfect blend of creativity and technical expertise, we work together to turn your vision into reality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            
            {/* Member 1 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" alt="David Miller" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">David Miller</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">Full Stack Developer</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Member 2 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" alt="Jessica Lee" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">Jessica Lee</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">UI/UX Designer</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop" alt="Daniel Wilson" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">Daniel Wilson</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">Backend Developer</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Member 4 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop" alt="Sophia Martinez" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">Sophia Martinez</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">Frontend Developer</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Member 5 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="James Anderson" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">James Anderson</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">DevOps Engineer</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Member 6 */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
               <div className="w-full aspect-square sm:aspect-auto sm:h-56 lg:h-48 bg-gray-100 relative mb-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop" alt="Olivia Taylor" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-5 pt-0">
                  <h3 className="text-lg font-bold text-[#040f1a] mb-1">Olivia Taylor</h3>
                  <p className="text-[#00C265] font-bold text-[11px] mb-4 uppercase tracking-wider">Project Manager</p>
                  <div className="flex items-center justify-center gap-2">
                     <a href="tel:6394296293" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuPhone size={12} />
                     </a>
                     <a href="https://in.linkedin.com/in/programmerkashyap" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuLinkedin size={12} />
                     </a>
                     <a href="mailto:digicoderstech@gmail.com" className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#00C265] hover:text-white transition-colors">
                       <LuMail size={12} />
                     </a>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />

    </main>
  );
}
