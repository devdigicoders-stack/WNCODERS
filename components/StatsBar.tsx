import React from 'react';
import { LuBell, LuUsers, LuLightbulb, LuAward, LuBuilding2, LuTarget } from 'react-icons/lu';

export default function StatsBar() {
  const stats = [
    { number: "1000+", label: "Projects Delivered", icon: LuBell },
    { number: "850+", label: "Happy Clients", icon: LuUsers },
    { number: "50+", label: "Skilled Experts", icon: LuLightbulb },
    { number: "10+", label: "Years Experience", icon: LuAward },
    { number: "2", label: "Strong Companies", icon: LuBuilding2 },
    { number: "1", label: "Shared Vision", icon: LuTarget },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] pb-16 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full bg-[#03150d] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-[#00C265]/20 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-nowrap items-center lg:justify-between gap-y-8 gap-x-4 lg:gap-4 lg:divide-x lg:divide-gray-700/50">
          
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-3 sm:gap-4 lg:flex-1 lg:justify-center lg:first:pl-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00C265] flex items-center justify-center text-[#00C265] shrink-0 bg-[#00C265]/5">
                  <Icon size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl lg:text-[22px] font-bold leading-tight">
                    {stat.number}
                  </span>
                  <span className="text-gray-400 text-[12px] font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
