"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteRight, FaPen, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Testimonials() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const dummyTestimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      text: "WORKNESTCONNECT transformed our ideas into a beautiful, scalable web application. Their team is incredibly talented and professional.",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthSync",
      text: "The mobile app they built for us exceeded all expectations. Smooth UI, fast performance, and delivered right on schedule.",
      initial: "M"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, FinCorp",
      text: "Their cloud infrastructure solutions helped us reduce costs by 40% while improving security. Highly recommended!",
      initial: "E"
    },
    {
      name: "David Smith",
      role: "CTO, RetailPlus",
      text: "The UI/UX revamp they did for our e-commerce platform doubled our conversion rate in just one month. Absolutely fantastic work.",
      initial: "D"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager, EduTech",
      text: "Communication was seamless, and the technical expertise they brought to the table was top-notch. We will definitely work with them again.",
      initial: "P"
    },
    {
      name: "James Wilson",
      role: "Operations Head, LogisticsHub",
      text: "They built a custom internal dashboard that completely streamlined our workflow. Best IT agency we have ever partnered with.",
      initial: "J"
    }
  ];

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/reviews`);
      if (response.ok) {
        const data = await response.json();
        // Map backend data to our frontend format
        if (data && data.length > 0) {
          const formattedReviews = data.map((r: any) => ({
            name: r.name,
            role: "Verified Client",
            text: r.comment,
            initial: r.name.charAt(0).toUpperCase(),
            rating: r.rating || 5
          }));
          setReviews(formattedReviews);
        }
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (ratingValue: number) => {
    setFormData(prev => ({ ...prev, rating: ratingValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Thank you! Your review has been submitted for approval.');
        setIsModalOpen(false);
        setFormData({ name: '', email: '', rating: 5, comment: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use dynamic reviews if available, else fallback to dummy
  const displayReviews = reviews.length > 0 ? reviews : dummyTestimonials;

  return (
    <section className="w-full bg-[#f8f9fa] pt-24 pb-6 border-t border-gray-200 overflow-hidden relative">

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16 relative flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="text-left">
          <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-[#040f1a] text-4xl md:text-[40px] font-bold">
            What Our Clients Say
          </h2>
        </div>
        
        {/* Write a Review Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C265] to-[#009b50] text-white px-7 py-3.5 rounded font-bold shadow-lg shadow-[#00C265]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00C265]/40 transition-all duration-300 shrink-0"
        >
          <FaPen size={14} />
          Write a Review
        </button>
      </div>


      <div className="w-full relative">
        {/* Left and Right Gradient Masks */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 py-4 px-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {displayReviews.map((testimonial, index) => (
            <div key={index} className="w-[350px] md:w-[400px] shrink-0 snap-center bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300">
              <FaQuoteRight className="absolute top-8 right-10 text-gray-100 text-5xl group-hover:text-[#00C265]/10 transition-colors duration-300" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < (testimonial.rating || 5) ? "text-[#00C265]" : "text-gray-300"} size={18} />
                ))}
              </div>
              <p className="text-gray-600 text-[16px] italic leading-relaxed mb-10 relative z-10 min-h-[90px]">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C265] to-[#009b50] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#00C265]/30">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-[#040f1a] font-bold text-[17px]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <FaTimes size={18} />
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#040f1a] mb-2">Rate Your Experience</h3>
              <p className="text-gray-500 text-sm">We would love to hear your thoughts about our services.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Rating Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <FaStar 
                      size={32} 
                      className={star <= formData.rating ? "text-[#00C265]" : "text-gray-200"} 
                    />
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Optional)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Review *</label>
                <textarea 
                  name="comment"
                  required
                  rows={4}
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience working with us..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#00C265] hover:bg-[#00a656] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#00C265]/30 transition-all disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Submit Review'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
