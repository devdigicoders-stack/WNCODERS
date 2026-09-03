import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuUsers, LuBriefcase, LuGlobe, LuStar, LuQuote, LuHandshake, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { SiGoogle, SiAirbnb, SiMeta, SiSpotify, SiTrello, SiShopify, SiZoho, SiHubspot, SiPaypal, SiUpwork } from 'react-icons/si';
import { FaApple, FaMicrosoft, FaAmazon, FaSlack, FaAndroid } from 'react-icons/fa';
import Testimonials from '@/components/Testimonials';
import StartProjectButton from '@/components/StartProjectButton';

export const metadata: Metadata = {
  title: 'Our Clients | WNCoders Portfolio',
  description: 'See the amazing clients we have worked with at WNCoders.',
};

export default function ClientsPage() {
  const logos = [
    "/logo/wncoders-client-partner-1.png",
    "/logo/wncoders-client-partner-2.png",
    "/logo/wncoders-client-partner-3.png",
    "/logo/wncoders-client-partner-4.png",
    "/logo/wncoders-client-partner-5.png",
    "/logo/wncoders-client-partner-6.png",
    "/logo/wncoders-client-partner-7.png",
    "/logo/wncoders-client-partner-8.png",
    "/logo/wncoders-client-partner-10.png",
    "/logo/wncoders-client-partner-11.png",
    "/logo/wncoders-client-partner-12.png",
    "/logo/wncoders-client-partner-13.png",
    "/logo/wncoders-client-partner-14.png",
    "/logo/divine-perfume-client-logo.jpeg"
  ];

  return (
    <main className="flex flex-col flex-1 bg-[#f8f9fa] font-sans min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#040f1a] text-white relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between z-10 relative gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
                OUR CLIENTS
              </span>
              <div className="flex gap-[2px]">
                 <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
                 <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] text-white mb-6">
              Building Strong Partnerships <br className="hidden sm:block" />
              <span className="text-[#00C265]">Delivering Real Results</span>
            </h1>
            
            <p className="text-gray-400 text-[17px] max-w-lg mb-10 leading-relaxed">
              We are proud to work with forward-thinking companies across the globe. Their trust and collaboration drive our commitment to excellence.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
               {/* Stat 1 */}
               <div className="flex items-center gap-3 border border-gray-800 rounded-lg p-3 lg:p-4 bg-white/5">
                 <div className="w-10 h-10 rounded-md bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                    <LuUsers size={20} />
                 </div>
                 <div>
                   <div className="text-lg lg:text-xl font-bold text-white leading-none mb-1">250+</div>
                   <div className="text-gray-400 text-[11px] font-medium">Happy Clients</div>
                 </div>
               </div>
               
               {/* Stat 2 */}
               <div className="flex items-center gap-3 border border-gray-800 rounded-lg p-3 lg:p-4 bg-white/5">
                 <div className="w-10 h-10 rounded-md bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                    <LuBriefcase size={20} />
                 </div>
                 <div>
                   <div className="text-lg lg:text-xl font-bold text-white leading-none mb-1">120+</div>
                   <div className="text-gray-400 text-[11px] font-medium">Projects Delivered</div>
                 </div>
               </div>


               {/* Stat 4 */}
               <div className="flex items-center gap-3 border border-gray-800 rounded-lg p-3 lg:p-4 bg-white/5">
                 <div className="w-10 h-10 rounded-md bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                    <LuStar size={20} />
                 </div>
                 <div>
                   <div className="text-lg lg:text-xl font-bold text-white leading-none mb-1">98%</div>
                   <div className="text-gray-400 text-[11px] font-medium">Client Satisfaction</div>
                 </div>
               </div>
            </div>

          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              <Image 
                src="/wncoders-global-clients-portfolio.png" 
                alt="WNCoders Global Client Partnerships and Success Stories" 
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Companies We Work With Section */}
      <section className="py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
              OUR VALUED CLIENTS
            </span>
            <div className="flex gap-[2px]">
               <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
               <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#040f1a] mb-6 text-center">
            Companies <span className="text-[#00C265]">We Work With</span>
          </h2>
          
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-[17px] leading-relaxed">
            We've had the privilege of working with forward-thinking companies from various industries. Here are some of our amazing clients.
          </p>
          
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
             {logos.map((logo, idx) => (
               <div key={idx} className="bg-white border border-gray-100 rounded-xl h-32 p-4 flex items-center justify-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#00C265]/30 transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                     <Image src={logo} alt={`Client Logo ${idx + 1}`} fill className="object-contain scale-[1.4] transition-transform duration-500 group-hover:scale-[1.55]" unoptimized />
                  </div>
               </div>
             ))}
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto bg-[#040f1a] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00C265]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left z-10">
             <div className="w-20 h-20 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] shrink-0">
               <LuHandshake size={36} />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-white mb-3">Let's Build Something Amazing Together</h2>
                <p className="text-gray-400 text-base max-w-xl">
                  Join our list of satisfied clients and accelerate your business growth with our cutting-edge digital solutions.
                </p>
             </div>
          </div>
          
          <div className="z-10 shrink-0 w-full md:w-auto">
             <StartProjectButton />
          </div>
        </div>
      </section>

    </main>
  );
}
