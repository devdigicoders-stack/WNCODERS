"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuCloud, 
  LuCloudCog,
  LuServer,
  LuActivity,
  LuShieldCheck,
  LuSettings,
  LuRocket,
  LuRefreshCw,
  LuSearch,
  LuPenTool,
  LuCode,
  LuArrowRight,
  LuCircleCheck,
  LuCheck,
  LuMessageCircle
} from 'react-icons/lu';
import { 
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiGitlab,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiElasticstack,
  SiNginx,
  SiHelm,
  SiVault
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import DemoModal from '../../../components/DemoModal';

export default function CloudDevOps() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = [
    {
      title: 'Cloud Strategy & Consulting',
      desc: 'We design cloud strategies aligned with your business goals for optimal scalability and performance.',
      icon: <LuCloud size={32} />
    },
    {
      title: 'Cloud Migration',
      desc: 'Seamlessly migrate your applications and data to the cloud with zero or minimal downtime.',
      icon: <LuCloudCog size={32} />
    },
    {
      title: 'DevOps Consulting',
      desc: 'Improve collaboration, automate workflows, and implement best practices to accelerate delivery and efficiency.',
      icon: <LuSettings size={32} />
    },
    {
      title: 'CI/CD Pipeline Implementation',
      desc: 'Automate build, test, and deployment processes for faster, reliable, and consistent releases.',
      icon: <LuRefreshCw size={32} />
    },
    {
      title: 'Infrastructure as Code (IaC)',
      desc: 'Manage and provision infrastructure using code for consistency, repeatability, and faster deployments.',
      icon: <LuServer size={32} />
    },
    {
      title: 'Monitoring & Managed Services',
      desc: '24/7 monitoring, logging, and support to ensure high availability, performance, and security.',
      icon: <LuShieldCheck size={32} />
    }
  ];

  const processSteps = [
    { num: 1, title: 'Assess & Plan', desc: 'We analyze your current infrastructure and define the right cloud strategy.', icon: <LuSearch size={32} /> },
    { num: 2, title: 'Design & Architect', desc: 'We design a secure, scalable, and cost-effective cloud architecture.', icon: <LuPenTool size={32} /> },
    { num: 3, title: 'Migrate & Build', desc: 'We migrate workloads and build DevOps pipelines with automation.', icon: <LuCloud size={32} /> },
    { num: 4, title: 'Automate & Deploy', desc: 'We implement CI/CD pipelines for automated build, test & deploy.', icon: <LuCode size={32} /> },
    { num: 5, title: 'Monitor & Optimize', desc: 'We monitor performance, optimize costs, and ensure reliability.', icon: <LuActivity size={32} /> },
    { num: 6, title: 'Support & Evolve', desc: 'We provide ongoing support and continuously evolve your infrastructure.', icon: <LuSettings size={32} /> }
  ];

  const technologies = [
    { name: 'AWS', icon: <FaAws size={45} className="text-[#FF9900]" /> },
    { name: 'Microsoft Azure', icon: <VscAzure size={45} className="text-[#0089D6]" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud size={45} className="text-[#4285F4]" /> },
    { name: 'Docker', icon: <SiDocker size={45} className="text-[#2496ED]" /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={45} className="text-[#326CE5]" /> },
    { name: 'Jenkins', icon: <SiJenkins size={45} className="text-[#D24939]" /> },
    { name: 'Terraform', icon: <SiTerraform size={45} className="text-[#7B42BC]" /> },
    { name: 'Ansible', icon: <SiAnsible size={45} className="text-[#EE0000]" /> },
    { name: 'GitLab', icon: <SiGitlab size={45} className="text-[#FC6D26]" /> },
    { name: 'GitHub Actions', icon: <SiGithubactions size={45} className="text-[#2088FF]" /> },
    { name: 'Prometheus', icon: <SiPrometheus size={45} className="text-[#E6522C]" /> },
    { name: 'Grafana', icon: <SiGrafana size={45} className="text-[#F46800]" /> },
    { name: 'ELK Stack', icon: <SiElasticstack size={45} className="text-[#005571]" /> },
    { name: 'NGINX', icon: <SiNginx size={45} className="text-[#009639]" /> },
    { name: 'Helm', icon: <SiHelm size={45} className="text-[#0F1689]" /> },
    { name: 'Vault', icon: <SiVault size={45} className="text-[#000000]" /> }
  ];

  const projects = [
    {
      img: '/image copy 6.png',
      badge: 'AWS Migration',
      title: 'E-commerce Platform Migration',
      desc: 'Migrated a monolithic application to AWS cloud with high availability and auto-scaling.',
      tech: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      img: '/image copy 7.png',
      badge: 'CI/CD Automation',
      title: 'CI/CD for FinTech Application',
      desc: 'Implemented end-to-end CI/CD pipeline reducing deployment time by 80%.',
      tech: ['Jenkins', 'Docker', 'GitLab CI']
    },
    {
      img: '/image copy 8.png',
      badge: 'Infrastructure as Code',
      title: 'IaC for Scalable Infrastructure',
      desc: 'Built scalable infrastructure using Terraform and Ansible for multi-environment setup.',
      tech: ['Terraform', 'Ansible', 'AWS']
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="bg-[#040f1a] pt-12 pb-8 md:pt-16 md:pb-10 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2">
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C265]/10 text-[#00C265] text-xs font-bold tracking-wider mb-5 border border-[#00C265]/20 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              CLOUD & DEVOPS SOLUTIONS
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-5 leading-tight">
              Scale Faster. Deploy Smarter. <br className="hidden lg:block" />
              Run Better in the <span className="text-[#00C265]">Cloud.</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              We help businesses leverage the power of cloud and DevOps to build, deploy, and scale applications faster with improved reliability, security, and cost efficiency.
            </p>
            
            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Faster Time to Market
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Scalable & Reliable Infrastructure
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> Cost Optimization
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <LuCircleCheck className="text-[#00C265] mr-2" size={18} /> High Availability & Security
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center shadow-lg shadow-[#00C265]/20">
                Get a Free Consultation <LuArrowRight className="ml-2" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="border border-gray-700 hover:border-[#00C265] text-white px-8 py-3 rounded text-sm font-bold transition-colors flex items-center group">
                View Our Work <LuArrowRight className="ml-2 text-gray-400 group-hover:text-[#00C265] transition-colors" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
             {/* Image Graphic on Right */}
             <div className="relative w-full max-w-[550px] lg:-mr-8 aspect-[4/3] lg:aspect-auto lg:h-[450px] flex items-center justify-center">
                <Image 
                  src="/cloud-devops-services-wncoders.png" 
                  alt="Cloud and DevOps Graphic" 
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,194,101,0.2)]"
                  priority
                />
             </div>
          </div>
        </div>
        
        {/* Subtle grid background for header */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Cloud & DevOps <span className="text-[#00C265]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,194,101,0.1)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[#00C265] mb-6 group-hover:bg-[#00C265]/10 transition-colors">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-24 px-6 sm:px-10 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Cloud & DevOps <span className="text-[#00C265]">Process</span>
            </h2>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-[16px] left-[8%] right-[8%] border-t-2 border-dotted border-[#00C265]/40"></div>
            
            <div className="grid grid-cols-6 relative z-10 divide-x divide-gray-100">
              {processSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group px-4">
                  <div className="w-8 h-8 rounded-full bg-[#00C265] flex items-center justify-center text-white font-bold text-[13px] mb-8 relative z-10 shadow-sm ring-4 ring-white">
                    {step.num}
                  </div>
                  <div className="w-[84px] h-[84px] flex items-center justify-center text-gray-800 mb-6 bg-white rounded-full border-[1.5px] border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#00C265]/40 group-hover:text-[#00C265]">
                    {step.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-tight px-1">{step.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed px-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Stepper (Vertical) */}
          <div className="lg:hidden flex flex-col gap-8 relative pl-8">
            <div className="absolute top-0 bottom-0 left-[31px] w-[2px] bg-gray-100"></div>
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-6 relative z-10">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265] font-bold shadow-sm">
                  {step.num}
                </div>
                <div className="bg-gray-50 rounded-xl p-5 flex-grow border border-gray-100">
                  <div className="text-[#00C265] mb-3">{step.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES WE USE */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center px-6 sm:px-10 mb-16">
          <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
            Technologies We Use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cloud & DevOps <span className="text-[#00C265]">Technologies</span>
          </h2>
        </div>

        {/* First Marquee Scroll */}
        <div className="w-full overflow-hidden relative mb-8">
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee py-4 gap-6 px-3" style={{ animationDirection: 'normal' }}>
            {[...technologies.slice(0, 8), ...technologies.slice(0, 8)].map((tech, idx) => (
              <div key={idx} className="bg-white shrink-0 rounded-2xl w-40 h-40 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg flex flex-col items-center justify-center gap-4 group transition-all duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Scroll (Reverse) */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee py-4 gap-6 px-3" style={{ animationDirection: 'reverse' }}>
            {[...technologies.slice(8, 16), ...technologies.slice(8, 16)].map((tech, idx) => (
              <div key={idx} className="bg-white shrink-0 rounded-2xl w-40 h-40 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg flex flex-col items-center justify-center gap-4 group transition-all duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US (New Section) */}
      <section className="py-24 px-6 sm:px-10 bg-[#040f1a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center text-[#00C265] text-xs font-bold tracking-wider mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C265] mr-2"></span>
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Businesses Trust <span className="text-[#00C265]">WNCoders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuShieldCheck size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Certified cloud and DevOps engineers with years of hands-on experience.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuRocket size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Faster Delivery</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Automation-first approach for rapid and reliable deployments.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <span className="text-2xl font-bold">$</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Cost Efficient</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Optimize infrastructure and reduce operational costs significantly.</p>
            </div>
            <div className="flex flex-col">
               <div className="w-14 h-14 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] mb-6">
                 <LuActivity size={28} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Round-the-clock monitoring and support for your critical applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden border border-gray-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C265] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 relative z-10 flex-1">
              <div className="w-20 h-20 rounded-2xl bg-[#00C265]/10 border border-[#00C265]/20 flex items-center justify-center shrink-0">
                <LuMessageCircle size={36} className="text-[#00C265]" />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Accelerate Your Cloud Journey?</h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl">
                  Let's build scalable, secure, and high-performing cloud solutions together. Get in touch with our experts today!
                </p>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#00C265] hover:bg-[#00a857] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center w-full lg:w-auto shadow-[0_0_20px_rgba(0,194,101,0.3)] hover:shadow-[0_0_30px_rgba(0,194,101,0.5)] transform hover:-translate-y-1">
                Let's Talk <LuArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
