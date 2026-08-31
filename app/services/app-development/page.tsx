"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuPenTool,
  LuCode,
  LuSettings,
  LuMessageSquare,
  LuClipboardPen,
  LuTestTube,
  LuRocket,
  LuArrowRight,
  LuMessageCircle,
  LuBlocks,
  LuPhone
} from 'react-icons/lu';
import { 
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiAndroid,
  SiApple,
  SiWhatsapp
} from 'react-icons/si';
import DemoModal from '../../../components/DemoModal';

export default function AppDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = [
    {
      title: 'iOS App Development',
      desc: 'High-performance iOS apps built with the latest technologies.',
      icon: <SiApple size={32} />
    },
    {
      title: 'Android App Development',
      desc: 'Scalable and secure Android apps for a wide range of devices.',
      icon: <SiAndroid size={32} />
    },
    {
      title: 'Cross-Platform Apps',
      desc: 'Cost-effective cross-platform apps using Flutter for iOS and Android.',
      icon: <LuBlocks size={32} />
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive, and engaging designs that users love.',
      icon: <LuPenTool size={32} />
    },
    {
      title: 'App Integration',
      desc: 'Integrate third-party APIs and services to enhance functionality.',
      icon: <LuCode size={32} />
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing support and maintenance to keep your app up-to-date.',
      icon: <LuSettings size={32} />
    }
  ];

  const processSteps = [
    { num: 1, title: 'Requirement Analysis', desc: 'We understand your business goals and gather all the requirements.', icon: <LuMessageSquare size={32} /> },
    { num: 2, title: 'Planning & Strategy', desc: 'We define the app features, tech stack, timeline, and project roadmap.', icon: <LuClipboardPen size={32} /> },
    { num: 3, title: 'UI/UX Design', desc: 'We create wireframes and UI/UX designs that deliver great experience.', icon: <LuPenTool size={32} /> },
    { num: 4, title: 'Development', desc: 'Our developers build robust, scalable, and high-quality apps.', icon: <LuCode size={32} /> },
    { num: 5, title: 'Testing & Quality Assurance', desc: "We test the app thoroughly to ensure it's bug-free and performs well.", icon: <LuTestTube size={32} /> },
    { num: 6, title: 'Deployment & Support', desc: 'We deploy the app to stores and provide continuous support.', icon: <LuRocket size={32} /> }
  ];

  const technologies = [
    { name: 'Swift', icon: <SiSwift size={45} className="text-[#FA7343]" /> },
    { name: 'Kotlin', icon: <SiKotlin size={45} className="text-[#7F52FF]" /> },
    { name: 'Flutter', icon: <SiFlutter size={45} className="text-[#02569B]" /> },
    { name: 'React Native', icon: <SiReact size={45} className="text-[#61DAFB]" /> },
    { name: 'Firebase', icon: <SiFirebase size={45} className="text-[#FFCA28]" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={45} className="text-[#339933]" /> },
    { name: 'MongoDB', icon: <SiMongodb size={45} className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql size={45} className="text-[#4479A1]" /> }
  ];

  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/projects`);
        if (response.ok) {
          const data = await response.json();
          const appDevProjects = data.filter((p: any) => p.category?.name === 'App Development' || p.category === 'App Development').slice(0, 4);
          setProjects(appDevProjects);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

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
              App Development That <br className="hidden lg:block" />
              <span className="text-[#00C265]">Drives Results</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We build feature-rich, high-performance mobile applications that deliver seamless user experiences and help your business grow in the digital world.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg shadow-[#00C265]/20">
                Get In Touch <LuArrowRight className="ml-2" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="border border-gray-700 hover:border-[#00C265] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center group">
                View Our Work <LuArrowRight className="ml-2 text-gray-400 group-hover:text-[#00C265] transition-colors" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
             {/* Image Graphic on Right */}
             <div className="relative w-full max-w-[550px] lg:-mr-8 aspect-[4/3] lg:aspect-auto lg:h-[480px] flex items-center justify-center">
                <Image 
                  src="/image copy 12.png" 
                  alt="App Development Graphic" 
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,194,101,0.2)]"
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
              Custom <span className="text-[#00C265]">App Solutions</span> for Your Business
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
              Our App <span className="text-[#00C265]">Development</span> Process
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
            Modern <span className="text-[#00C265]">Technologies</span> for Powerful Apps
          </h2>
        </div>

        {/* Infinite Marquee Scroll */}
        <div className="w-full overflow-hidden relative">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee py-4 gap-6 px-3">
            {/* We duplicate the array to create a seamless scrolling loop */}
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

      {/* 5. RECENT PROJECTS */}
      <section className="py-24 px-6 sm:px-10 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
                Our Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Some of Our <span className="text-[#00C265]">Recent Projects</span>
              </h2>
            </div>
            <Link href="/contact" className="bg-[#040f1a] hover:bg-gray-900 text-white px-6 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg">
              View All Projects <LuArrowRight className="ml-2 text-[#00C265]" />
            </Link>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-500 py-10 text-lg">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="text-center text-gray-500 py-10 text-lg">No recent app development projects found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group flex flex-col">
                  <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <img 
                      src={project.imageUrl || '/image copy 6.png'} 
                      alt={project.title}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col items-start">
                    <span className="bg-[#00C265]/10 text-[#00C265] text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {project.category?.name || project.category || 'App Development'}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                    <div className="flex w-full gap-2 mt-auto">
                      <Link href={project.projectLink || "#"} target="_blank" className="flex-1 flex items-center justify-center gap-1 text-white bg-[#00C265] font-semibold text-[11px] sm:text-[12px] hover:bg-[#00a857] transition-colors rounded-md py-2 shadow-sm px-1">
                        Visit <LuArrowRight size={14} />
                      </Link>
                      <a href="tel:+97431175515" className="flex-1 flex items-center justify-center gap-1 text-gray-700 bg-gray-100 font-semibold text-[11px] sm:text-[12px] hover:bg-gray-200 transition-colors rounded-md py-2 px-1">
                        <LuPhone size={14} /> Call
                      </a>
                      <a href="https://wa.me/97431175515" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-white bg-[#25D366] font-semibold text-[11px] sm:text-[12px] hover:bg-[#128C7E] transition-colors rounded-md py-2 shadow-sm px-1">
                        <SiWhatsapp size={14} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have an App Idea?</h2>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                  Let's turn your idea into a powerful mobile application. We're here to help you every step of the way.
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
