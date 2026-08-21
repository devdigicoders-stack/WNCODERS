import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCalendar, LuClock, LuEye, LuSearch, LuChevronRight, LuArrowLeft } from 'react-icons/lu';

export default function SingleBlogPage({ params }: { params: { slug: string } }) {
  
  // Dummy data matching the blog listing
  const allPosts = [
    { title: "The Future of Software Development in 2025", cat: "Technology", date: "May 28, 2025", author: "John Smith", read: "8 min read", img: "/image copy 2.png" },
    { title: "How to Build Scalable Web Applications", cat: "Development", date: "May 26, 2025", author: "Alex Brown", read: "6 min read", img: "/blog/react_code.png" },
    { title: "UI/UX Design Trends in 2025", cat: "Design", date: "May 24, 2025", author: "Sarah Wilson", read: "5 min read", img: "/blog/mobile_ui.png" },
    { title: "Benefits of Cloud Computing for Businesses", cat: "Cloud", date: "May 22, 2025", author: "Michael Lee", read: "7 min read", img: "/blog/cloud_servers.png" },
    { title: "Top Cyber Security Threats in 2025", cat: "Security", date: "May 20, 2025", author: "David Kim", read: "6 min read", img: "/blog/ai_brain.png" },
    { title: "How AI is Revolutionizing Software Development", cat: "AI", date: "May 18, 2025", author: "Emma Davis", read: "8 min read", img: "/blog/mobile_ui.png" },
    { title: "Best Tools to Boost Developer Productivity", cat: "Productivity", date: "May 16, 2025", author: "James Taylor", read: "5 min read", img: "/blog/react_code.png" },
  ];

  // Find post by slug, fallback to first one if not found
  const post = allPosts.find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') === params.slug) || allPosts[0];

  return (
    <main className="min-h-screen bg-[#f9fafb] pt-28 pb-20">
      
      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-8">
         <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-[#00C265] transition-colors flex items-center gap-1">
               <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
               Home
            </Link>
            <LuChevronRight size={14} className="text-gray-300" />
            <Link href="/blog" className="hover:text-[#00C265] transition-colors">Blog</Link>
            <LuChevronRight size={14} className="text-gray-300" />
            <span className="text-gray-400">{post.title}</span>
         </div>
      </div>

      {/* Main Content Layout */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
          
          {/* LEFT COLUMN (Blog Content) */}
          <div className="flex flex-col">
             
             {/* Header Section */}
             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                   <span className="bg-[#00C265] text-white text-[12px] px-4 py-1.5 rounded-full font-bold tracking-wide mb-6 inline-block">{post.cat}</span>
                   <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#040f1a] leading-tight mb-6">
                      {post.title}
                   </h1>
                   <p className="text-gray-500 text-lg leading-relaxed md:pr-10">
                      Explore the top trends shaping the future of software development and how businesses can stay ahead in this rapidly evolving digital world.
                   </p>
                </div>
                
                {/* Share Icons */}
                <div className="flex flex-col items-end shrink-0">
                   <span className="text-sm text-gray-500 font-medium mb-3">Share:</span>
                   <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                   </div>
                </div>
             </div>

             {/* Author Info & Meta */}
             <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-10 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 border border-gray-100">
                      <Image src="/blog/ai_brain.png" fill className="object-cover" alt="Author" />
                   </div>
                   <div>
                      <p className="text-[#040f1a] font-bold text-[15px] mb-0.5">{post.author}</p>
                      <p className="text-gray-500 text-[12px] font-medium">Tech Writer</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm font-medium">
                   <div className="flex items-center gap-2"><LuCalendar size={16} /> {post.date}</div>
                   <div className="flex items-center gap-2"><LuClock size={16} /> {post.read}</div>
                   <div className="flex items-center gap-2"><LuEye size={16} /> 1.2K Views</div>
                </div>
             </div>

             {/* Featured Image */}
             <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-12 bg-[#040f1a] shadow-sm">
                <Image src={post.img} fill className="object-cover" alt="Featured Image" unoptimized />
             </div>

             {/* Article Content */}
             <div className="prose prose-lg max-w-none text-gray-600 mb-16">
                <p className="mb-6">
                  The software development landscape is evolving faster than ever. New technologies, methodologies, and tools are emerging, redefining how businesses build, deploy, and scale digital solutions. As we move into 2025, here are the top trends that will shape the future of software development.
                </p>

                <h2 className="text-2xl font-bold text-[#040f1a] mt-10 mb-4">1. AI-Powered Development</h2>
                <p className="mb-6">
                  Artificial Intelligence is no longer just a buzzword. From AI-assisted coding tools like GitHub Copilot to intelligent testing and bug detection, AI is improving productivity and reducing time-to-market.
                </p>

                <div className="bg-gray-50 border-l-4 border-[#00C265] p-6 rounded-r-2xl mb-8 flex items-start gap-4">
                   <div className="text-[#00C265] text-4xl leading-none font-serif">"</div>
                   <p className="text-gray-700 italic font-medium m-0 pt-2">
                     AI won't replace developers, but developers who use AI will replace those who don't.
                   </p>
                </div>

                <h2 className="text-2xl font-bold text-[#040f1a] mt-10 mb-4">2. Cloud-Native Everything</h2>
                <p className="mb-6">
                  Cloud-native technologies enable businesses to build scalable, resilient, and cost-effective applications. Containers, Kubernetes, and serverless architectures are becoming the new standard.
                </p>

                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#00C265]">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                   </div>
                   <div>
                      <h4 className="text-[#040f1a] font-bold text-lg mb-2 text-center md:text-left">Why it matters?</h4>
                      <p className="text-gray-600 m-0 text-center md:text-left text-sm md:text-base">
                         Cloud-native enables faster deployments, better scalability, and increased reliability.
                      </p>
                   </div>
                </div>

                <h2 className="text-2xl font-bold text-[#040f1a] mt-10 mb-4">3. Low-Code / No-Code Platforms</h2>
                <p className="mb-6">
                  Low-code and no-code platforms are empowering more people to build applications without deep programming knowledge. This trend is accelerating digital transformation across industries.
                </p>

                <h2 className="text-2xl font-bold text-[#040f1a] mt-10 mb-4">4. Enhanced DevSecOps</h2>
                <p className="mb-6">
                  Security is now embedded in every phase of the development lifecycle. DevSecOps ensures faster delivery while maintaining robust security and compliance.
                </p>

                <h2 className="text-2xl font-bold text-[#040f1a] mt-10 mb-4">5. The Rise of Micro Frontends</h2>
                <p className="mb-6">
                  Micro frontends allow teams to build, deploy, and scale UI components independently. This approach improves flexibility and team productivity.
                </p>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-200 text-[#00C265]">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <div>
                      <h4 className="text-[#040f1a] font-bold text-lg mb-2 text-center md:text-left">Key Takeaway</h4>
                      <p className="text-gray-600 m-0 text-center md:text-left text-sm md:text-base">
                         The future of software development is all about intelligence, automation, and adaptability. Embrace these trends today to build a better tomorrow.
                      </p>
                   </div>
                </div>
             </div>



          </div>
          
          {/* RIGHT COLUMN (Sidebar) */}
          <div className="flex flex-col gap-12">
             
             {/* Search */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Search</h3>
                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm focus-within:border-[#00C265] transition-colors">
                   <input type="text" placeholder="Search articles..." className="w-full px-4 py-3 text-sm font-medium text-gray-700 outline-none placeholder-gray-400" />
                   <button className="bg-[#00C265] hover:bg-[#00a355] text-white px-5 flex items-center justify-center transition-colors">
                      <LuSearch size={18} />
                   </button>
                </div>
             </div>

             {/* Categories */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Categories</h3>
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col gap-4">
                   {[
                     { name: "All Categories", count: 120, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg> },
                     { name: "Technology", count: 35, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg> },
                     { name: "Development", count: 28, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                     { name: "UI/UX Design", count: 18, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> },
                     { name: "Cloud Computing", count: 15, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> },
                     { name: "AI & Machine Learning", count: 12, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"></path><path d="M12 6v6l4 2"></path></svg> },
                     { name: "Cyber Security", count: 10, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
                     { name: "Business", count: 8, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
                     { name: "Productivity", count: 6, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
                     { name: "Others", count: 4, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg> },
                   ].map((cat, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                         <div className="flex items-center gap-3 text-gray-700 font-medium text-[14px] group-hover:text-[#00C265] transition-colors">
                            <span className="text-[#00C265]">{cat.icon}</span>
                            {cat.name}
                         </div>
                         <span className="bg-[#e6f9f0] text-[#00a355] text-[11px] font-bold px-2 py-0.5 rounded-full">
                            {cat.count}
                         </span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Popular Posts */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Popular Posts</h3>
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col gap-6">
                   {[
                     { title: "10 Best Practices for Clean Code", date: "May 20, 2025", read: "6 min read", img: "/blog/react_code.png" },
                     { title: "How AI is Transforming Software Industry", date: "May 18, 2025", read: "7 min read", img: "/blog/ai_brain.png" },
                     { title: "A Complete Guide to Cloud Migration", date: "May 15, 2025", read: "5 min read", img: "/blog/cloud_servers.png" },
                     { title: "Cyber Security Trends You Should Know", date: "May 10, 2025", read: "6 min read", img: "/blog/mobile_ui.png" },
                     { title: "How to Improve Your Developer Productivity", date: "May 08, 2025", read: "4 min read", img: "/blog/react_code.png" },
                   ].map((post, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                         <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#040f1a]">
                           <Image src={post.img} fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt="popular" />
                         </div>
                         <div className="flex flex-col justify-center">
                            <h4 className="text-[#040f1a] font-bold text-[14px] leading-snug mb-2 group-hover:text-[#00C265] transition-colors">{post.title}</h4>
                            <p className="text-gray-500 text-[11px] font-medium">{post.date} &bull; {post.read}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Tags */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Tags</h3>
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-wrap gap-2">
                   {["Technology", "AI", "Development", "Cloud", "Design", "Productivity", "Security", "Trends", "Business", "Tips"].map((tag, i) => (
                      <span key={i} className={`px-4 py-1.5 border rounded-xl text-[13px] font-medium cursor-pointer transition-colors ${i === 0 ? 'border-[#00C265]/30 text-[#00C265] bg-[#00C265]/5' : 'border-gray-200 text-gray-600 bg-white hover:border-[#00C265] hover:text-[#00C265]'}`}>
                         {tag}
                      </span>
                   ))}
                </div>
             </div>

             {/* Enquiry Form Sidebar */}
             <div className="bg-[#040f1a] rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-[#00C265] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,194,101,0.4)] relative z-10">
                   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" className="text-white" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">Quick Enquiry</h3>
                <p className="text-gray-400 text-sm font-medium mb-8 relative z-10 px-2">Have a question? Send us a message and we'll get back to you.</p>
                <form className="w-full flex flex-col gap-3 relative z-10 text-left">
                   <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white" required />
                   <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white" required />
                   <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white" required />
                   <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white resize-none" required></textarea>
                   <button type="submit" className="bg-[#00C265] hover:bg-[#00a355] text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#00C265]/20 mt-2">Send Enquiry</button>
                </form>
                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00C265] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00C265] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
             </div>

          </div>
          
        </div>
      </section>

    </main>
  );
}
