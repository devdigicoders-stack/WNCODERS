'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { LuX } from 'react-icons/lu';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#040f1a] relative overflow-hidden py-24 px-6 sm:px-10">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <h2 className="text-white text-4xl md:text-[50px] font-bold leading-tight mb-8">
          Ready to Build Your <span className="text-[#00C265]">Next Big Idea?</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's discuss your project and find out how our expertise can help your business grow and succeed in the digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-md text-[17px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)] w-full sm:w-auto"
          >
            Get a Free Consultation
          </button>
          <Link href="/services" className="px-10 py-4 bg-transparent border-2 border-white/20 hover:border-white/50 text-white rounded-md text-[17px] font-bold transition-all w-full sm:w-auto">
            View Our Services
          </Link>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-[500px] shadow-2xl relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
            >
              <LuX size={20} />
            </button>
            
            <div className="p-8">
              <h3 className="text-[#040f1a] text-2xl font-bold mb-2">Request Consultation</h3>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 mt-2 bg-[#00C265] hover:bg-[#00a355] text-white rounded-lg font-bold text-[17px] transition-colors shadow-lg shadow-[#00C265]/20">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
