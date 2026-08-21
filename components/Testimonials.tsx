import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      text: "WORKNESTCONNECT transformed our ideas into a beautiful, scalable web application. Their team is incredibly talented and professional.",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthSync",
      text: "The mobile app they built for us exceeded all expectations. Smooth UI, fast performance, and delivered right on schedule.",
      initial: "M"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, FinCorp",
      text: "Their cloud infrastructure solutions helped us reduce costs by 40% while improving security. Highly recommended!",
      initial: "E"
    },
    {
      name: "David Smith",
      role: "CTO, RetailPlus",
      text: "The UI/UX revamp they did for our e-commerce platform doubled our conversion rate in just one month. Absolutely fantastic work.",
      initial: "D"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager, EduTech",
      text: "Communication was seamless, and the technical expertise they brought to the table was top-notch. We will definitely work with them again.",
      initial: "P"
    },
    {
      name: "James Wilson",
      role: "Operations Head, LogisticsHub",
      text: "They built a custom internal dashboard that completely streamlined our workflow. Best IT agency we have ever partnered with.",
      initial: "J"
    }
  ];

  // Duplicate for seamless infinite scrolling
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-[#f8f9fa] pt-24 pb-6 border-t border-gray-200 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto text-center px-6 sm:px-10 mb-16">
        <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">
          Testimonials
        </span>
        <h2 className="text-[#040f1a] text-4xl md:text-[40px] font-bold">
          What Our Clients Say
        </h2>
      </div>

      <div className="w-full relative">
        {/* Left and Right Gradient Masks */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll-left flex gap-6 py-4 px-6">
          {scrollItems.map((testimonial, index) => (
            <div key={index} className="w-[380px] md:w-[420px] shrink-0 bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300">
              <FaQuoteRight className="absolute top-8 right-10 text-gray-100 text-5xl group-hover:text-[#00C265]/10 transition-colors duration-300" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#00C265]" size={18} />
                ))}
              </div>
              <p className="text-gray-600 text-[16px] italic leading-relaxed mb-10 relative z-10 min-h-[90px]">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C265] to-[#009b50] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#00C265]/30">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-[#040f1a] font-bold text-[17px]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
