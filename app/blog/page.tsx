"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/CTA';
import { LuArrowRight, LuCalendar, LuClock, LuLoader, LuTag } from 'react-icons/lu';

function BlogContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [activeTab, setActiveTab] = useState('All');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setActiveTab(categoryFromUrl);
      setTimeout(() => {
        document.getElementById('latest-articles')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/blogs`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Format date helper
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Derived state
  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags || [])));

  const filteredBlogs = activeTab === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === activeTab);

  const featuredBlog = blogs.length > 0 ? blogs[0] : null; // Most recent blog

  const popularBlogs = [...blogs].sort((a, b) => b.views - a.views).slice(0, 5);

  const categoryCounts = blogs.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa]">

      {/* Hero Section */}
      <section className="w-full bg-[#040f1a] relative overflow-hidden pt-10 pb-16 md:py-20 px-6 sm:px-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Text & Search */}
          <div className="flex flex-col text-left">
            <span className="text-[#00C265] text-sm font-bold tracking-[0.1em] uppercase mb-4 block">
              OUR BLOG
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              Insights, Ideas.<br />
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
          <div className="relative h-[300px] lg:h-[400px] w-full block">
            <Image
              src="/wncoders-software-technology-blog.png"
              alt="Blog Hero Image"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* New Blog Grid Layout */}
      <section id="blog-content" className="w-full bg-[#f8f9fa] py-16 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
          {loading ? (
            <div className="flex justify-center items-center h-[300px]">
              <LuLoader className="animate-spin text-[#00C265]" size={40} />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-[300px] text-red-500">
              {error}
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex justify-center items-center h-[300px] text-gray-500 text-lg">
              No blogs found.
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {/* Header and Filters */}
              <div>
                <div className="flex items-center gap-3 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-[15px]">
                  <div className="w-1.5 h-5 bg-[#00C265]"></div> LATEST ARTICLES
                </div>
                
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 font-bold rounded-[14px] text-[14px] shrink-0 transition-all ${
                        activeTab === tab 
                          ? 'bg-[#00C265] text-white shadow-md' 
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid */}
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-20 text-gray-500 text-lg">No articles found in this category.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((item, index) => (
                <Link href={`/blog/${item.slug}`} key={item._id || index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col group block transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                  <div className="relative w-full h-[260px] bg-[#040f1a] overflow-hidden">
                    <Image
                      src={item.image && item.image.startsWith('http') ? item.image : (item.image ? `http://localhost:5000${item.image}` : '/blog/react_code.png')}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={item.title}
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-sm flex items-center gap-1.5 text-[11px] font-bold text-[#040f1a] shadow-sm">
                      <LuTag className="text-[#00C265]" size={14} />
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-500 text-[12px] font-bold mb-4 uppercase tracking-wider">
                      <LuCalendar size={14} className="text-gray-400" />
                      {formatDate(item.createdAt)}
                    </div>

                    <h3 className="text-[#040f1a] font-bold text-[19px] leading-snug mb-3 group-hover:text-[#00C265] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-3">
                      {item.excerpt || item.description || "Read this amazing article to learn more about our latest insights and technology trends."}
                    </p>

                    <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[#00C265] font-bold text-[14px] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                        Read More <LuArrowRight size={16} />
                      </span>
                      <span className="text-gray-400 text-[12px] font-medium capitalize">
                        By {item.author || 'Admin'}
                      </span>
                    </div>
                  </div>
                </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

    </main>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <LuLoader className="animate-spin text-[#00C265]" size={40} />
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
