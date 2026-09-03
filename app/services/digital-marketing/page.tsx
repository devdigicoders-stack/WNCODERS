"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuSearch,
  LuFileText,
  LuSettings,
  LuLink,
  LuMapPin,
  LuShoppingCart,
  LuChartBar,
  LuTrendingUp,
  LuTarget,
  LuStar,
  LuRocket,
  LuCircleCheck,
  LuArrowRight
} from 'react-icons/lu';
import { FcGoogle } from 'react-icons/fc';
import DemoModal from '../../../components/DemoModal';

export default function DigitalMarketingSEO() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = [
    {
      title: 'Keyword Research',
      desc: 'We find the right keywords your customers are searching for.',
      icon: <LuSearch size={32} />
    },
    {
      title: 'On-Page SEO',
      desc: 'Optimize your website content, structure and meta tags.',
      icon: <LuFileText size={32} />
    },
    {
      title: 'Technical SEO',
      desc: 'Improve website speed, crawlability, indexing and overall performance.',
      icon: <LuSettings size={32} />
    },
    {
      title: 'Off-Page SEO',
      desc: 'Build high-quality backlinks and improve your domain authority.',
      icon: <LuLink size={32} />
    },
    {
      title: 'Local SEO',
      desc: 'Rank in local searches and get more traffic from your area.',
      icon: <LuMapPin size={32} />
    },
    {
      title: 'E-Commerce SEO',
      desc: 'Boost your online store visibility and increase product sales.',
      icon: <LuShoppingCart size={32} />
    }
  ];

  const processSteps = [
    { num: '01', title: 'Website Audit', desc: 'We analyze your website and competitors to find opportunities.', icon: <LuFileText size={24} /> },
    { num: '02', title: 'Keyword Research', desc: 'We discover high-value keywords with ranking potential.', icon: <LuSearch size={24} /> },
    { num: '03', title: 'On-Page Optimization', desc: 'We optimize your content, meta tags, headings and internal links.', icon: <LuSettings size={24} /> },
    { num: '04', title: 'Technical Optimization', desc: 'We fix technical issues and improve your website performance.', icon: <LuSettings size={24} /> },
    { num: '05', title: 'Link Building', desc: 'We build high-quality backlinks from trusted websites.', icon: <LuLink size={24} /> },
    { num: '06', title: 'Track & Improve', desc: 'We monitor performance and continuously improve results.', icon: <LuChartBar size={24} /> }
  ];

  const results = [
    { value: '250%+', label: 'Increase in Organic Traffic', desc: 'Average growth for our clients', icon: <LuTrendingUp size={28} className="text-[#00C265]" /> },
    { value: '180%+', label: 'Increase in Leads', desc: 'More leads, more business', icon: <LuTarget size={28} className="text-[#00C265]" /> },
    { value: '90%+', label: 'Top 10 Rankings', desc: 'High rankings for valuable keywords', icon: <LuStar size={28} className="text-[#00C265]" /> },
    { value: '120%+', label: 'ROI Improvement', desc: 'Better ROI with SEO campaigns', icon: <LuRocket size={28} className="text-[#00C265]" /> }
  ];

  const projects = [
    {
      img: '/image copy 6.png', // Fallbacks
      badge: 'E-Commerce Store',
      title: 'Increased Organic Traffic by 320%',
      desc: 'We helped an e-commerce store rank on top and increase organic sales.'
    },
    {
      img: '/image copy 7.png',
      badge: 'Local Business',
      title: 'Ranked #1 in Local Search & Increased Leads by 200%',
      desc: 'Local SEO strategy helped this business dominate local search results.'
    },
    {
      img: '/image copy 8.png',
      badge: 'SaaS Company',
      title: '300% Growth in Organic Traffic in 6 Months',
      desc: 'Technical SEO and content strategy that drove massive growth.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="bg-[#040f1a] pt-12 pb-8 md:pt-16 md:pb-10 px-6 sm:px-10 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2">
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-xs font-bold tracking-wider mb-5 border border-[#00C265]/20 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              SEO SERVICES
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-5 leading-tight">
              Rank Higher. Get Found. <br className="hidden lg:block" />
              <span className="text-[#00C265]">Grow Faster.</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Our SEO strategies help your business rank higher on Google, drive qualified traffic, and increase conversions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg shadow-[#00C265]/20">
                Get Free SEO Audit <LuArrowRight className="ml-2" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="border border-gray-700 hover:border-[#00C265] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center group">
                Our SEO Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-t border-gray-800 pt-6">
              <div className="flex items-center gap-2">
                <FcGoogle size={28} />
                <div className="flex flex-col text-white text-xs font-bold">
                  <span>Google</span>
                  <span className="text-gray-400 font-normal">Partner</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/20 flex items-center justify-center text-[#00C265]">
                  <LuStar size={16} />
                </div>
                <div className="flex flex-col text-white text-xs font-bold">
                  <span>SEO Experts</span>
                  <span className="text-gray-400 font-normal">10+ Years Experience</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00C265]/20 flex items-center justify-center text-[#00C265]">
                  <LuCircleCheck size={16} />
                </div>
                <div className="flex flex-col text-white text-xs font-bold">
                  <span>100%</span>
                  <span className="text-gray-400 font-normal">White Hat SEO</span>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
             <div className="relative w-full max-w-[650px] aspect-[4/3] lg:aspect-auto lg:h-[500px] flex items-center justify-center">
                <Image 
                  src="/digital-marketing-seo-services-wncoders.png" 
                  alt="SEO Dashboard Graphic" 
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,194,101,0.2)]"
                  priority
                />
             </div>
          </div>
        </div>
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
              Our <span className="text-[#00C265]">SEO</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {offerings.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,194,101,0.1)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-[#00C265] mb-5 group-hover:bg-[#00C265]/10 transition-colors">
                  {offer.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS (Dark Background) */}
      <section className="py-24 px-6 sm:px-10 bg-[#040f1a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Our SEO Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Proven <span className="text-[#00C265]">SEO</span> Process
            </h2>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-[28px] left-[8%] right-[8%] border-t border-dashed border-[#00C265]/30"></div>
            
            <div className="grid grid-cols-6 relative z-10">
              {processSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group px-2">
                  <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-4 relative z-10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-[#00C265] group-hover:text-white">
                    {step.icon}
                  </div>
                  <div className="text-[#00C265] font-bold text-sm mb-2">{step.num}</div>
                  <h3 className="text-[13px] font-bold text-white mb-2 leading-tight px-1">{step.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed px-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Stepper (Vertical) */}
          <div className="lg:hidden flex flex-col gap-8 relative pl-8">
            <div className="absolute top-0 bottom-0 left-[27px] w-[1px] bg-[#00C265]/30 dashed"></div>
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-6 relative z-10">
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] shadow-sm">
                  {step.icon}
                </div>
                <div className="flex-grow pt-2">
                  <div className="text-[#00C265] font-bold text-sm mb-1">{step.num}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESULTS */}
      <section className="py-24 px-6 sm:px-10 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              RESULTS THAT SPEAK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Results for Real <span className="text-[#00C265]">Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#00C265]/10 flex items-center justify-center shrink-0">
                  {result.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{result.value}</h3>
                  <div className="text-sm font-bold text-gray-800 mb-1">{result.label}</div>
                  <p className="text-gray-500 text-xs">{result.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. CTA SECTION */}
      <section className="py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden border border-gray-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col text-center md:text-left relative z-10 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Rank Higher and <span className="text-[#00C265]">Grow Your Business?</span></h2>
              <p className="text-gray-500 text-base md:text-lg">
                Get a free SEO audit report and discover opportunities to grow.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center w-full lg:w-auto shadow-[0_0_20px_rgba(0,194,101,0.3)] hover:shadow-[0_0_30px_rgba(0,194,101,0.5)] transform hover:-translate-y-1">
                Get Free Audit Now <LuArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
