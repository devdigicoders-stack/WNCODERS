import React from 'react';
import { LuSearch, LuPenTool, LuCode, LuRocket } from 'react-icons/lu';

export default function Process() {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We understand your goals, target audience, and business requirements.",
      icon: LuSearch,
      number: "01"
    },
    {
      title: "Design & Prototyping",
      description: "We create intuitive UI/UX designs and interactive prototypes.",
      icon: LuPenTool,
      number: "02"
    },
    {
      title: "Development",
      description: "Our experts write clean, scalable, and secure code.",
      icon: LuCode,
      number: "03"
    },
    {
      title: "Testing & Launch",
      description: "Rigorous testing ensures a flawless product deployment.",
      icon: LuRocket,
      number: "04"
    }
  ];

  return (
    <section className="w-full bg-[#040f1a] py-24 px-6 sm:px-10 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase block mb-4">
            Our Work Process
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight">
            How We Deliver Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative bg-[#0d1b2a] border border-gray-800 p-8 rounded-2xl hover:bg-[#112236] hover:border-[#00C265]/50 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-[#00C265]/10 hover:-translate-y-2">
                <div className="text-[70px] font-black text-white/5 absolute top-2 right-6 group-hover:text-[#00C265]/10 transition-colors select-none">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-[#00C265]/10 border border-[#00C265]/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#00C265] transition-colors duration-300 relative z-10">
                  <Icon size={28} className="text-[#00C265] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed relative z-10 flex-1">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
