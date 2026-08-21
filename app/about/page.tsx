import React from 'react';
import Image from 'next/image';
import { 
  LuArrowRight, LuUsers, LuRocket, LuTarget, LuChartBar, 
  LuLaptop, LuLayoutTemplate, LuSmartphone, LuMegaphone, LuBot, 
  LuCloud, LuPaintbrush, LuDatabase, LuCode, LuBuilding, 
  LuCircleCheck, LuSearch, LuLightbulb, LuPenTool, LuX,
  LuUpload, LuTrendingUp 
} from 'react-icons/lu';
import { FaUsers, FaRocket, FaBullseye, FaChartLine, FaCheckCircle, FaSearch, FaPencilAlt, FaCode } from 'react-icons/fa';
export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-white">
      
      {/* 1. Hero Section (The Merger) */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden pt-16 pb-10 lg:pt-20 lg:pb-16 px-6 sm:px-10">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C265]/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            <span className="text-[#00C265] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              ABOUT US
            </span>
            <h1 className="text-white text-4xl md:text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-6">
              Two Teams.<br />
              <span className="text-[#00C265]">One Vision.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              DigiCoders Technologies and WorkNest Connect come together to deliver powerful digital solutions that drive business growth and create long-term value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-[#00C265] hover:bg-[#00a355] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#00C265]/20 flex items-center justify-center gap-2">
                Explore Partnership <LuArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-[#00C265] text-white hover:bg-[#00C265]/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Start a Project <LuArrowRight size={18} className="text-[#00C265]" />
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full h-[300px] lg:h-[400px] flex justify-center items-center">
            <Image 
              src="/AboutHero.png" 
              alt="WNCoders Merger" 
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 2. OUR PARTNERSHIP */}
      <section className="w-full py-20 px-6 sm:px-10 bg-white text-center border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[#00C265] text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265]"></span>
              <span className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></span>
            </span>
            <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
              OUR PARTNERSHIP
            </span>
            <span className="text-[#00C265] text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265]"></span>
            </span>
          </div>
          
          <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold mb-6">
            Where Technology Meets <span className="text-[#00C265]">Business Growth</span>
          </h2>
          <p className="text-gray-600 max-w-[650px] mx-auto mb-12 text-[16px] leading-relaxed">
            Our partnership is built on a shared belief that technology, <br className="hidden md:block" />
            creativity, and strategy together create powerful digital experiences.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center lg:border-r lg:border-gray-300 px-6">
              <div className="w-24 h-24 rounded-full bg-white border-[1.5px] border-[#00C265]/30 flex items-center justify-center mb-6 text-[#034d28]">
                <FaUsers size={40} />
              </div>
              <h4 className="font-bold text-[#040f1a] text-[19px] mb-3">Stronger Together</h4>
              <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-[220px]">
                Two expert teams working as one to deliver exceptional results.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col items-center lg:border-r lg:border-gray-300 px-6">
              <div className="w-24 h-24 rounded-full bg-white border-[1.5px] border-[#00C265]/30 flex items-center justify-center mb-6 text-[#034d28]">
                <FaRocket size={38} className="-rotate-12" />
              </div>
              <h4 className="font-bold text-[#040f1a] text-[19px] mb-3">Future Focused</h4>
              <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-[220px]">
                Leveraging technology and creativity to build future-ready digital solutions.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="flex flex-col items-center lg:border-r lg:border-gray-300 px-6">
              <div className="w-24 h-24 rounded-full bg-white border-[1.5px] border-[#00C265]/30 flex items-center justify-center mb-6 text-[#034d28]">
                <FaBullseye size={40} />
              </div>
              <h4 className="font-bold text-[#040f1a] text-[19px] mb-3">Client Success</h4>
              <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-[220px]">
                Your success is our priority. We build solutions that drive real business impact.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="flex flex-col items-center px-6">
              <div className="w-24 h-24 rounded-full bg-white border-[1.5px] border-[#00C265]/30 flex items-center justify-center mb-6 text-[#034d28]">
                <FaChartLine size={38} />
              </div>
              <h4 className="font-bold text-[#040f1a] text-[19px] mb-3">Long Term Value</h4>
              <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-[220px]">
                We believe in lasting partnerships and delivering continuous value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPANY CARDS */}
      <section className="w-full py-12 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Middle X Badge (Visible on large screens) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] rounded-full bg-[#040f1a] border border-[#00C265]/50 items-center justify-center">
            <LuX size={28} className="text-[#00C265]" strokeWidth={1.5} />
          </div>

          {/* DigiCoders Card */}
          <div className="bg-[#040f1a] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center md:items-stretch justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] rounded-full blur-[100px] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                {/* Hexagon Logo for DigiCoders */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#00C265]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#040f1a]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <LuCode size={20} className="text-[#00C265]" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-[28px] font-bold leading-none tracking-tight">Digi<span className="text-[#00C265]">Coders</span></h3>
                  <span className="text-[15px] font-normal text-white mt-1 block">Technologies</span>
                </div>
              </div>
              <p className="text-gray-300 text-[14px] leading-relaxed max-w-sm mb-6">
                A technology-driven software development company delivering custom digital solutions.
              </p>
              <ul className="space-y-3.5 relative z-10">
                {[
                  "Software Development",
                  "Web & Mobile App Development",
                  "ERP / CRM Solutions",
                  "AI, Cloud & Automation",
                  "API Integration & Maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-[14px] font-medium">
                    <FaCheckCircle className="text-[#00C265] shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative w-full md:w-[50%] mt-8 md:mt-0 flex justify-end items-center pointer-events-none">
               <Image 
                 src="/Digicoderslogo.png" 
                 alt="DigiCoders Solutions" 
                 width={600}
                 height={600}
                 className="object-contain w-[130%] md:w-[150%] max-w-none md:-mr-16 drop-shadow-2xl"
                 unoptimized
               />
            </div>
          </div>

          {/* WorkNest Card */}
          <div className="bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.06)] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center md:items-stretch justify-between">
            <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                {/* Stylized W for WorkNest */}
                <div className="text-[#00C265] font-black text-[42px] leading-none tracking-tighter w-12 h-12 flex items-center justify-center">
                  W
                </div>
                <div>
                  <h3 className="text-[#040f1a] text-[28px] font-bold leading-none tracking-tight">WorkNest</h3>
                  <span className="text-[15px] font-bold text-[#040f1a] mt-1 block">Connect</span>
                </div>
              </div>
              <p className="text-gray-600 text-[14px] leading-relaxed max-w-sm mb-6">
                A digital growth partner helping brands connect, engage, and grow in the digital era.
              </p>
              <ul className="space-y-3.5 relative z-10">
                {[
                  "Digital Marketing",
                  "Graphic Designing",
                  "Web & App Development",
                  "IT & AI Solutions",
                  "Business Consulting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#040f1a] text-[14px] font-medium">
                    <FaCheckCircle className="text-[#00C265] shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative w-full md:w-[50%] mt-8 md:mt-0 flex justify-end items-center pointer-events-none">
               <Image 
                 src="/image copy 6.png" 
                 alt="WorkNest Solutions" 
                 width={600}
                 height={600}
                 className="object-contain w-[130%] md:w-[150%] max-w-none md:-mr-16 drop-shadow-xl"
                 unoptimized
               />
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK TOGETHER */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 border-t-[1.5px] border-dashed border-[#00C265]/70"></div>
              <span className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></span>
              <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase px-1">
                HOW WE WORK TOGETHER
              </span>
              <span className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></span>
              <div className="w-10 border-t-[1.5px] border-dashed border-[#00C265]/70"></div>
            </div>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold mb-4">
              From Idea to <span className="text-[#00C265]">Impact</span>
            </h2>
            <p className="text-gray-500 text-[15px] max-w-lg mx-auto">
              A streamlined process focused on transparency, collaboration, and results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 text-center relative">
            {[
              { icon: FaSearch, title: "Discover", desc: "We understand your goals, challenges, and business needs." },
              { icon: FaBullseye, title: "Strategize", desc: "We create a smart strategy tailored to your business objectives." },
              { icon: FaPencilAlt, title: "Design", desc: "Our creative team designs engaging and user-friendly experiences." },
              { icon: FaCode, title: "Develop", desc: "We build robust, scalable and secure solutions using latest technologies." },
              { icon: FaRocket, title: "Launch", desc: "We deploy with precision and ensure a smooth go-live experience." },
              { icon: FaChartLine, title: "Grow", desc: "We help you grow with marketing, support and continuous improvement." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 group">
                <div className="w-[84px] h-[84px] rounded-full border-[1.5px] border-[#00C265]/30 bg-white flex items-center justify-center mb-5 text-[#034d28] transition-transform group-hover:scale-105">
                  <step.icon size={32} />
                </div>
                <h4 className="font-bold text-[#040f1a] mb-2 text-[17px]">{step.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
                
                {/* Arrow Connector (hidden on the last item) */}
                {i < 5 && (
                  <div className="hidden md:flex absolute top-[42px] left-[calc(50%+45px)] w-[calc(100%-90px)] z-0 items-center justify-center">
                    <div className="w-full border-t-[2px] border-dashed border-[#00C265] relative">
                      <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-3 h-3 border-t-[2px] border-r-[2px] border-[#00C265] rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPLETE DIGITAL ECOSYSTEM */}
      <section className="w-full py-24 px-6 sm:px-10 bg-[#040f1a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          
          {/* Left Side: 3D Image */}
          <div className="w-full flex items-center justify-center relative">
             <Image 
               src="/image copy 7.png" 
               alt="Digital Ecosystem" 
               width={800}
               height={800}
               className="object-contain w-[110%] max-w-none md:w-full h-auto drop-shadow-[0_0_30px_rgba(0,194,101,0.15)]"
               unoptimized
             />
          </div>

          {/* Right Side: Text and Grid */}
          <div className="w-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
                ONE PARTNERSHIP
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
                <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
              </div>
            </div>
            <h2 className="text-white text-3xl md:text-[42px] font-bold mb-2 leading-tight">
              Complete Digital <span className="text-[#00C265]">Ecosystem.</span>
            </h2>
            <p className="text-gray-300 text-[15px] max-w-md mb-2 leading-relaxed">
              End-to-end digital services to help your business succeed in the modern world.
            </p>

            {/* Right Grid (Replaced with Image) */}
            <div className="w-full mt-0 flex items-center justify-start lg:justify-center">
              <Image 
                src="/image-removebg-preview (5).png" 
                alt="Services Grid" 
                width={800}
                height={600}
                className="object-contain w-[90%] md:w-[85%] h-auto drop-shadow-[0_0_15px_rgba(0,194,101,0.15)]"
                unoptimized
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR PARTNERSHIP IN NUMBERS */}
      <section className="w-full py-12 px-6 sm:px-10 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C265]"></div>
            <span className="text-[#00C265] text-xs font-bold tracking-[0.2em] uppercase">
              OUR PARTNERSHIP IN NUMBERS
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C265]"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 divide-x-0 md:divide-x divide-gray-200">
            {[
              { val: "1000+", label: "Projects Delivered" },
              { val: "850+", label: "Happy Clients" },
              { val: "50+", label: "Skilled Experts" },
              { val: "10+", label: "Years Experience" },
              { val: "2", label: "Strong Companies" },
              { val: "1", label: "Shared Vision" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <span className="text-[#00C265] text-3xl font-bold mb-1">{stat.val}</span>
                <span className="text-[#040f1a] text-xs font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden py-24 px-6 sm:px-10 border-t border-gray-800">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[48%_52%] gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-[44px] font-bold mb-6 leading-tight">
              Let's Build Something<br/>Bigger <span className="text-[#00C265]">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Have an idea or project in mind? Let's turn it into a digital success story.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3.5 bg-[#00C265] hover:bg-[#00a355] text-white rounded-xl font-bold transition-all shadow-[0_5px_20px_rgba(0,194,101,0.2)] flex items-center gap-2 text-[15px]">
                Start a Project <LuArrowRight size={18} strokeWidth={2.5} />
              </button>
              <button className="px-6 py-3.5 bg-transparent border-[1.5px] border-[#00C265] text-white hover:bg-[#00C265]/10 rounded-xl font-bold transition-all flex items-center gap-2 text-[15px]">
                Talk to Our Team <LuArrowRight size={18} className="text-[#00C265]" strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div 
            className="w-full flex items-center justify-end relative mt-8 lg:mt-0"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          >
             <Image 
               src="/image copy 8.png" 
               alt="Handshake Digital Network" 
               width={800}
               height={800}
               className="object-contain w-full md:w-[125%] max-w-none md:-mr-10 drop-shadow-2xl"
               unoptimized
             />
          </div>
        </div>
      </section>

    </main>
  );
}
