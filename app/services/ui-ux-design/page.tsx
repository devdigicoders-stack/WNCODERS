"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuPenTool,
  LuLayoutTemplate,
  LuSmartphone,
  LuMousePointer2,
  LuPalette,
  LuUsers,
  LuSearch,
  LuLayoutDashboard,
  LuMonitorPlay,
  LuTestTubeDiagonal,
  LuArrowRight,
  LuCircleCheck,
  LuMessageCircle,
  LuStar,
  LuDiamond,
  LuRocket,
  LuTarget
} from 'react-icons/lu';
import DemoModal from '../../../components/DemoModal';

export default function UiUxDesign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = [
    {
      title: 'User Research',
      desc: 'Understanding users, goals and pain points to create meaningful solutions.',
      icon: <LuSearch size={32} />
    },
    {
      title: 'Wireframing & Prototyping',
      desc: 'Low to high-fidelity wireframes and prototypes to visualize ideas.',
      icon: <LuLayoutTemplate size={32} />
    },
    {
      title: 'UI Design',
      desc: 'Beautiful, consistent and modern interfaces that strengthen your brand.',
      icon: <LuPenTool size={32} />
    },
    {
      title: 'Mobile App Design',
      desc: 'Designing engaging mobile experiences for iOS & Android.',
      icon: <LuSmartphone size={32} />
    },
    {
      title: 'Interaction Design',
      desc: 'Creating smooth interactions and delightful micro-experiences.',
      icon: <LuMousePointer2 size={32} />
    },
    {
      title: 'Design Systems',
      desc: 'Scalable design systems and style guides for consistent products.',
      icon: <LuPalette size={32} />
    }
  ];

  const processSteps = [
    { num: 1, title: 'Discover', desc: 'We understand your business, users and objectives.', icon: <LuUsers size={32} /> },
    { num: 2, title: 'Research', desc: 'We analyze competitors and users to find key insights.', icon: <LuSearch size={32} /> },
    { num: 3, title: 'Wireframe', desc: 'We create layouts and user flows to structure the product.', icon: <LuLayoutDashboard size={32} /> },
    { num: 4, title: 'Design', desc: 'We craft visual designs that are modern and user friendly.', icon: <LuPenTool size={32} /> },
    { num: 5, title: 'Prototype', desc: 'Interactive prototypes to test and validate the experience.', icon: <LuMonitorPlay size={32} /> },
    { num: 6, title: 'Test & Refine', desc: 'We test with real users and refine the design for perfection.', icon: <LuTestTubeDiagonal size={32} /> }
  ];

  const projects = [
    {
      img: '/image copy 6.png', // Fallbacks
      badge: 'FinTech',
      title: 'Banking Dashboard',
      desc: 'Modern dashboard design for seamless financial management.'
    },
    {
      img: '/image copy 7.png',
      badge: 'HealthCare',
      title: 'Health & Fitness App',
      desc: 'Mobile app design for fitness tracking and healthy lifestyle.'
    },
    {
      img: '/image copy 8.png',
      badge: 'E-Commerce',
      title: 'E-Commerce App',
      desc: 'Shopping app design with smooth navigation and checkout flow.'
    },
    {
      img: '/image copy 9.png',
      badge: 'SaaS',
      title: 'SaaS Dashboard',
      desc: 'Clean and intuitive dashboard design for SaaS product analytics.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="bg-[#040f1a] pt-12 pb-8 md:pt-16 md:pb-10 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2">
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-xs font-bold tracking-wider mb-5 border border-[#00C265]/20 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              UI/UX DESIGN SERVICES
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-5 leading-tight">
              Designing Experiences <br className="hidden lg:block" />
              People <span className="text-[#00C265]">Love</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              We create intuitive, engaging and user-centered designs that not only look stunning but also deliver measurable results for your business.
            </p>
            
            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> User Centered Design
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Modern & Clean Interfaces
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Pixel Perfect Design
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Better Engagement & Conversions
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg shadow-[#00C265]/20">
                Start Your Project <LuArrowRight className="ml-2" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="border border-gray-700 hover:border-[#00C265] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center group">
                View Our Work <LuArrowRight className="ml-2 text-gray-400 group-hover:text-[#00C265] transition-colors" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
             {/* Image Graphic on Right */}
             <div className="relative w-full max-w-[550px] lg:-mr-8 aspect-[4/3] lg:aspect-auto lg:h-[450px] flex items-center justify-center">
                <Image 
                  src="/ui-ux-design-services-wncoders.png" 
                  alt="UI/UX Design Graphic" 
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
              Our UI/UX <span className="text-[#00C265]">Design Services</span>
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
              Our UI/UX <span className="text-[#00C265]">Design Process</span>
            </h2>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-[16px] left-[8%] right-[8%] border-t-2 border-dotted border-[#00C265]/40"></div>
            
            <div className="grid grid-cols-6 relative z-10 divide-x divide-gray-100">
              {processSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group px-4">
                  <div className="w-8 h-8 rounded-full bg-[#00C265] flex items-center justify-center text-white font-bold text-[13px] mb-8 relative z-10 shadow-sm ring-4 ring-white">
                    {step.num}
                  </div>
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



      {/* 5. WHY CHOOSE US */}
      <section className="py-24 px-6 sm:px-10 bg-[#040f1a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Businesses Choose <span className="text-[#00C265]">WNCoders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuStar size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">User Focused Approach</h3>
               <p className="text-gray-400 text-sm leading-relaxed">We design with empathy and focus on real user needs.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuDiamond size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Modern & Trendy Designs</h3>
               <p className="text-gray-400 text-sm leading-relaxed">We create modern, clean and visually appealing designs.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuRocket size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Faster Time to Market</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Efficient design process that helps you launch faster.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuTarget size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Business-Oriented Designs</h3>
               <p className="text-gray-400 text-sm leading-relaxed">We design experiences that drive engagement & growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden border border-gray-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 relative z-10 flex-1">
              <div className="w-20 h-20 rounded-2xl bg-[#00C265]/10 border border-[#00C265]/20 flex items-center justify-center shrink-0">
                <LuMessageCircle size={36} className="text-[#00C265]" />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Design Something Amazing Together!</h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl">
                  Have a project in mind? Let's create a beautiful and impactful digital experience for your users.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center w-full lg:w-auto shadow-[0_0_20px_rgba(0,194,101,0.3)] hover:shadow-[0_0_30px_rgba(0,194,101,0.5)] transform hover:-translate-y-1">
                Get in Touch <LuArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
