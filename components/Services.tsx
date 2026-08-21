import React from 'react';
import { 
  LuAppWindow, 
  LuSmartphone, 
  LuPenTool, 
  LuCloud, 
  LuCode, 
  LuInfinity, 
  LuUserCheck, 
  LuSend 
} from 'react-icons/lu';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: LuAppWindow,
  },
  {
    title: 'Mobile App Development',
    description: 'Native & cross-platform mobile apps for iOS and Android.',
    icon: LuSmartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive and user-centric designs that enhance experiences.',
    icon: LuPenTool,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure and cost-effective cloud infrastructure.',
    icon: LuCloud,
  },
  {
    title: 'Software Development',
    description: 'Robust software solutions tailored to your business requirements.',
    icon: LuCode,
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Automate, deploy and deliver your applications faster and better.',
    icon: LuInfinity,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to help you make the right technology decisions.',
    icon: LuUserCheck,
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your brand, reach more customers and boost online presence.',
    icon: LuSend,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#f8f9fa] pt-4 pb-24 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase">
            Our Services
          </span>
          <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold mt-4 mb-6 leading-tight">
            End-to-End IT Solutions <br className="hidden md:block" /> For Your Business
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            We combine advanced technologies and industry expertise to build powerful solutions that drive growth and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#040f1a] text-lg font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
