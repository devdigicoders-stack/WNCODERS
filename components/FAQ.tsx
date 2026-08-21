'use client';
import React, { useState } from 'react';
import { LuPlus, LuMinus, LuSend, LuCheck } from 'react-icons/lu';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setShowToast(false), 3000);
  };

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer end-to-end IT solutions including Web & Mobile App Development, UI/UX Design, Cloud Services, and IT Consulting."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 4-6 weeks, while a complex custom application can take 3-6 months."
    },
    {
      question: "Do you provide maintenance and support?",
      answer: "Yes, we offer 24/7 support and maintenance packages to ensure your software remains up-to-date, secure, and performs optimally."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer both fixed-price contracts for well-defined projects and hourly/retainer models for ongoing development and support."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10 relative">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-10 right-10 z-50 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-[#040f1a] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-gray-800">
          <div className="w-10 h-10 rounded-full bg-[#00C265]/20 flex items-center justify-center shrink-0">
            <LuCheck className="text-[#00C265]" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[15px] mb-0.5">Message Sent!</h4>
            <p className="text-gray-400 text-[13px]">Our team will get back to you shortly.</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="flex flex-col gap-4 lg:mt-4">
            <h3 className="text-2xl font-bold text-[#040f1a] mb-4">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'border-[#00C265] bg-[#00C265]/5 shadow-[#00C265]/10' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-[17px] leading-snug ${isOpen ? 'text-[#00C265]' : 'text-[#040f1a]'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#00C265] text-white shadow-md' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <LuMinus size={20} /> : <LuPlus size={20} />}
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Form & Info */}
          <div className="flex flex-col">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase block mb-3">
              Got Questions?
            </span>
            <h2 className="text-[#040f1a] text-3xl md:text-[36px] font-bold leading-tight mb-4">
              We're Here to Help
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              Can't find the answer you're looking for? Fill out the quick form below and our support team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="bg-[#f8f9fa] p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black bg-white text-[15px]" required />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black bg-white text-[15px]" required />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1">Your Question</label>
                <textarea placeholder="How can we help you?" rows={2} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#00C265] focus:outline-none focus:ring-2 focus:ring-[#00C265]/20 transition-all text-black bg-white resize-none text-[15px]" required></textarea>
              </div>
              <button type="submit" className="w-full py-3 mt-1 bg-[#040f1a] hover:bg-[#00C265] text-white rounded-lg font-bold text-[15px] transition-colors flex items-center justify-center gap-2 group shadow-md">
                Send Question
                <LuSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
