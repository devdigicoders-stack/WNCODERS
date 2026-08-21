"use client";
import React, { useState } from 'react';
import { LuPlay } from 'react-icons/lu';
import DemoModal from './DemoModal';

export default function DemoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-3 px-8 py-4 border border-[#00C265]/30 hover:border-[#00C265] hover:bg-[#00C265]/5 text-white rounded-md text-[16px] font-bold transition-all"
      >
        Request Demo <LuPlay size={18} className="text-[#00C265] fill-[#00C265]" />
      </button>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
