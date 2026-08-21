import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCalendar, LuTag } from 'react-icons/lu';

export default function BlogSection() {
  const blogs = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the emerging technologies and frameworks that are shaping the future of web development and digital experiences.",
      category: "Technology",
      date: "August 12, 2024",
      image: "/image copy 5.png",
      link: "/blog/future-of-web-development"
    },
    {
      title: "How Cloud Migration Can Transform Your Business",
      excerpt: "Learn about the key benefits, strategies, and best practices for successfully migrating your enterprise infrastructure to the cloud.",
      category: "Cloud Solutions",
      date: "August 05, 2024",
      image: "/image copy 7.png",
      link: "/blog/cloud-migration-benefits"
    },
    {
      title: "Mastering UI/UX Design: Tips for Higher Conversion",
      excerpt: "A comprehensive guide to creating user-centric designs that not only look great but also drive measurable business growth.",
      category: "Design",
      date: "July 28, 2024",
      image: "/image copy 4.png",
      link: "/blog/mastering-ui-ux-design"
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col group">
              
              {/* Image Container */}
              <div className="w-full h-[240px] bg-gray-50 relative overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                  <LuTag size={14} className="text-[#00C265]" />
                  <span className="text-xs font-bold text-[#040f1a]">{blog.category}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-4">
                  <LuCalendar size={14} />
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-[20px] font-bold text-[#040f1a] leading-snug mb-3 group-hover:text-[#00C265] transition-colors line-clamp-2">
                  <Link href={blog.link}>{blog.title}</Link>
                </h3>
                
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>
                
                <Link href={blog.link} className="inline-flex items-center gap-2 text-[#00C265] font-bold text-[14px] hover:text-[#00a355] mt-auto w-fit group/link">
                  Read More 
                  <LuArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
