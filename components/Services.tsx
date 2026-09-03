"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LuCode, 
  LuSmartphone, 
  LuCloud, 
  LuPenTool,
  LuMegaphone,
  LuArrowRight,
  LuDatabase
} from 'react-icons/lu';
import DemoModal from './DemoModal';


import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, scalable and high-performance websites.',
    icon: LuCode,
    href: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS & Android apps that deliver seamless experiences.',
    icon: LuSmartphone,
    href: '/services/app-development',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure and cost-effective cloud infrastructure.',
    icon: LuCloud,
    href: '/services/cloud-devops',
  },
  {
    title: 'UI/UX Design',
    description: 'Creative designs that enhance user experience and engagement.',
    icon: LuPenTool,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Database & API Integration',
    description: 'Seamless data exchange and robust database architecture.',
    icon: LuDatabase,
    href: '/services/database-api-integration',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Data-driven marketing to increase visibility and growth.',
    icon: LuMegaphone,
    href: '/services/digital-marketing',
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="w-full bg-[#f8f9fa] py-20 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-[#040f1a] text-3xl md:text-[36px] font-bold leading-tight">
              End-to-End Digital <span className="text-[#00C265]">Solutions</span>
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-2.5 border-[1.5px] border-[#00C265] text-[#00C265] hover:bg-[#00C265] hover:text-white rounded font-bold transition-colors">
            View All Services <LuArrowRight size={18} />
          </Link>
        </div>

        {/* Services Grid - 6 columns on extra large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                onClick={() => service.href ? router.push(service.href) : setIsModalOpen(true)}
                className="bg-white rounded-[16px] p-4 shadow-md hover:shadow-lg hover:-translate-y-1 border-[1.5px] border-gray-100 hover:border-[#00C265] transition-all duration-300 group flex flex-col h-full cursor-pointer relative"
              >
                <div className="text-[#00C265] mb-2.5">
                  <Icon size={30} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-[#040f1a] text-[15px] font-bold mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto flex justify-end">
                  <LuArrowRight size={18} className="text-[#00C265]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
