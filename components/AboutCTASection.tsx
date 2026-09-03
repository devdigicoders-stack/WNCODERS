"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import DemoModal from './DemoModal';

/**
 * Client Component — Sirf modal + CTA buttons ke liye.
 * About page ka baaki content Server Component mein rehta hai.
 * Isse SEO improve hota hai kyunki page server pe render hoga.
 */
export default function AboutCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="px-6 py-3.5 bg-[#00C265] hover:bg-[#00a355] text-white rounded-xl font-bold transition-all shadow-[0_5px_20px_rgba(0,194,101,0.2)] flex items-center gap-2 text-[15px]"
        >
          Start a Project <LuArrowRight size={18} strokeWidth={2.5} />
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3.5 bg-transparent border-[1.5px] border-[#00C265] text-white hover:bg-[#00C265]/10 rounded-xl font-bold transition-all flex items-center gap-2 text-[15px]"
        >
          Talk to Our Team <LuArrowRight size={18} className="text-[#00C265]" strokeWidth={2.5} />
        </button>
      </div>

      {/* Also used on Hero section - explore button */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
