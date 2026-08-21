"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/CTA';
import { LuArrowRight, LuCalendar, LuClock } from 'react-icons/lu';

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All');
  const recentPosts = [
    {
      title: "Top 5 Cloud Architectures for 2026",
      excerpt: "Discover the latest trends in scalable cloud infrastructure that are redefining how enterprises handle massive data loads.",
      category: "Cloud Computing",
      date: "August 15, 2026",
      readTime: "5 min read",
      image: "/blog/cloud_servers.png",
      slug: "/blog/top-5-cloud-architectures-2026"
    },
    {
      title: "Why UI/UX is Critical for User Retention",
      excerpt: "A deep dive into why seamless and intuitive user interfaces are the deciding factor between a successful app and a forgotten one.",
      category: "Design",
      date: "August 10, 2026",
      readTime: "4 min read",
      image: "/blog/mobile_ui.png",
      slug: "/blog/why-ui-ux-is-critical"
    },
    {
      title: "Mastering Next.js 16 for Scalable Web Apps",
      excerpt: "Learn how the newest features in Next.js 16 allow developers to build lightning-fast web applications with zero configuration.",
      category: "Development",
      date: "August 05, 2026",
      readTime: "7 min read",
      image: "/blog/react_code.png",
      slug: "/blog/mastering-nextjs-16"
    },
    {
      title: "The Evolution of AI in Healthcare",
      excerpt: "Explore how Artificial Intelligence is revolutionizing diagnostics, patient care, and medical research in 2026.",
      category: "AI & Healthcare",
      date: "July 28, 2026",
      readTime: "8 min read",
      image: "/blog/ai_brain.png",
      slug: "/blog/evolution-of-ai-in-healthcare"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "A comprehensive guide to designing backend microservices that can withstand network failures and scale gracefully.",
      category: "Backend Development",
      date: "July 22, 2026",
      readTime: "6 min read",
      image: "/blog/react_code.png",
      slug: "/blog/building-resilient-microservices"
    },
    {
      title: "Optimizing Mobile Apps for 5G",
      excerpt: "Strategies and techniques for leveraging modern 5G network speeds to deliver ultra-responsive mobile applications.",
      category: "Mobile Development",
      date: "July 15, 2026",
      readTime: "5 min read",
      image: "/blog/mobile_ui.png",
      slug: "/blog/optimizing-mobile-apps-for-5g"
    }
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden py-20 px-6 sm:px-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Text & Search */}
          <div className="flex flex-col text-left">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.1em] uppercase mb-4 block">
              OUR BLOG
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              Insights, Ideas.<br/>
              <span className="text-[#00C265]">Innovation.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-[500px]">
              Stay updated with the latest trends, insights and expert opinions from the world of software and technology.
            </p>
            

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[600px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">500+</h4>
                  <p className="text-gray-400 text-xs">Articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">25+</h4>
                  <p className="text-gray-400 text-xs">Categories</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">10K+</h4>
                  <p className="text-gray-400 text-xs">Readers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C265]/10 flex items-center justify-center text-[#00C265]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">1M+</h4>
                  <p className="text-gray-400 text-xs">Views</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative h-[300px] lg:h-[400px] w-full hidden lg:block">
            <Image 
              src={`/bloghero.png?t=${new Date().getTime()}`} 
              alt="Blog Hero Image" 
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* New 2-Column Main Layout */}
      <section className="w-full bg-white py-20 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[77%_23%] gap-12">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            
            {/* Featured Article Area */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                 <div className="w-1.5 h-4 bg-[#00C265]"></div> FEATURED ARTICLE
              </div>
              <Link href="/blog/the-future-of-software-development" className="bg-white rounded-3xl border border-gray-100 p-3 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center overflow-hidden block group hover:shadow-md transition-shadow">
                 {/* Image */}
                 <div className="relative w-full lg:w-[45%] xl:w-[48%] h-[320px] rounded-[20px] overflow-hidden bg-[#040f1a] shrink-0">
                   <Image src="/image copy 2.png" fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Featured" unoptimized />
                 </div>
                 {/* Content */}
                 <div className="flex flex-col flex-1 p-2 md:p-4 lg:pr-8 py-4 lg:py-8 min-w-0 w-full">
                    <span className="bg-[#00C265] text-white text-[12px] px-4 py-1.5 rounded-full w-max mb-5 font-bold tracking-wide">Technology</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#040f1a] mb-5 leading-snug truncate whitespace-normal line-clamp-2 group-hover:text-[#00C265] transition-colors">The Future of Software Development in 2025</h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-8 pr-2">Explore the top trends shaping the future of software development and how businesses can stay ahead in this rapidly evolving digital world.</p>
                    <div className="flex flex-wrap items-center gap-4 xl:gap-6 mt-auto w-full">
                       <div className="flex flex-wrap items-center gap-4 xl:gap-6">
                           <div className="flex items-center gap-3 shrink-0">
                              <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                                 <Image src="/blog/ai_brain.png" fill className="object-cover" alt="Author" />
                              </div>
                              <div className="flex flex-col">
                                <p className="text-[#040f1a] text-[13px] font-bold leading-none mb-1">John Smith</p>
                                <p className="text-gray-400 text-[11px] font-medium">Tech Writer</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-3 xl:gap-4 text-gray-400 text-[12px] font-medium border-l border-gray-200 pl-4 xl:pl-6 shrink-0">
                              <div className="flex items-center gap-1.5 whitespace-nowrap"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> May 28, 2025</div>
                           </div>
                       </div>
                       <div className="bg-[#00C265] text-white px-5 py-2.5 text-[13px] rounded-lg font-bold flex items-center justify-center gap-2 transition-colors lg:ml-auto shrink-0 whitespace-nowrap group-hover:bg-[#00a355]">
                          Read Article <LuArrowRight size={16} />
                       </div>
                    </div>
                 </div>
              </Link>
            </div>

            {/* Latest Articles Area */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                 <div className="w-1.5 h-4 bg-[#00C265]"></div> LATEST ARTICLES
              </div>
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                 {['All', 'Technology', 'Development', 'Design', 'Business', 'Cloud'].map((tab) => (
                   <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`px-6 py-2.5 font-bold rounded-[14px] text-[13px] shrink-0 transition-colors shadow-sm ${
                       activeTab === tab 
                         ? 'bg-[#00C265] text-white border border-[#00C265] px-8' 
                         : 'bg-white text-gray-600 hover:text-[#040f1a] border border-gray-200 hover:border-gray-300'
                     }`}
                   >
                     {tab}
                   </button>
                 ))}
                 <button className="px-5 py-2.5 bg-white text-gray-600 hover:text-[#040f1a] border border-gray-200 font-bold rounded-[14px] text-[13px] flex items-center gap-1.5 shrink-0 shadow-sm hover:border-gray-300 transition-colors">
                   More <svg className="text-gray-400" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "How to Build Scalable Web Applications", cat: "Development", date: "May 26, 2025", author: "Alex Brown", read: "6 min read", img: "/blog/react_code.png" },
                  { title: "UI/UX Design Trends in 2025", cat: "Design", date: "May 24, 2025", author: "Sarah Wilson", read: "5 min read", img: "/blog/mobile_ui.png" },
                  { title: "Benefits of Cloud Computing for Businesses", cat: "Cloud", date: "May 22, 2025", author: "Michael Lee", read: "7 min read", img: "/blog/cloud_servers.png" },
                  { title: "Top Cyber Security Threats in 2025", cat: "Security", date: "May 20, 2025", author: "David Kim", read: "6 min read", img: "/blog/ai_brain.png" },
                  { title: "How AI is Revolutionizing Software Development", cat: "AI", date: "May 18, 2025", author: "Emma Davis", read: "8 min read", img: "/blog/mobile_ui.png" },
                  { title: "Best Tools to Boost Developer Productivity", cat: "Productivity", date: "May 16, 2025", author: "James Taylor", read: "5 min read", img: "/blog/react_code.png" },
                ]
                .filter(item => activeTab === 'All' || item.cat === activeTab)
                .map((item, index) => {
                  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                  return (
                  <Link href={`/blog/${slug}`} key={index} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col p-5 hover:shadow-md transition-shadow group block">
                   <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-6 bg-[#040f1a]">
                     <Image src={item.img} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Thumb" unoptimized />
                   </div>
                   <div className="flex items-center justify-between mb-4">
                     <span className="bg-[#00C265] text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">{item.cat}</span>
                     <span className="text-gray-400 text-[11px] font-medium">{item.date}</span>
                   </div>
                   <h3 className="text-[#040f1a] font-bold text-lg leading-snug mb-8 group-hover:text-[#00C265] transition-colors">{item.title}</h3>
                   <div className="mt-auto flex items-center justify-between text-[12px] font-medium">
                     <div className="flex items-center gap-2 text-gray-400">
                       <span>By {item.author}</span>
                       <div className="w-1 h-1 bg-gray-300 rounded-full mx-1"></div>
                       <span>{item.read}</span>
                     </div>
                     <span className="text-[#00C265] font-bold flex items-center gap-1 group-hover:underline">Read more <LuArrowRight size={12} /></span>
                   </div>
                 </Link>
                )})}
              </div>

              {/* Load More */}
              <div className="flex justify-center">
                 <button className="bg-white border border-gray-200 text-gray-600 font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:border-gray-300 transition-colors shadow-sm text-[13px]">
                   Load More Articles <svg className="rotate-90 text-gray-400" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                 </button>
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="flex flex-col gap-12 pt-2">
             
             {/* Categories */}
             <div>
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> CATEGORIES
                </div>
                <div className="flex flex-col gap-3">
                   {[
                      { name: "All Categories", count: 120 },
                      { name: "Technology", count: 35 },
                      { name: "Development", count: 28 },
                      { name: "UI/UX Design", count: 18 },
                      { name: "Cloud Computing", count: 15 },
                      { name: "AI & Machine Learning", count: 12 },
                      { name: "Cyber Security", count: 10 },
                      { name: "Business", count: 8 },
                      { name: "Productivity", count: 6 },
                      { name: "Others", count: 4 },
                   ].map((cat, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4 text-[#040f1a] font-medium text-[15px] group-hover:text-[#00C265] transition-colors">
                           <svg className="text-[#00C265]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                           {cat.name}
                        </div>
                        <span className="bg-[#00C265]/10 text-[#00C265] text-xs font-bold px-3 py-1 rounded-full">{cat.count}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Popular Posts */}
             <div className="mt-4">
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> POPULAR POSTS
                </div>
                <div className="flex flex-col gap-6">
                   {[
                     { title: "10 Best Practices for Clean Code", date: "May 20, 2025", read: "6 min read", img: "/blog/react_code.png" },
                     { title: "How AI is Transforming Software Industry", date: "May 18, 2025", read: "7 min read", img: "/blog/ai_brain.png" },
                     { title: "A Complete Guide to Cloud Migration", date: "May 15, 2025", read: "5 min read", img: "/blog/cloud_servers.png" },
                     { title: "Cyber Security Trends You Should Know", date: "May 10, 2025", read: "6 min read", img: "/blog/mobile_ui.png" },
                     { title: "How to Improve Your Developer Productivity", date: "May 08, 2025", read: "4 min read", img: "/blog/react_code.png" },
                   ].map((post, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                         <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-[#040f1a]">
                           <Image src={post.img} fill className="object-cover group-hover:scale-110 transition-transform" alt="popular" />
                         </div>
                         <div className="flex flex-col justify-center">
                            <h4 className="text-[#040f1a] font-bold text-[13px] leading-snug mb-1.5 group-hover:text-[#00C265] transition-colors">{post.title}</h4>
                            <p className="text-gray-500 text-[11px] font-medium">{post.date} &bull; {post.read}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Tags */}
             <div className="mt-4">
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> TAGS
                </div>
                <div className="flex flex-wrap gap-2">
                   {["Technology", "AI", "Development", "Cloud", "Design", "Productivity", "Security", "Trends", "Business", "Tips"].map((tag, i) => (
                      <span key={i} className={`px-4 py-1.5 border rounded-xl text-[13px] font-medium cursor-pointer transition-colors ${i === 0 ? 'border-[#00C265]/30 text-[#00C265] bg-[#00C265]/5' : 'border-gray-200 text-gray-600 bg-white hover:border-[#00C265] hover:text-[#00C265]'}`}>
                         {tag}
                      </span>
                   ))}
                </div>
             </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <CTA />

    </main>
  );
}
