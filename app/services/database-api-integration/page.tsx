"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuDatabase, 
  LuGlobe, 
  LuShieldCheck, 
  LuZap, 
  LuNetwork,
  LuCode,
  LuMessageSquare,
  LuClipboardPen,
  LuAppWindow,
  LuTestTube,
  LuRocket,
  LuArrowRight,
  LuMessageCircle,
  LuLink
} from 'react-icons/lu';
import { 
  SiMysql,
  SiPostgresql, 
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiNodedotjs,
  SiPython,
  SiGo
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import DemoModal from '../../../components/DemoModal';

export default function DatabaseApiIntegration() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = [
    {
      title: 'Database Design & Optimization',
      desc: 'We design scalable relational and NoSQL databases optimized for performance and security.',
      icon: <LuDatabase size={32} />
    },
    {
      title: 'Custom API Development',
      desc: 'Building robust RESTful and GraphQL APIs to power your applications and services.',
      icon: <LuCode size={32} />
    },
    {
      title: 'Third-Party Integration',
      desc: 'Seamlessly connect your systems with external services like payment gateways, CRMs, and more.',
      icon: <LuLink size={32} />
    },
    {
      title: 'Data Migration & Sync',
      desc: 'Securely migrate data across platforms and ensure real-time synchronization.',
      icon: <LuNetwork size={32} />
    },
    {
      title: 'High Availability Setup',
      desc: 'Configuring database replication, clustering, and failover for zero downtime.',
      icon: <LuZap size={32} />
    },
    {
      title: 'Security & Compliance',
      desc: 'Implementing encryption, access controls, and compliance for your sensitive data.',
      icon: <LuShieldCheck size={32} />
    }
  ];

  const processSteps = [
    { num: 1, title: 'Requirement Analysis', desc: 'We understand your data needs and integration workflows.', icon: <LuMessageSquare size={32} /> },
    { num: 2, title: 'Architecture Design', desc: 'Designing database schemas and API endpoints mapping.', icon: <LuClipboardPen size={32} /> },
    { num: 3, title: 'Development', desc: 'Building the database structures and coding secure APIs.', icon: <LuCode size={32} /> },
    { num: 4, title: 'Integration', desc: 'Connecting endpoints and syncing data across platforms.', icon: <LuNetwork size={32} /> },
    { num: 5, title: 'Testing & QA', desc: 'Rigorous load testing and security validation.', icon: <LuTestTube size={32} /> },
    { num: 6, title: 'Deployment', desc: 'Smooth deployment to production and continuous monitoring.', icon: <LuRocket size={32} /> }
  ];

  const technologies = [
    { name: 'Node.js', icon: <SiNodedotjs size={45} className="text-[#339933]" /> },
    { name: 'Python', icon: <SiPython size={45} className="text-[#3776AB]" /> },
    { name: 'Go', icon: <SiGo size={45} className="text-[#00ADD8]" /> },
    { name: 'MySQL', icon: <SiMysql size={45} className="text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={45} className="text-[#4169E1]" /> },
    { name: 'MongoDB', icon: <SiMongodb size={45} className="text-[#47A248]" /> },
    { name: 'Redis', icon: <SiRedis size={45} className="text-[#DC382D]" /> },
    { name: 'GraphQL', icon: <SiGraphql size={45} className="text-[#E10098]" /> },
    { name: 'Apollo', icon: <SiApollographql size={45} className="text-[#311C87]" /> },
    { name: 'AWS', icon: <FaAws size={45} className="text-[#FF9900]" /> },
    { name: 'Firebase', icon: <SiFirebase size={45} className="text-[#FFCA28]" /> },
    { name: 'Docker', icon: <SiDocker size={45} className="text-[#2496ED]" /> },
  ];



  return (
    <div className="w-full bg-[#f8fafc] font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="bg-[#040f1a] pt-16 pb-12 md:pt-20 md:pb-16 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2">
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-xs font-bold tracking-wider mb-5 border border-[#00C265]/20 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Our Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Database & API <span className="text-[#00C265]">Integration</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Seamlessly connect systems, sync data in real-time, and build robust databases that scale with your digital ecosystem.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg shadow-[#00C265]/20">
                Get In Touch <LuArrowRight className="ml-2" />
              </button>
              <Link href="/contact" className="border border-gray-700 hover:border-[#00C265] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center group">
                View Our Projects <LuArrowRight className="ml-2 text-gray-400 group-hover:text-[#00C265] transition-colors" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
             {/* Image Graphic on Right */}
             <div className="relative w-full max-w-[450px] aspect-[1/1] flex items-center justify-center">
                <Image 
                  src="/database-api-integration-services-wncoders.jpg" 
                  alt="Database & API Integration Graphic" 
                  fill
                  className="object-cover rounded-2xl shadow-[0_0_50px_rgba(0,194,101,0.2)] opacity-95 animate-[pulse_10s_ease-in-out_infinite]"
                  priority
                />
             </div>
          </div>
        </div>
        
        {/* Subtle grid background for header */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Robust <span className="text-[#00C265]">Data Solutions</span> for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,194,101,0.1)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[#00C265] mb-6 group-hover:bg-[#00C265]/10 transition-colors">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-24 px-6 sm:px-10 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-[#00C265]">Integration</span> Process
            </h2>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden lg:block relative mt-8">
            {/* Connecting Dotted Line */}
            <div className="absolute top-[16px] left-[8%] right-[8%] border-t-2 border-dotted border-[#00C265]/40"></div>
            
            <div className="grid grid-cols-6 relative z-10 divide-x divide-gray-100">
              {processSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group px-4">
                  {/* Number Badge */}
                  <div className="w-8 h-8 rounded-full bg-[#00C265] flex items-center justify-center text-white font-bold text-[13px] mb-8 relative z-10 shadow-sm ring-4 ring-white">
                    {step.num}
                  </div>
                  {/* Icon Circle */}
                  <div className="w-[84px] h-[84px] flex items-center justify-center text-gray-800 mb-6 bg-white rounded-full border-[1.5px] border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#00C265]/40 group-hover:text-[#00C265]">
                    {step.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-tight px-1">{step.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed px-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Stepper (Vertical) */}
          <div className="lg:hidden flex flex-col gap-8 relative pl-8">
            <div className="absolute top-0 bottom-0 left-[31px] w-[2px] bg-gray-100"></div>
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-6 relative z-10">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265] font-bold shadow-sm">
                  {step.num}
                </div>
                <div className="bg-gray-50 rounded-xl p-5 flex-grow border border-gray-100">
                  <div className="text-[#00C265] mb-3">{step.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TECHNOLOGIES WE USE */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center px-6 sm:px-10 mb-16">
          <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
            Technologies We Use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Modern <span className="text-[#00C265]">Tech Stack</span>
          </h2>
        </div>

        {/* Infinite Marquee Scroll */}
        <div className="w-full overflow-hidden relative">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee py-4 gap-6 px-3">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={idx} className="bg-white shrink-0 rounded-2xl w-40 h-40 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg flex flex-col items-center justify-center gap-4 group transition-all duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. CTA SECTION */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#040f1a] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 relative z-10 flex-1">
              <div className="w-20 h-20 rounded-2xl bg-[#00C265]/10 border border-[#00C265]/20 flex items-center justify-center shrink-0">
                <LuMessageCircle size={36} className="text-[#00C265]" />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Data Solutions?</h2>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                  Connect with us to design robust databases and build seamless integrations that empower your business.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center w-full lg:w-auto shadow-[0_0_20px_rgba(0,194,101,0.3)] hover:shadow-[0_0_30px_rgba(0,194,101,0.5)] transform hover:-translate-y-1">
                Let's Talk <LuArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
