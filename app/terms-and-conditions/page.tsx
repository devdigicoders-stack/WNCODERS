"use client";

import React, { useState } from 'react';
import { 
  LuFileCheck, 
  LuCode, 
  LuUserCheck, 
  LuCopyright, 
  LuWallet, 
  LuTriangleAlert, 
  LuPowerOff, 
  LuScale, 
  LuRefreshCw, 
  LuMail,
  LuArrowRight,
  LuShieldCheck
} from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState('Acceptance of Terms');

  const sidebarLinks = [
    { id: 'Acceptance of Terms', icon: <LuFileCheck size={18} />, label: '1. Acceptance of Terms', num: '01' },
    { id: 'Services', icon: <LuCode size={18} />, label: '2. Services', num: '02' },
    { id: 'User Responsibilities', icon: <LuUserCheck size={18} />, label: '3. User Responsibilities', num: '03' },
    { id: 'Intellectual Property', icon: <LuCopyright size={18} />, label: '4. Intellectual Property', num: '04' },
    { id: 'Payments & Refunds', icon: <LuWallet size={18} />, label: '5. Payments & Refunds', num: '05' },
    { id: 'Limitation of Liability', icon: <LuTriangleAlert size={18} />, label: '6. Limitation of Liability', num: '06' },
    { id: 'Termination', icon: <LuPowerOff size={18} />, label: '7. Termination', num: '07' },
    { id: 'Governing Law', icon: <LuScale size={18} />, label: '8. Governing Law', num: '08' },
    { id: 'Changes to Terms', icon: <LuRefreshCw size={18} />, label: '9. Changes to Terms', num: '09' },
    { id: 'Contact Us', icon: <LuMail size={18} />, label: '10. Contact Us', num: '10' },
  ];

  const contentData = {
    'Acceptance of Terms': {
      icon: <LuFileCheck size={28} />,
      title: '1. Acceptance of Terms',
      num: '01',
      content: (
        <p>
          By accessing and using the WNCoders website, client portals, and IT services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all the terms and conditions of this agreement, then you may not access our website or use any of our software development and consulting services.
        </p>
      )
    },
    'Services': {
      icon: <LuCode size={28} />,
      title: '2. Services',
      num: '02',
      content: (
        <p>
          WNCoders provides professional IT services including, but not limited to, software development, web development, mobile app development, UI/UX design, cloud infrastructure management, and IT consulting. The specific scope, timeline, and deliverables of any project will be outlined in a separate Statement of Work (SOW) or project agreement.
        </p>
      )
    },
    'User Responsibilities': {
      icon: <LuUserCheck size={28} />,
      title: '3. User Responsibilities',
      num: '03',
      content: (
        <p>
          As a client, you agree to provide accurate project requirements, timely feedback, and necessary access to third-party tools or servers required for development. You are responsible for maintaining the confidentiality of any credentials provided to you for our client portals and for all activities that occur under your account.
        </p>
      )
    },
    'Intellectual Property': {
      icon: <LuCopyright size={28} />,
      title: '4. Intellectual Property',
      num: '04',
      content: (
        <p>
          Upon full payment of all project invoices, WNCoders transfers the intellectual property rights of the custom-developed source code to the client. However, WNCoders retains the rights to any pre-existing, reusable code libraries, frameworks, or open-source components used during development. You may not distribute or resell our proprietary tools without written permission.
        </p>
      )
    },
    'Payments & Refunds': {
      icon: <LuWallet size={28} />,
      title: '5. Payments & Refunds',
      num: '05',
      content: (
        <p>
          All project payments must be made according to the milestone schedule agreed upon in the project proposal or invoice. Advance payments made to initiate a project are generally non-refundable to cover initial resource allocation and planning. Refunds for ongoing work are handled on a case-by-case basis as per the specific service agreement.
        </p>
      )
    },
    'Limitation of Liability': {
      icon: <LuTriangleAlert size={28} />,
      title: '6. Limitation of Liability',
      num: '06',
      content: (
        <p>
          WNCoders shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from the use of our services, software bugs, or third-party server downtimes. Our total liability shall not exceed the total amount paid by you for the specific project in question.
        </p>
      )
    },
    'Termination': {
      icon: <LuPowerOff size={28} />,
      title: '7. Termination',
      num: '07',
      content: (
        <p>
          Either party reserves the right to suspend or terminate a project agreement with written notice if the other party breaches these terms. Upon termination, the client is responsible for paying for all work completed up to the termination date. We also reserve the right to suspend access to our services if you engage in unlawful activities.
        </p>
      )
    },
    'Governing Law': {
      icon: <LuScale size={28} />,
      title: '8. Governing Law',
      num: '08',
      content: (
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Qatar. Any disputes arising out of or related to these terms or our IT services shall be subject to the exclusive jurisdiction of the courts in Doha, Qatar.
        </p>
      )
    },
    'Changes to Terms': {
      icon: <LuRefreshCw size={28} />,
      title: '9. Changes to Terms',
      num: '09',
      content: (
        <p>
          WNCoders reserves the right to update or modify these Terms and Conditions at any time to reflect changes in our services or legal requirements. The updated version will be posted on this page with the revised effective date. Continued use of our services after updates constitutes your acceptance of the new terms.
        </p>
      )
    },
    'Contact Us': {
      icon: <LuMail size={28} />,
      title: '10. Contact Us',
      num: '10',
      content: (
        <p>
          If you have any questions or require clarification about these Terms and Conditions before initiating a project with us, please contact us at <strong>info@worknestconnect.com</strong> or call us at <strong>+974 31175515</strong>.
        </p>
      )
    }
  };

  const activeContent = contentData[activeTab as keyof typeof contentData];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Dark Header Section */}
      <div className="bg-[#040f1a] pt-32 pb-24 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-sm font-medium mb-6 border border-[#00C265]/20">
              <LuFileCheck className="mr-2" size={16} />
              TERMS & CONDITIONS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Please read these terms and conditions carefully before using 
              <span className="text-[#00C265]"> WNCoders</span> services and website.
            </p>
          </div>
          
          {/* Image Graphic on Right */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
             <Image 
                src="/wncoders-terms-and-conditions.png" 
                alt="Terms and Conditions Graphic" 
                width={480} 
                height={480} 
                className="w-auto h-auto object-contain opacity-90 drop-shadow-2xl"
                priority
             />
          </div>
        </div>
        {/* Subtle grid background for header */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-12 md:py-16 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[300px] shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <ul className="flex flex-col py-2">
                  {sidebarLinks.map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => setActiveTab(link.id)}
                        className={`w-full flex items-center px-6 py-4 text-left transition-colors ${
                          activeTab === link.id 
                            ? 'bg-[#040f1a] text-white' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <span className="mr-3">{link.icon}</span>
                        <span className="font-medium text-[15px]">{link.label}</span>
                        {activeTab === link.id && <LuArrowRight className="ml-auto text-[#00C265]" size={16} />}
                      </button>
                    </li>
                  ))}
                </ul>
                

              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-full lg:flex-grow">
              
              {/* Single Unified Card */}
              <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 pt-12 md:pt-14 flex flex-col min-h-[400px] relative overflow-hidden">
                
                {/* Top Content Area */}
                <div className="flex flex-col md:flex-row gap-6 flex-grow">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                    {activeContent.icon}
                  </div>
                  <div className="flex-grow pt-2">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{activeContent.title}</h2>
                    <div className="text-gray-600 leading-relaxed text-[15px]">
                      {activeContent.content}
                    </div>
                  </div>
                </div>

                {/* Big Number Watermark/Label on Top Right */}
                <div className="absolute top-10 right-10 text-2xl font-bold text-[#00C265] opacity-80">
                  {activeContent.num}
                </div>

                {/* Bottom Clarification Banner (Integrated) */}
                <div className="bg-[#f0fdf4] rounded-xl border border-green-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00C265] shadow-sm border border-green-50">
                      <LuShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Need Clarification?</h3>
                      <p className="text-gray-600 text-sm">If you have any questions regarding these Terms and Conditions, feel free to reach out to us.</p>
                    </div>
                  </div>
                  <Link href="/contact" className="shrink-0 bg-[#00C265] hover:bg-[#00a857] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-sm shadow-green-200">
                    Contact Us <LuArrowRight className="ml-2" size={18} />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
