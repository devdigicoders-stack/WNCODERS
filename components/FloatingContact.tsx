"use client";

import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingContact() {
  const phoneNumber = "+97431175515";
  const whatsappNumber = "97431175515";
  const whatsappMessage = encodeURIComponent("Hello WNCoders, I am interested in your software development services.");

  return (
    <aside 
      aria-label="Quick Contact Options"
      className="fixed bottom-6 left-5 sm:bottom-7 sm:left-7 z-[990] flex flex-col items-center gap-3.5 select-none"
    >
      {/* Call Button */}
      <div className="relative flex items-center group">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call WNCoders directly"
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#0a192f] text-white rounded-full shadow-[0_8px_25px_rgba(10,25,47,0.45)] border border-white/20 hover:bg-[#00C265] hover:border-[#00C265] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaPhoneAlt className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
        </a>

        {/* Hover Label for Desktop */}
        <span className="pointer-events-none absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-[#0a192f]/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-gray-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
          Call Now: +974 31175515
        </span>
      </div>

      {/* WhatsApp Button */}
      <div className="relative flex items-center group">
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:bg-[#1ebc59] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* Hover Label for Desktop */}
        <span className="pointer-events-none absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-gray-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-gray-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
          Chat on WhatsApp
        </span>
      </div>
    </aside>
  );
}
