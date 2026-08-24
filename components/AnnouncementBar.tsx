"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState({ text: '', link: '', isActive: false });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/announcements`);
        if (response.ok) {
          const data = await response.json();
          setAnnouncement(data);
        }
      } catch (error) {
        console.error('Failed to fetch announcement:', error);
      }
    };
    fetchAnnouncement();
  }, []);

  if (!announcement.isActive || !isVisible || !announcement.text) {
    return null;
  }

  return (
    <div className="bg-[#0ca356] text-white py-1 px-4 relative z-50 overflow-hidden flex items-center border-b border-[#0ca356]/20 min-h-[32px]">
      <style dangerouslySetInnerHTML={{__html: `
        .scrolling-wrapper {
          display: flex;
          white-space: nowrap;
          justify-content: center;
          width: 100%;
        }
        @media (max-width: 768px) {
          @keyframes scroll-text {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scrolling-wrapper {
            animation: scroll-text 15s linear infinite;
            justify-content: flex-start;
          }
          .scrolling-wrapper:hover {
            animation-play-state: paused;
          }
        }
      `}} />
      <div className="w-full flex items-center pr-8 relative">
        <div className="flex-1 overflow-hidden mask-image-fade">
          <div className="scrolling-wrapper flex items-center gap-4">
            
            {/* Megaphone & Text */}
            <div className="flex items-center gap-2">
              <span className="text-base">📢</span>
              <p className="font-medium text-[13px] tracking-wide text-white whitespace-nowrap">
                {announcement.text}
              </p>
            </div>

            {/* Action Button */}
            {announcement.link && (
              <Link 
                href={announcement.link} 
                className="inline-flex items-center gap-1 bg-white text-[#0ca356] px-3 py-0.5 rounded-full font-bold text-[11px] hover:bg-slate-100 transition-colors shadow-sm whitespace-nowrap"
              >
                Click Here
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            )}
            
          </div>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors bg-[#0ca356] z-10"
          aria-label="Close announcement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
