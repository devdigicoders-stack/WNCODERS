"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCalendar, LuTag, LuLoader } from 'react-icons/lu';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/blogs`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        // Only take the latest 3
        setBlogs(data.slice(0, 3));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-6 sm:px-10 lg:px-20 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-3 block">
              OUR BLOG
            </span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold leading-tight">
              Latest Insights & <span className="text-[#00C265]">Articles</span>
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-2.5 border-[1.5px] border-[#040f1a] text-[#040f1a] hover:bg-[#040f1a] hover:text-white rounded font-bold transition-colors">
            View All Posts <LuArrowRight size={18} />
          </Link>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-[200px]">
            <LuLoader className="animate-spin text-[#00C265]" size={40} />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-[200px] text-red-500 font-medium">
            Unable to load blogs: {error}
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex justify-center items-center h-[200px] text-gray-500">
            No latest articles found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((item, index) => (
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
    </section>
  );
}
