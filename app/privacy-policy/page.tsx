"use client";

import React, { useState } from 'react';
import { 
  LuShieldCheck, 
  LuFileText, 
  LuSettings, 
  LuLock, 
  LuCookie, 
  LuUsers, 
  LuUserCheck, 
  LuHistory, 
  LuPhone,
  LuArrowRight,
  LuShield,
  LuServer,
  LuCode
} from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('Overview');

  const sidebarLinks = [
    { id: 'Overview', icon: <LuShieldCheck size={18} />, label: 'Overview' },
    { id: 'Information We Collect', icon: <LuFileText size={18} />, label: 'Information We Collect' },
    { id: 'How We Use Information', icon: <LuSettings size={18} />, label: 'How We Use Information' },
    { id: 'Data Protection', icon: <LuLock size={18} />, label: 'Data Protection' },
    { id: 'Cookies Policy', icon: <LuCookie size={18} />, label: 'Cookies Policy' },
    { id: 'Third-Party Services', icon: <LuUsers size={18} />, label: 'Third-Party Services' },
    { id: 'Your Rights', icon: <LuUserCheck size={18} />, label: 'Your Rights' },
    { id: 'Changes to Policy', icon: <LuHistory size={18} />, label: 'Changes to Policy' },
    { id: 'Contact Us', icon: <LuPhone size={18} />, label: 'Contact Us' },
  ];

  const contentData = {
    'Overview': {
      icon: <LuShieldCheck size={32} />,
      title: '1. Overview',
      content: (
        <>
          <p className="mb-4">
            At <strong>WNCoders</strong>, we value your trust and are committed to protecting your personal and business data. As a leading IT services company specializing in web development, mobile applications, UI/UX design, and cloud solutions, we handle sensitive project and client information daily.
          </p>
          <p>
            This Privacy Policy explains what information we collect from you, how we use it to deliver our technology solutions, and the strict security measures we take to keep it safe and secure.
          </p>
        </>
      )
    },
    'Information We Collect': {
      icon: <LuFileText size={32} />,
      title: '2. Information We Collect',
      content: (
        <>
          <p className="mb-4">To provide top-tier IT services, we may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company details.</li>
            <li><strong>Project Data:</strong> Source code, database schemas, API keys, and server access credentials required for development and deployment.</li>
            <li><strong>Financial Information:</strong> Billing details necessary for processing payments for our IT services.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website and client portals.</li>
          </ul>
        </>
      )
    },
    'How We Use Information': {
      icon: <LuSettings size={32} />,
      title: '3. How We Use Information',
      content: (
        <>
          <p className="mb-4">The information we collect is strictly used to deliver and enhance our IT services. We use your data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Develop, test, and deploy software applications and digital solutions tailored to your business needs.</li>
            <li>Manage cloud infrastructure and perform system maintenance.</li>
            <li>Communicate project updates, technical support, and billing information.</li>
            <li>Improve our development workflows and internal processes.</li>
          </ul>
          <p className="mt-4"><strong>Note:</strong> We never sell, rent, or trade your personal or project data to external marketers.</p>
        </>
      )
    },
    'Data Protection': {
      icon: <LuLock size={32} />,
      title: '4. Data Protection & Security',
      content: (
        <>
          <p className="mb-4">Security is at the core of our IT operations. We implement robust, industry-standard security measures, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Encryption:</strong> Data in transit and at rest is protected using modern encryption protocols (SSL/TLS, AES-256).</li>
            <li><strong>Access Control:</strong> Strict role-based access controls ensure that only authorized developers and engineers can access your project data.</li>
            <li><strong>NDAs & Compliance:</strong> All our employees and contractors are bound by strict Non-Disclosure Agreements (NDAs).</li>
            <li><strong>Secure Infrastructure:</strong> We utilize secure, compliant cloud environments like AWS, Azure, and Google Cloud.</li>
          </ul>
        </>
      )
    },
    'Cookies Policy': {
      icon: <LuCookie size={32} />,
      title: '5. Cookies Policy',
      content: (
        <>
          <p className="mb-4">
            Our website and client portals use cookies to enhance your browsing experience and analyze site traffic.
          </p>
          <p className="mb-4">
            Cookies are small data files stored on your device. We use them for managing user sessions, remembering your preferences, and gathering analytics to improve our website's performance. You can choose to disable cookies through your browser settings, though some features of our site may not function properly without them.
          </p>
        </>
      )
    },
    'Third-Party Services': {
      icon: <LuUsers size={32} />,
      title: '6. Third-Party Services',
      content: (
        <>
          <p className="mb-4">
            In the course of delivering our IT solutions, we may integrate or utilize trusted third-party services:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cloud Providers:</strong> AWS, Google Cloud, Vercel, or DigitalOcean for hosting and infrastructure.</li>
            <li><strong>Development Tools:</strong> GitHub, GitLab, or Bitbucket for version control and CI/CD pipelines.</li>
            <li><strong>Payment Processors:</strong> Secure gateways like Stripe or PayPal for processing transactions.</li>
          </ul>
          <p className="mt-4">These third parties are bound by their own strict privacy policies and we ensure they comply with high data protection standards.</p>
        </>
      )
    },
    'Your Rights': {
      icon: <LuUserCheck size={32} />,
      title: '7. Your Rights',
      content: (
        <>
          <p className="mb-4">You have complete control over your data. You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal and project data we hold about you.</li>
            <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> Request the deletion of your data or source code from our servers after project completion.</li>
            <li><strong>Withdraw Consent:</strong> Opt-out of any marketing communications at any time.</li>
          </ul>
        </>
      )
    },
    'Changes to Policy': {
      icon: <LuHistory size={32} />,
      title: '8. Changes to Policy',
      content: (
        <>
          <p className="mb-4">
            As technology and regulations evolve, we may occasionally update this Privacy Policy. 
          </p>
          <p>
            Any significant changes will be communicated directly to our active clients via email or through announcements on our client portal. We encourage you to review this page periodically for the latest information on our privacy practices.
          </p>
        </>
      )
    },
    'Contact Us': {
      icon: <LuPhone size={32} />,
      title: '9. Contact Us',
      content: (
        <>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please don't hesitate to reach out to our team:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p><strong>Email:</strong> <a href="mailto:info@worknestconnect.com" className="text-[#00C265] hover:underline">info@worknestconnect.com</a></p>
            <p className="mt-2"><strong>Phone:</strong> +974 31175515 / +974 31171127</p>
            <p className="mt-2"><strong>Address:</strong> 4th Floor, Office 405, Room 09, Central Complex, Near Doha Municipality, B Ring Rd, Doha, Qatar</p>
          </div>
        </>
      )
    }
  };

  const activeContent = contentData[activeTab as keyof typeof contentData];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dark Header Section */}
      <div className="bg-[#040f1a] pt-32 pb-24 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-sm font-medium mb-6">
              <LuShieldCheck className="mr-2" size={16} />
              PRIVACY POLICY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how 
              <span className="text-[#00C265]"> WNCoders</span> collects, uses, and protects your IT project and personal information.
            </p>
          </div>
          
          {/* Image Graphic on Right */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
             <Image 
                src="/wncoders-privacy-policy.png" 
                alt="Privacy Policy Graphic" 
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
            <div className="w-full lg:w-1/4 shrink-0">
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
                        <span className="font-medium text-sm">{link.label}</span>
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

                {/* Bottom Clarification Banner (Integrated) */}
                <div className="bg-[#f0fdf4] rounded-xl border border-green-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00C265] shadow-sm border border-green-50">
                      <LuShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Your Privacy Matters</h3>
                      <p className="text-gray-600 text-sm">We are committed to safeguarding your data and maintaining your trust.</p>
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
