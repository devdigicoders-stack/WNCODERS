"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/CTA';
import { LuArrowRight, LuCalendar, LuClock, LuLoader } from 'react-icons/lu';

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
          <div className="relative h-[300px] lg:h-[400px] w-full block">
            <Image 
              src="/bloghero.png" 
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
      <section id="blog-content" className="w-full bg-white py-20 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[77%_23%] gap-12">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            
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
              <>
                {/* Featured Article Area */}
                {featuredBlog && (
                  <div>
                    <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                      <div className="w-1.5 h-4 bg-[#00C265]"></div> FEATURED ARTICLE
                    </div>
                    <Link href={`/blog/${featuredBlog.slug}`} className="bg-white rounded-3xl border border-gray-100 p-3 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center overflow-hidden block group hover:shadow-md transition-shadow">
                      {/* Image */}
                      <div className="relative w-full lg:w-[45%] xl:w-[48%] h-[320px] rounded-[20px] overflow-hidden bg-[#040f1a] shrink-0">
                        <Image 
                          src={featuredBlog.image && featuredBlog.image.startsWith('http') ? featuredBlog.image : (featuredBlog.image ? `http://localhost:5000${featuredBlog.image}` : '/image copy 2.png')} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          alt={featuredBlog.title} 
                          unoptimized 
                        />
                      </div>
                      {/* Content */}
                      <div className="flex flex-col flex-1 p-2 md:p-4 lg:pr-8 py-4 lg:py-8 min-w-0 w-full">
                          <span className="bg-[#00C265] text-white text-[12px] px-4 py-1.5 rounded-full w-max mb-5 font-bold tracking-wide">{featuredBlog.category}</span>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#040f1a] mb-5 leading-snug truncate whitespace-normal line-clamp-2 group-hover:text-[#00C265] transition-colors">{featuredBlog.title}</h2>
                          <p className="text-gray-500 text-[14px] leading-relaxed mb-8 pr-2 line-clamp-2">{featuredBlog.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-4 xl:gap-6 mt-auto w-full">
                            <div className="flex flex-wrap items-center gap-4 xl:gap-6">
                                <div className="flex items-center gap-3 shrink-0">
                                    <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100 flex items-center justify-center text-gray-400 font-bold">
                                      {featuredBlog.author.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="text-[#040f1a] text-[13px] font-bold leading-none mb-1">{featuredBlog.author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 xl:gap-4 text-gray-400 text-[12px] font-medium border-l border-gray-200 pl-4 xl:pl-6 shrink-0">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {formatDate(featuredBlog.createdAt)}</div>
                                </div>
                            </div>
                            <div className="bg-[#00C265] text-white px-5 py-2.5 text-[13px] rounded-lg font-bold flex items-center justify-center gap-2 transition-colors lg:ml-auto shrink-0 whitespace-nowrap group-hover:bg-[#00a355]">
                                Read Article <LuArrowRight size={16} />
                            </div>
                          </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Latest Articles Area */}
                <div id="latest-articles" className="scroll-mt-32">
                  <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                    <div className="w-1.5 h-4 bg-[#00C265]"></div> LATEST ARTICLES
                  </div>
                  
                  {/* Filter Tabs */}
                  <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((tab) => (
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
                  </div>

                  {/* Grid */}
                  {filteredBlogs.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">No articles found in this category.</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                      {filteredBlogs.map((item, index) => (
                        <Link href={`/blog/${item.slug}`} key={item._id || index} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col p-5 hover:shadow-md transition-shadow group block">
                        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-6 bg-[#040f1a]">
                          <Image 
                            src={item.image && item.image.startsWith('http') ? item.image : (item.image ? `http://localhost:5000${item.image}` : '/blog/react_code.png')} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            alt={item.title} 
                            unoptimized 
                          />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-[#00C265] text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">{item.category}</span>
                          <span className="text-gray-400 text-[11px] font-medium">{formatDate(item.createdAt)}</span>
                        </div>
                        <h3 className="text-[#040f1a] font-bold text-lg leading-snug mb-8 group-hover:text-[#00C265] transition-colors line-clamp-2">{item.title}</h3>
                        <div className="mt-auto flex items-center justify-between text-[12px] font-medium">
                          <div className="flex items-center gap-2 text-gray-400">
                            <span>By {item.author}</span>
                            <div className="w-1 h-1 bg-gray-300 rounded-full mx-1"></div>
                            <span>{item.readTime || '5 min read'}</span>
                          </div>
                          <span className="text-[#00C265] font-bold flex items-center gap-1 group-hover:underline">Read more <LuArrowRight size={12} /></span>
                        </div>
                      </Link>
                      ))}
                    </div>
                  )}

                  {/* Load More */}
                  {filteredBlogs.length > 0 && (
                    <div className="flex justify-center">
                      <button className="bg-white border border-gray-200 text-gray-600 font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:border-gray-300 transition-colors shadow-sm text-[13px]">
                        Load More Articles <svg className="rotate-90 text-gray-400" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="flex flex-col gap-12 pt-2 lg:sticky lg:top-32 lg:self-start">
             
             {/* Categories */}
             <div>
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> CATEGORIES
                </div>
                <div className="flex flex-col gap-3">
                   {/* All Categories total count */}
                   <div className="flex items-center justify-between group cursor-pointer" onClick={() => setActiveTab('All')}>
                     <div className={`flex items-center gap-4 font-medium text-[15px] transition-colors ${activeTab === 'All' ? 'text-[#00C265]' : 'text-[#040f1a] group-hover:text-[#00C265]'}`}>
                        <svg className="text-[#00C265]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        All Categories
                     </div>
                     <span className="bg-[#00C265]/10 text-[#00C265] text-xs font-bold px-3 py-1 rounded-full">{blogs.length}</span>
                   </div>
                   
                   {Object.entries(categoryCounts).map(([cat, count], i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer" onClick={() => setActiveTab(cat)}>
                        <div className={`flex items-center gap-4 font-medium text-[15px] transition-colors ${activeTab === cat ? 'text-[#00C265]' : 'text-[#040f1a] group-hover:text-[#00C265]'}`}>
                           <svg className="text-[#00C265]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                           {cat}
                        </div>
                        <span className="bg-[#00C265]/10 text-[#00C265] text-xs font-bold px-3 py-1 rounded-full">{count as React.ReactNode}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Popular Posts */}
             <div className="mt-4">
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> POPULAR POSTS
                </div>
                {popularBlogs.length === 0 ? (
                  <p className="text-sm text-gray-500">No popular posts yet.</p>
                ) : (
                  <div className="flex flex-col gap-6">
                     {popularBlogs.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={post._id || i} className="flex items-center gap-4 group cursor-pointer">
                           <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-[#040f1a]">
                             <Image 
                               src={post.image && post.image.startsWith('http') ? post.image : (post.image ? `http://localhost:5000${post.image}` : '/blog/react_code.png')} 
                               fill 
                               className="object-cover group-hover:scale-110 transition-transform" 
                               alt={post.title} 
                               unoptimized 
                             />
                           </div>
                           <div className="flex flex-col justify-center">
                              <h4 className="text-[#040f1a] font-bold text-[13px] leading-snug mb-1.5 group-hover:text-[#00C265] transition-colors line-clamp-2">{post.title}</h4>
                              <p className="text-gray-500 text-[11px] font-medium">{formatDate(post.createdAt)} &bull; {post.readTime || '5 min read'}</p>
                           </div>
                        </Link>
                     ))}
                  </div>
                )}
             </div>

             {/* Tags */}
             <div className="mt-4">
                <div className="flex items-center gap-2 mb-6 text-[#040f1a] font-bold tracking-widest uppercase text-xs">
                   <div className="w-1.5 h-4 bg-[#00C265]"></div> TAGS
                </div>
                 <div className="flex flex-wrap gap-2">
                   {allTags.length > 0 ? (
                     allTags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-1.5 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-600 bg-white"
                        >
                           {tag}
                        </span>
                     ))
                   ) : (
                     <p className="text-sm text-gray-500">No tags available.</p>
                   )}
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
