import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/CTA';
import { LuArrowRight, LuCalendar, LuClock } from 'react-icons/lu';

export default function BlogPage() {
  const recentPosts = [
    {
      title: "Top 5 Cloud Architectures for 2026",
      excerpt: "Discover the latest trends in scalable cloud infrastructure that are redefining how enterprises handle massive data loads.",
      category: "Cloud Computing",
      date: "August 15, 2026",
      readTime: "5 min read",
      image: "/blog/cloud_servers.png",
      slug: "#"
    },
    {
      title: "Why UI/UX is Critical for User Retention",
      excerpt: "A deep dive into why seamless and intuitive user interfaces are the deciding factor between a successful app and a forgotten one.",
      category: "Design",
      date: "August 10, 2026",
      readTime: "4 min read",
      image: "/blog/mobile_ui.png",
      slug: "#"
    },
    {
      title: "Mastering Next.js 16 for Scalable Web Apps",
      excerpt: "Learn how the newest features in Next.js 16 allow developers to build lightning-fast web applications with zero configuration.",
      category: "Development",
      date: "August 05, 2026",
      readTime: "7 min read",
      image: "/blog/react_code.png",
      slug: "#"
    }
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden py-24 px-6 sm:px-10 text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            WNCoders Journal
          </span>
          <h1 className="text-white text-4xl md:text-[56px] font-bold leading-tight mb-6">
            Insights & <span className="text-[#00C265]">Innovations</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Explore the latest articles, tutorials, and thoughts on Artificial Intelligence, Cloud Computing, and Modern Software Development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-20 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-[#040f1a] text-2xl font-bold border-l-4 border-[#00C265] pl-4">Featured Article</h2>
          </div>
          
          <Link href="#" className="group block bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <Image 
                  src="/blog/ai_brain.png" 
                  alt="AI Brain" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 bg-[#00C265]/10 text-[#00C265] text-sm font-bold rounded-full mb-6 w-max">Artificial Intelligence</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#040f1a] mb-6 group-hover:text-[#00C265] transition-colors leading-tight">
                  The Future of AI in Enterprise Software Development
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  As artificial intelligence continues to evolve at breakneck speeds, enterprise software is undergoing a massive transformation. Discover how AI-driven architectures are automating workflows, predicting trends, and entirely reshaping how large-scale businesses operate in 2026.
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm font-medium mb-10">
                  <div className="flex items-center gap-2"><LuCalendar /> August 20, 2026</div>
                  <div className="flex items-center gap-2"><LuClock /> 10 min read</div>
                </div>
                <div className="flex items-center gap-2 text-[#00C265] font-bold text-lg">
                  Read Article <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="w-full pb-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-[#040f1a] text-2xl font-bold border-l-4 border-[#00C265] pl-4">Recent Posts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentPosts.map((post, index) => (
              <Link href={post.slug} key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#040f1a] text-xs font-bold rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-4">
                    <div className="flex items-center gap-1"><LuCalendar size={14} /> {post.date}</div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-1"><LuClock size={14} /> {post.readTime}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#040f1a] mb-3 group-hover:text-[#00C265] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#040f1a] font-bold text-sm group-hover:text-[#00C265] transition-colors mt-auto">
                    Read More <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reused CTA */}
      <CTA />
      
    </main>
  );
}
