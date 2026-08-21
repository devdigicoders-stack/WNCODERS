import React from 'react';
import { LuSearch, LuFileText, LuPenTool, LuCode, LuRocket, LuHeadphones } from 'react-icons/lu';

export default function Process() {
  const steps = [
    {
      title: "Discover",
      description: "We understand your goals, challenges and business needs.",
      icon: LuSearch,
      number: "01"
    },
    {
      title: "Plan",
      description: "We strategize and create a roadmap tailored to you.",
      icon: LuFileText,
      number: "02"
    },
    {
      title: "Design",
      description: "We craft user-friendly designs that connect and engage.",
      icon: LuPenTool,
      number: "03"
    },
    {
      title: "Develop",
      description: "We build robust and scalable solutions using best practices.",
      icon: LuCode,
      number: "04"
    },
    {
      title: "Deploy",
      description: "We launch with precision and ensure smooth implementation.",
      icon: LuRocket,
      number: "05"
    },
    {
      title: "Support",
      description: "We provide ongoing support and continuous improvement.",
      icon: LuHeadphones,
      number: "06"
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-12 xl:px-20 border-b border-gray-100">
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-8 max-w-[1400px] mx-auto">
        
        {/* Left Content Area */}
        <div className="w-full xl:w-[25%] shrink-0 text-center xl:text-left">
          <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase mb-4 block">
            OUR PROCESS
          </span>
          <h2 className="text-[#040f1a] text-3xl lg:text-[34px] font-bold leading-tight mb-4">
            From Idea to <span className="text-[#00C265]">Impact</span>
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-sm mx-auto xl:mx-0">
            A transparent and agile process that turns your ideas into successful digital solutions.
          </p>
        </div>

        {/* Right Area - Steps */}
        <div className="w-full xl:w-[75%] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-y-12 gap-x-6 lg:gap-x-0 relative mt-4 xl:mt-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center w-[45%] sm:w-[30%] lg:w-[130px] group shrink-0">
                  
                  {/* Circle Icon */}
                  <div className="w-20 h-20 rounded-full bg-white border-[1.5px] border-[#00C265]/40 flex items-center justify-center mb-5 text-[#040f1a] group-hover:border-[#00C265] group-hover:text-[#00C265] transition-colors shadow-sm relative z-10">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="font-bold text-[#040f1a] text-[14px] mb-2 flex items-center gap-1 justify-center whitespace-nowrap">
                    <span className="text-[#00C265]">{step.number}</span> {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-[12px] leading-relaxed max-w-[130px]">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Dotted Arrow (Hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-start justify-center px-2 mt-10">
                    <div className="w-full border-t-[2px] border-dashed border-[#00C265] relative">
                      {/* Arrow Head */}
                      <div className="absolute -right-1 -top-[6px] w-[10px] h-[10px] border-t-[2px] border-r-[2px] border-[#00C265] rotate-45"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
