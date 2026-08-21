import React from 'react';
import Link from 'next/link';
import { 
  LuUsers, LuUserCog, LuTrendingUp, LuFileText, LuBuilding2, LuMicroscope, 
  LuArrowRight, LuBadgeCheck, LuShieldCheck, LuSettings, LuClock, LuHeadphones 
} from 'react-icons/lu';

export default function Solutions() {
  const solutions = [
    {
      icon: LuUsers,
      title: "HRMS",
      subtitle: "Human Resource Management System",
      desc: "Automate HR processes, manage employees, payroll and performance.",
    },
    {
      icon: LuUserCog,
      title: "CRM",
      subtitle: "Customer Relationship Management",
      desc: "Build stronger relationships, manage leads, sales and improve customer satisfaction.",
    },
    {
      icon: LuTrendingUp,
      title: "ERP",
      subtitle: "Enterprise Resource Planning",
      desc: "Integrate processes, manage resources and improve operational efficiency.",
    },
    {
      icon: LuFileText,
      title: "Billing Software",
      subtitle: "Smart & Easy Billing Solutions",
      desc: "Create invoices, manage taxes and automate billing with accuracy and speed.",
    },
    {
      icon: LuBuilding2,
      title: "Hospital Management",
      subtitle: "System",
      desc: "Manage appointments, patients, staff, billing and hospital operations efficiently.",
    },
    {
      icon: LuMicroscope,
      title: "Pathology Software",
      subtitle: "Lab Management Made Simple",
      desc: "Manage tests, reports, samples and billing for pathology labs with ease.",
    }
  ];

  const features = [
    { icon: LuBadgeCheck, title: "Expert Team", desc: "Skilled professionals with deep industry experience" },
    { icon: LuShieldCheck, title: "Secure & Reliable", desc: "We build secure, scalable and reliable solutions" },
    { icon: LuSettings, title: "Agile Approach", desc: "We follow agile methodology for faster delivery" },
    { icon: LuClock, title: "On-Time Delivery", desc: "We value your time and always deliver on schedule" },
    { icon: LuHeadphones, title: "24/7 Support", desc: "Our support team is always here to help you succeed" }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10" id="solutions">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#00C265] text-[12px] font-bold tracking-[0.15em] uppercase">
              • OUR SOLUTIONS •
            </span>
          </div>
          <h2 className="text-3xl sm:text-[32px] lg:text-[36px] font-bold text-[#040f1a] mb-4 leading-tight">
            Powerful Software Solutions for <span className="text-[#00C265]">Every Business Need</span>
          </h2>
          <p className="text-gray-500 text-[16px] sm:text-[18px]">
            We design and develop powerful software solutions that help you manage operations, engage customers and grow your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div key={idx} className="bg-white border border-gray-100 hover:border-[#00C265]/40 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,194,101,0.08)] transition-all flex flex-col group relative overflow-hidden">
                
                {/* Decorative background circle on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C265]/10 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out" />

                {/* Icon Container */}
                <div className="w-14 h-14 bg-[#00C265]/10 text-[#00C265] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00C265] group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-[#040f1a] font-bold text-[22px] leading-tight mb-2 relative z-10">{solution.title}</h3>
                <p className="text-[#00C265] text-[13px] font-bold uppercase tracking-wide mb-4 relative z-10">{solution.subtitle}</p>

                <p className="text-gray-500 text-[15px] leading-relaxed flex-1 mb-8 relative z-10">
                  {solution.desc}
                </p>

                {/* Link */}
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#040f1a] group-hover:text-[#00C265] font-bold text-[14px] transition-colors mt-auto relative z-10">
                  Book Demo <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* hhh */}

        {/* Dark Banner */}
        <div className="w-full bg-[#040f1a] rounded-2xl p-6 sm:p-10 grid grid-cols-2 lg:flex lg:flex-nowrap gap-6 sm:gap-8 shadow-2xl">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isLast = idx === features.length - 1;
            return (
              <div key={idx} className={`flex items-start gap-3 sm:gap-4 ${isLast ? 'col-span-2 lg:col-span-1' : ''} lg:flex-1`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#00C265]/30 bg-[#00C265]/10 text-[#00C265] flex items-center justify-center shrink-0">
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[13px] sm:text-[15px] mb-1 leading-tight">{feat.title}</h4>
                  <p className="text-gray-400 text-[11px] sm:text-[12px] leading-snug max-w-[200px]">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
