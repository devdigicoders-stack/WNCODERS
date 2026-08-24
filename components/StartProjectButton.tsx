"use client";
import React, { useState } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import DemoModal from './DemoModal';

export default function StartProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#00C265] hover:bg-[#00a355] text-white rounded-full text-[16px] font-bold transition-all shadow-[0_0_20px_rgba(0,194,101,0.25)]"
      >
        Start a Project <LuArrowRight size={18} />
      </button>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
