import React from 'react';
import Image from 'next/image';
import CTA from '../../components/CTA';
import { FaLaptopCode, FaGlobe, FaShieldAlt, FaRocket, FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';
import { LuTarget, LuEye, LuBriefcase } from 'react-icons/lu';

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-white">
      
      {/* 1. Hero Section (The Merger) */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden py-32 px-6 sm:px-10 text-center">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-[1000px] mx-auto relative z-10">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
            The Birth of a New Era
          </span>
          <h1 className="text-white text-4xl md:text-[56px] font-bold leading-tight mb-8">
            Two Legacies. <span className="text-[#00C265]">One Visionary Future.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Welcome to WNCoders—the ultimate synergy of Digicoders Technologies and WorkNest Connect. We've merged decades of deep technical expertise with modern innovation to redefine global IT solutions.
          </p>
        </div>
      </section>

      {/* 2. The Merger Story */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 bg-[#040f1a] rounded-xl flex items-center justify-center text-[#00C265] text-3xl font-bold">D</div>
              <div className="flex items-center text-gray-400 text-2xl">+</div>
              <div className="w-16 h-16 bg-[#00C265] rounded-xl flex items-center justify-center text-white text-3xl font-bold">W</div>
            </div>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold leading-tight mb-6">
              A Partnership Built on Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              For years, **Digicoders Technologies Private Limited** established itself as a titan in software development and technical training, building robust foundations for enterprises. Meanwhile, **WorkNest Connect** emerged as a forward-thinking agency, crafting modern, scalable, and stunning IT solutions for a global audience.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Recognizing that our strengths complement each other perfectly, we decided to unite. Today, as **WNCoders**, we bring you the unwavering reliability of a legacy firm combined with the agile, cutting-edge innovation of a modern tech startup. 
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#040f1a]/5 to-[#00C265]/10 mix-blend-overlay"></div>
              {/* Placeholder for real team/office merger photo */}
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50 border-2 border-dashed border-gray-200">
                <LuBriefcase size={64} className="mb-4 text-gray-300" />
                <span className="font-semibold text-lg">Merger Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="w-full py-24 px-6 sm:px-10 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#00C265]/10 rounded-2xl flex items-center justify-center mb-8">
              <LuTarget className="text-[#00C265]" size={32} />
            </div>
            <h3 className="text-[#040f1a] text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              To empower businesses globally by delivering scalable, secure, and innovative digital solutions. We strive to bridge the gap between complex technological challenges and elegant, user-centric software that drives real business growth.
            </p>
          </div>
          <div className="bg-[#040f1a] p-12 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:shadow-[#00C265]/10 transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00C265] rounded-full blur-[80px] opacity-30"></div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <LuEye className="text-[#00C265]" size={32} />
            </div>
            <h3 className="text-white text-3xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-300 text-[17px] leading-relaxed relative z-10">
              To become the world's most trusted and innovative IT partner. We envision a future where technology seamlessly integrates with human potential, and where WNCoders is the driving force behind the next generation of digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Combined Strengths */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">Why WNCoders?</span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold">The Power of Synergy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaLaptopCode, title: "Deep Technical Roots", desc: "Inheriting Digicoders' robust engineering practices." },
              { icon: FaRocket, title: "Agile Innovation", desc: "Bringing WorkNest Connect's modern, rapid development lifecycle." },
              { icon: FaGlobe, title: "Global Reach", desc: "Serving clients from local enterprises to international brands." },
              { icon: FaShieldAlt, title: "Enterprise Security", desc: "Uncompromised data protection and scalable infrastructure." }
            ].map((feature, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:border-[#00C265]/30 hover:bg-[#00C265]/5 transition-colors group">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[#00C265] transition-colors mb-6">
                  <feature.icon className="text-[#00C265] group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#040f1a] mb-3">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. By The Numbers */}
      <section className="w-full py-12 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#040f1a] rounded-[2rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(4,15,26,0.1)] relative overflow-hidden">
            
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10 divide-x-0 md:divide-x divide-gray-800">
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white">10<span className="text-[#00C265]">+</span></div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.15em] text-xs">Years Combined Exp.</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white">500<span className="text-[#00C265]">+</span></div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.15em] text-xs">Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white">50<span className="text-[#00C265]">+</span></div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.15em] text-xs">Expert Developers</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white">99<span className="text-[#00C265]">%</span></div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.15em] text-xs">Client Satisfaction</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">Our DNA</span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-10 rounded-2xl flex flex-col items-center text-center">
              <FaCheckCircle className="text-[#00C265] mb-6" size={40} />
              <h4 className="text-xl font-bold text-[#040f1a] mb-3">Integrity</h4>
              <p className="text-gray-500 text-[15px]">We believe in complete transparency and honesty in every line of code we write and every promise we make.</p>
            </div>
            <div className="bg-[#f8f9fa] p-10 rounded-2xl flex flex-col items-center text-center">
              <FaChartLine className="text-[#00C265] mb-6" size={40} />
              <h4 className="text-xl font-bold text-[#040f1a] mb-3">Continuous Excellence</h4>
              <p className="text-gray-500 text-[15px]">The tech world never stops evolving, and neither do we. We constantly upgrade our skills to deliver state-of-the-art solutions.</p>
            </div>
            <div className="bg-[#f8f9fa] p-10 rounded-2xl flex flex-col items-center text-center">
              <FaUsers className="text-[#00C265] mb-6" size={40} />
              <h4 className="text-xl font-bold text-[#040f1a] mb-3">Client-Centricity</h4>
              <p className="text-gray-500 text-[15px]">Your success is our success. We partner with our clients, treating their business goals as our own personal milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Journey (Timeline) */}
      <section className="w-full py-24 px-6 sm:px-10 bg-[#040f1a] text-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-[40px] font-bold">The Journey to WNCoders</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>
            
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-20">
              {/* Left Content (or right on mobile) */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-12 md:text-right">
                <h4 className="text-2xl font-bold text-[#00C265]">Foundation</h4>
                <p className="text-gray-400 mt-2">Digicoders Technologies begins its journey, establishing a massive footprint in IT training and software development in India.</p>
              </div>
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#00C265] rounded-full shadow-[0_0_15px_rgba(0,194,101,0.5)] z-10 top-1 md:top-auto"></div>
              {/* Right Spacer for md */}
              <div className="w-full md:w-[45%] hidden md:block"></div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-20">
              {/* Left Spacer */}
              <div className="w-full md:w-[45%] hidden md:block"></div>
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#00C265] rounded-full shadow-[0_0_15px_rgba(0,194,101,0.5)] z-10 top-1 md:top-auto"></div>
              {/* Right Content */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-12 text-left">
                <h4 className="text-2xl font-bold text-[#00C265]">Modernization</h4>
                <p className="text-gray-400 mt-2">WorkNest Connect is founded, bringing modern web architectures, cloud-native solutions, and a fresh UI/UX approach to global clients.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-12 md:text-right">
                <h4 className="text-3xl font-bold text-white mb-2">The Merger</h4>
                <h4 className="text-xl font-bold text-[#00C265]">Birth of WNCoders</h4>
                <p className="text-gray-400 mt-2">The two giants merge to form WNCoders. Uniting the deep technical legacy of Digicoders with the agile brilliance of WorkNest Connect.</p>
              </div>
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-[#00C265] shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 top-1 md:top-auto"></div>
              {/* Right Spacer */}
              <div className="w-full md:w-[45%] hidden md:block"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Our Culture (Grid) */}
      <section className="w-full py-24 px-6 sm:px-10 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-16">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">Inside WNCoders</span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold">Our Workspace & Culture</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold border-2 border-dashed border-gray-300 overflow-hidden relative">
              <span className="relative z-10">Office Image Placeholder 1</span>
            </div>
            <div className="bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold border-2 border-dashed border-gray-300">Image 2</div>
            <div className="bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold border-2 border-dashed border-gray-300">Image 3</div>
            <div className="col-span-2 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold border-2 border-dashed border-gray-300">Team Activity Placeholder</div>
          </div>
        </div>
      </section>

      {/* 9. Leadership (Placeholder) */}
      <section className="w-full py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-16">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">The Visionaries</span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold">Meet The Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group">
                <div className="w-full aspect-square bg-gray-100 rounded-3xl mb-6 flex items-center justify-center text-gray-400 font-bold border-2 border-dashed border-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">Photo</div>
                </div>
                <h4 className="text-xl font-bold text-[#040f1a]">Leader Name</h4>
                <p className="text-[#00C265] font-semibold mt-1">Founder / Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section (Reused) */}
      <CTA />

    </main>
  );
}
