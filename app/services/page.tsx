import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCheck, LuUsers, LuCode, LuSmartphone, LuCloud, LuPenTool, LuMegaphone, LuServer, LuDatabase } from 'react-icons/lu';
import DemoButton from '../../components/DemoButton';
import Solutions from '../../components/Solutions';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';

export const metadata: Metadata = {
  title: 'Our Services | WNCoders',
  description: 'Smart Software Solutions For Modern Businesses',
};

export default function ServicesPage() {
  const stats = [
    { icon: LuCheck, num: "100+", text: "Projects Delivered" },
    { icon: LuUsers, num: "50+", text: "Happy Clients" },
    { icon: LuCode, num: "20+", text: "Expert Developers" }
  ];

  return (
    <main className="flex flex-col flex-1 bg-[#f8f9fa] font-sans min-h-screen">
      
      {/* Dark Hero Section */}
      <section className="bg-[#040f1a] text-white relative overflow-hidden pt-12 pb-8 lg:pt-16 lg:pb-10">
        {/* Subtle Background Glows */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#00C265]/5 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Container */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 z-10 relative">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left gap-6 lg:pr-4">
            
            {/* Badge */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C265]"></div>
              <span className="text-[#00C265] text-[11px] sm:text-[13px] font-bold tracking-[0.15em] uppercase">
                WE BUILD DIGITAL SOLUTIONS
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-white">
              Smart Software Solutions <br className="hidden md:block" />
              For <span className="text-[#00C265]">Modern Businesses</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-gray-400 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl mt-2">
              We help businesses automate, streamline and scale with custom software solutions that drive efficiency, improve productivity and accelerate growth.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-4">
              <Link href="#solutions" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[16px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)]">
                Explore Solutions <LuArrowRight size={18} />
              </Link>
              
              <DemoButton />
            </div>
            
            {/* Bottom Stats Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 xl:gap-12 mt-8 lg:mt-10 border-t border-gray-800 pt-6 w-full">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-md border border-[#00C265]/30 flex items-center justify-center bg-[#00C265]/5 text-[#00C265] shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xl sm:text-2xl font-bold leading-none mb-1">
                        {stat.num}
                      </span>
                      <span className="text-gray-400 text-[11px] sm:text-[12px] font-medium leading-none">
                        {stat.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[450px] w-full">
              <Image 
                src="/image copy 11.png" 
                alt="Dashboard and Mobile Mockup"
                fill
                className="object-contain lg:scale-110 xl:scale-125 lg:origin-right"
                priority
                unoptimized
              />
            </div>
          </div>

        </div>
      </section>

      <Solutions />
      {/* Comprehensive IT Services Section */}
      <section className="bg-white py-20 px-6 sm:px-10" id="services-list">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-3 block">
              WHAT WE DO
            </span>
            <h2 className="text-[#040f1a] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-6">
              Comprehensive IT <span className="text-[#00C265]">Services</span>
            </h2>
            <p className="text-gray-500 text-[16px] sm:text-[18px]">
              We provide end-to-end technology solutions to help your business innovate, automate, and dominate the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Application Development', href: '/services/web-development', desc: 'Custom, scalable, and secure web applications tailored to your unique business needs.', icon: LuCode, features: ['React & Next.js', 'Node.js Backend', 'E-commerce Solutions', 'Custom Dashboards'] },
              { title: 'Mobile App Development', href: '/services/app-development', desc: 'High-performance native and cross-platform mobile apps for iOS and Android.', icon: LuSmartphone, features: ['React Native', 'Flutter', 'UI/UX Excellence', 'App Store Optimization'] },
              { title: 'Cloud & DevOps Solutions', href: '/services/cloud-devops', desc: 'Modernize your infrastructure with secure cloud hosting and automated CI/CD pipelines.', icon: LuCloud, features: ['AWS & Azure', 'Docker & Kubernetes', 'Serverless Architecture', '24/7 Monitoring'] },
              { title: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Stunning and intuitive interfaces that maximize user engagement and retention.', icon: LuPenTool, features: ['Wireframing & Prototyping', 'User Research', 'Interactive Design', 'Brand Identity'] },
              { title: 'Digital Marketing & SEO', desc: 'Data-driven marketing strategies to increase visibility and drive organic traffic.', icon: LuMegaphone, features: ['Search Engine Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'] },
              { title: 'Database & API Integration', desc: 'Robust data management and seamless integration with third-party platforms.', icon: LuDatabase, features: ['SQL & NoSQL', 'REST & GraphQL APIs', 'Data Migration', 'System Integration'] },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#00C265] hover:shadow-[0_8px_30px_rgba(0,194,101,0.1)] transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#00C265]/10 flex items-center justify-center text-[#00C265] mb-6 group-hover:scale-110 group-hover:bg-[#00C265] group-hover:text-white transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#040f1a] text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-[14px] text-gray-600 font-medium">
                        <LuCheck size={16} className="text-[#00C265]" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href || "/contact"} className="text-[#00C265] font-bold text-[15px] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <LuArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Portfolio />
      
    </main>
  );
}
