import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuRocket, LuSmile, LuTrophy, LuMonitor, LuSmartphone, LuShoppingCart, LuBuilding, LuGlobe, LuMessageSquare, LuCode, LuHandshake, LuPhone } from 'react-icons/lu';
import { SiWhatsapp } from 'react-icons/si';
import StartProjectButton from '@/components/StartProjectButton';

export const metadata: Metadata = {
  title: 'Our Projects | WNCoders Portfolio',
  description: 'Explore the recent digital solutions we have built.',
};

async function getProjectsData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const res = await fetch(`${apiUrl}/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const stats = [
    { icon: <LuRocket size={24} />, value: "120+", label: "Projects Completed" },
    { icon: <LuSmile size={24} />, value: "98%", label: "Client Satisfaction" },
    { icon: <LuTrophy size={24} />, value: "5+", label: "Years Experience" }
  ];

  const dummyProjects = [
    { title: "Analytics Dashboard", category: "Web Development", image: "/image copy 11.png", desc: "A comprehensive analytics dashboard for real-time data visualization and business insights.", icon: <LuMonitor size={24} /> },
    { title: "FitTrack Mobile App", category: "Mobile Apps", image: "/image copy 10.png", desc: "A fitness tracking app that helps users monitor workouts, track progress, and achieve their goals.", icon: <LuSmartphone size={24} /> },
    { title: "UrbanMart E-commerce", category: "E-commerce", image: "/WebDevlopmeet.png", desc: "A full-featured e-commerce platform with seamless shopping experience and secure payments.", icon: <LuShoppingCart size={24} /> },
    { title: "ERP Management System", category: "Enterprise Solutions", image: "/image copy 11.png", desc: "An enterprise resource planning system to streamline operations and improve business efficiency.", icon: <LuBuilding size={24} /> },
    { title: "Travel Booking Platform", category: "Web Development", image: "/database_api_graphic.jpg", desc: "A travel booking platform with hotel reservations, tour packages, and easy booking management.", icon: <LuGlobe size={24} /> },
    { title: "Chat Application", category: "Web Development", image: "/image copy 10.png", desc: "Real-time chat application with private messaging, group chats, and secure communication.", icon: <LuMessageSquare size={24} /> }
  ];

  const fetchedProjects = await getProjectsData();
  const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  const projects = fetchedProjects.length > 0 
    ? fetchedProjects.map((p: any) => ({
        title: p.title,
        category: p.category?.name || p.category || "General",
        image: p.imageUrl?.startsWith('http') ? p.imageUrl : `${backendUrl}${p.imageUrl}`,
        desc: p.description,
        projectLink: p.projectLink || "#",
        icon: <LuMonitor size={24} /> // default icon for fetched projects
      }))
    : dummyProjects;

  return (
    <main className="flex flex-col flex-1 bg-[#f8f9fa] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#040f1a] text-white relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between z-10 relative gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
                OUR PROJECTS
              </span>
              <div className="flex gap-[2px]">
                 <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
                 <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] text-white mb-6">
              Delivering Innovative <br className="hidden sm:block" /> Solutions That Drive <br className="hidden sm:block" /> <span className="text-[#00C265]">Success.</span>
            </h1>
            
            <p className="text-gray-400 text-[17px] max-w-lg mb-10 leading-relaxed">
              We take pride in building high-quality digital solutions that help businesses grow, scale, and succeed.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg border border-[#00C265]/30 bg-[#00C265]/5 flex items-center justify-center text-[#00C265]">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white leading-none mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              <Image 
                src="/image copy 16.png" 
                alt="Innovative Solutions" 
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(0,194,101,0.2)] animate-[pulse_8s_ease-in-out_infinite]"
                priority
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#00C265] text-[13px] font-bold tracking-[0.15em] uppercase">
              OUR WORK
            </span>
            <div className="flex gap-[2px]">
               <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
               <div className="w-1.5 h-1.5 bg-[#00C265] rotate-45"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#040f1a] mb-6 text-center">
            Featured <span className="text-[#00C265]">Projects</span>
          </h2>
          
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-[17px] leading-relaxed">
            Explore a selection of our recent work across different industries. Each project is a testament to our commitment to excellence.
          </p>
          

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project: any, idx: number) => (
              <div key={idx} className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_10px_40px_rgba(0,194,101,0.08)] transition-all duration-300 flex flex-col">
                <div className="w-full h-[260px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center pt-8 px-6">
                  <div className="relative w-full h-full rounded-t-xl overflow-hidden shadow-lg shadow-gray-200/50">
                     <Image src={project.image} alt={project.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#00C265] z-10 group-hover:-translate-y-1 transition-transform">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="text-[22px] font-bold text-[#040f1a] mb-2">{project.title}</h3>
                  <span className="text-[#00C265] text-[13px] font-bold mb-4 inline-block">{project.category}</span>
                  
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex w-full gap-2 mt-auto">
                    <Link href={project.projectLink || "#"} target="_blank" className="flex-1 flex items-center justify-center gap-1.5 text-white bg-[#00C265] font-semibold text-[12px] hover:bg-[#00a857] transition-colors rounded-md py-2.5 shadow-sm">
                      Visit <LuArrowRight size={14} />
                    </Link>
                    <a href="tel:+97431175515" className="flex-1 flex items-center justify-center gap-1.5 text-gray-700 bg-gray-100 font-semibold text-[12px] hover:bg-gray-200 transition-colors rounded-md py-2.5">
                      <LuPhone size={14} /> Call
                    </a>
                    <a href="https://wa.me/97431175515" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 text-white bg-[#25D366] font-semibold text-[12px] hover:bg-[#128C7E] transition-colors rounded-md py-2.5 shadow-sm">
                      <SiWhatsapp size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats Section */}
      <section className="bg-[#f8f9fa] py-16 px-6 sm:px-10 border-t border-gray-100 mb-10">
        <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 flex flex-wrap items-center justify-between gap-8">
           <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
               <LuBuilding size={28} />
             </div>
             <div>
               <div className="text-[28px] font-bold text-[#040f1a] leading-tight">120+</div>
               <div className="text-gray-500 text-sm font-medium">Projects Completed</div>
             </div>
           </div>
           
           <div className="hidden lg:block w-px h-16 bg-gray-100"></div>

           <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
               <LuSmile size={28} />
             </div>
             <div>
               <div className="text-[28px] font-bold text-[#040f1a] leading-tight">80+</div>
               <div className="text-gray-500 text-sm font-medium">Happy Clients</div>
             </div>
           </div>
           
           <div className="hidden lg:block w-px h-16 bg-gray-100"></div>

           <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
               <LuCode size={28} />
             </div>
             <div>
               <div className="text-[28px] font-bold text-[#040f1a] leading-tight">250K+</div>
               <div className="text-gray-500 text-sm font-medium">Lines of Code</div>
             </div>
           </div>
           
           <div className="hidden lg:block w-px h-16 bg-gray-100"></div>

           <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
               <LuTrophy size={28} />
             </div>
             <div>
               <div className="text-[28px] font-bold text-[#040f1a] leading-tight">5+</div>
               <div className="text-gray-500 text-sm font-medium">Years Experience</div>
             </div>
           </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto bg-[#040f1a] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00C265]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left z-10">
             <div className="w-20 h-20 rounded-full bg-[#00C265]/10 border border-[#00C265]/30 flex items-center justify-center text-[#00C265] shrink-0">
               <LuHandshake size={36} />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-white mb-3">Let's Build Something Amazing Together</h2>
                <p className="text-gray-400 text-base max-w-xl">
                  Join our list of satisfied clients and accelerate your business growth with our cutting-edge digital solutions.
                </p>
             </div>
          </div>
          
          <div className="z-10 shrink-0 w-full md:w-auto">
             <StartProjectButton />
          </div>
        </div>
      </section>

    </main>
  );
}
