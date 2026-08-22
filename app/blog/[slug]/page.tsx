"use client";
import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCalendar, LuClock, LuEye, LuSearch, LuChevronRight, LuArrowLeft, LuLoader } from 'react-icons/lu';
import { toast } from 'react-toastify';

export default function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [post, setPost] = useState<any>(null);
  const [popularPosts, setPopularPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<{name: string, count: number, icon: any}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        
        // 1. Fetch specific blog
        const response = await fetch(`${apiUrl}/blogs/${slug}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setPost(data);

        // 2. Fetch all blogs for sidebar
        const allRes = await fetch(`${apiUrl}/blogs`);
        const allData = await allRes.json();
        
        // Popular posts
        const popular = [...allData].sort((a, b) => b.views - a.views).slice(0, 5);
        setPopularPosts(popular);

        // Categories
        const catCounts = allData.reduce((acc: any, blog: any) => {
          acc[blog.category] = (acc[blog.category] || 0) + 1;
          return acc;
        }, {});
        
        const defaultIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>;
        
        const catArray = Object.entries(catCounts).map(([name, count]) => ({
          name, 
          count: count as number,
          icon: defaultIcon
        }));
        
        setCategories([
          { name: "All Categories", count: allData.length, icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg> },
          ...catArray
        ]);

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const shareToPlatform = (platform: string) => {
    if (typeof window === 'undefined' || !post) return;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast.success('Message sent successfully! We will contact you soon.');
        setFormData({ fullName: '', phoneNumber: '', message: '' });
      } else {
        toast.error(result.error || result.message || 'Failed to send message');
      }
    } catch (err: any) {
      toast.error('Network error. Please try again later.');
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f9fafb] pt-28 pb-20 flex items-center justify-center">
        <LuLoader className="animate-spin text-[#00C265]" size={40} />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-[#f9fafb] pt-28 pb-20 flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800">{error || 'Blog not found'}</h2>
        <Link href="/blog" className="text-[#00C265] font-bold hover:underline flex items-center gap-2">
          <LuArrowLeft size={16} /> Back to Blog
        </Link>
      </main>
    );
  }

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
            <span className="text-gray-400 line-clamp-1">{post.title}</span>
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
                   <span className="bg-[#00C265] text-white text-[12px] px-4 py-1.5 rounded-full font-bold tracking-wide mb-6 inline-block">{post.category}</span>
                   <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#040f1a] leading-tight mb-6">
                      {post.title}
                   </h1>
                   <p className="text-gray-500 text-lg leading-relaxed md:pr-10">
                      {post.excerpt}
                   </p>
                </div>
                
                {/* Share Icons */}
                <div className="flex flex-col items-end shrink-0">
                   <span className="text-sm text-gray-500 font-medium mb-3">Share:</span>
                   <div className="flex items-center gap-3">
                      <button onClick={() => shareToPlatform('facebook')} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                      </button>
                      <button onClick={() => shareToPlatform('linkedin')} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                      </button>
                      <button onClick={() => shareToPlatform('twitter')} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center text-gray-700 transition-colors">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                      </button>
                      <button onClick={() => shareToPlatform('copy')} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00C265] hover:text-white flex items-center justify-center text-gray-700 transition-colors" title="Copy Link">
                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                   </div>
                </div>
             </div>

             {/* Author Info & Meta */}
             <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-10 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 border border-gray-100 flex items-center justify-center text-gray-500 font-bold text-xl">
                      {post.author.charAt(0).toUpperCase()}
                   </div>
                   <div>
                      <p className="text-[#040f1a] font-bold text-[15px] mb-0.5">{post.author}</p>
                      <p className="text-gray-500 text-[12px] font-medium">Author</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm font-medium">
                   <div className="flex items-center gap-2"><LuCalendar size={16} /> {formatDate(post.createdAt)}</div>
                   <div className="flex items-center gap-2"><LuClock size={16} /> {post.readTime || '5 min read'}</div>
                   <div className="flex items-center gap-2"><LuEye size={16} /> {post.views} Views</div>
                </div>
             </div>

             {/* Featured Image */}
             <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-12 bg-[#040f1a] shadow-sm">
                <Image 
                  src={post.image && post.image.startsWith('http') ? post.image : (post.image ? `http://localhost:5000${post.image}` : '/image copy 2.png')} 
                  fill 
                  className="object-cover" 
                  alt={post.title} 
                  unoptimized 
                />
             </div>

             {/* Article Content - Rendered Dynamically as HTML */}
             <div 
               className="prose prose-lg max-w-none text-gray-600 mb-16"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />

          </div>
          
          {/* RIGHT COLUMN (Sidebar) */}
          <div className="flex flex-col gap-12 lg:sticky lg:top-32 lg:self-start">

             {/* Categories */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Categories</h3>
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col gap-4">
                   {categories.map((cat, i) => (
                      <Link href={cat.name === 'All Categories' ? '/blog' : `/blog?category=${encodeURIComponent(cat.name)}`} key={i} className="flex items-center justify-between group cursor-pointer">
                         <div className="flex items-center gap-3 text-gray-700 font-medium text-[14px] group-hover:text-[#00C265] transition-colors">
                            <span className="text-[#00C265]">{cat.icon}</span>
                            {cat.name}
                         </div>
                         <span className="bg-[#e6f9f0] text-[#00a355] text-[11px] font-bold px-2 py-0.5 rounded-full">
                            {cat.count}
                         </span>
                      </Link>
                   ))}
                </div>
             </div>

             {/* Popular Posts */}
             <div>
                <h3 className="text-[#040f1a] font-bold text-xl mb-5">Popular Posts</h3>
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col gap-6">
                   {popularPosts.length > 0 ? popularPosts.map((p, i) => (
                      <Link href={`/blog/${p.slug}`} key={i} className="flex items-center gap-4 group cursor-pointer">
                         <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#040f1a]">
                           <Image 
                            src={p.image && p.image.startsWith('http') ? p.image : (p.image ? `http://localhost:5000${p.image}` : '/blog/react_code.png')} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-500" 
                            alt={p.title} 
                            unoptimized 
                           />
                         </div>
                         <div className="flex flex-col justify-center">
                            <h4 className="text-[#040f1a] font-bold text-[14px] leading-snug mb-2 group-hover:text-[#00C265] transition-colors line-clamp-2">{p.title}</h4>
                            <p className="text-gray-500 text-[11px] font-medium">{formatDate(p.createdAt)} &bull; {p.readTime || '5 min read'}</p>
                         </div>
                      </Link>
                   )) : (
                     <p className="text-sm text-gray-500">No popular posts available.</p>
                   )}
                </div>
             </div>

             {/* Tags */}
             {post.tags && post.tags.length > 0 && (
               <div>
                  <h3 className="text-[#040f1a] font-bold text-xl mb-5">Tags</h3>
                  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-wrap gap-2">
                     {post.tags.map((tag: string, i: number) => (
                        <span key={i} className={`px-4 py-1.5 border rounded-xl text-[13px] font-medium transition-colors ${i === 0 ? 'border-[#00C265]/30 text-[#00C265] bg-[#00C265]/5' : 'border-gray-200 text-gray-600 bg-white'}`}>
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
             )}

             {/* Enquiry Form Sidebar */}
             <div className="bg-[#040f1a] rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-[#00C265] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,194,101,0.4)] relative z-10">
                   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" className="text-white" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">Quick Enquiry</h3>
                <p className="text-gray-400 text-sm font-medium mb-8 relative z-10 px-2">Have a question? Send us a message and we'll get back to you.</p>
                <form className="w-full flex flex-col gap-3 relative z-10 text-left" onSubmit={handleEnquirySubmit}>
                   <input type="text" placeholder="Your Name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white" required />
                   <input type="tel" placeholder="Mobile Number" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white" required />
                   <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-white resize-none" required></textarea>
                   <button type="submit" disabled={formLoading} className="bg-[#00C265] hover:bg-[#00a355] disabled:opacity-70 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#00C265]/20 mt-2">
                     {formLoading ? 'Sending...' : 'Send Enquiry'}
                   </button>
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
