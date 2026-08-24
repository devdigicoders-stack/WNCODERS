import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-3 group">
      <a 
        href="https://www.facebook.com/share/1FYPKKECea/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 flex items-center justify-center bg-[#00A355] text-white rounded-full hover:-translate-x-2 hover:bg-[#008f4a] transition-all duration-300 shadow-lg"
        aria-label="Facebook"
      >
        <FaFacebookF size={18} />
      </a>
      <a 
        href="https://www.instagram.com/worknestconnect/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 flex items-center justify-center bg-[#00A355] text-white rounded-full hover:-translate-x-2 hover:bg-[#008f4a] transition-all duration-300 shadow-lg"
        aria-label="Instagram"
      >
        <FaInstagram size={18} />
      </a>
      <a 
        href="https://www.linkedin.com/company/worknestconnect" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 flex items-center justify-center bg-[#00A355] text-white rounded-full hover:-translate-x-2 hover:bg-[#008f4a] transition-all duration-300 shadow-lg"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a 
        href="https://www.youtube.com/@worknestconnect" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 flex items-center justify-center bg-[#00A355] text-white rounded-full hover:-translate-x-2 hover:bg-[#008f4a] transition-all duration-300 shadow-lg"
        aria-label="YouTube"
      >
        <FaYoutube size={18} />
      </a>

      <a 
        href="https://wa.me/97431171127" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 flex items-center justify-center bg-[#00A355] text-white rounded-full hover:-translate-x-2 hover:bg-[#008f4a] transition-all duration-300 shadow-lg"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;
