import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight, LuHeadphones, LuShieldCheck, LuMapPin, LuPhone, LuMail, LuClock, LuSend, LuBuilding } from 'react-icons/lu';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#040f1a] py-28 relative overflow-hidden">
        {/* Background Subtle Gradient/Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C265] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-4">
                <Link href="/" className="hover:text-[#00C265] transition-colors flex items-center gap-1">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" className="text-[#00C265]" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Home
                </Link>
                <LuChevronRight size={14} className="text-gray-500" />
                <span className="text-gray-300">Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact <span className="text-[#00C265]">Us</span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center shrink-0 text-[#00C265]">
                    <LuHeadphones size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[14px] mb-1">Quick Response</h4>
                    <p className="text-gray-400 text-[13px]">We aim to respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center shrink-0 text-[#00C265]">
                    <LuShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[14px] mb-1">Expert Support</h4>
                    <p className="text-gray-400 text-[13px]">Our team is ready to assist you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[250px] lg:h-[300px] w-full flex justify-center lg:justify-end items-center">
               <div className="relative w-full max-w-[350px] h-full">
                 <Image 
                   src="/image copy 3.png" 
                   fill 
                   className="object-contain drop-shadow-[0_20px_50px_rgba(0,194,101,0.2)] animate-[bounce_4s_infinite]" 
                   alt="Contact Us Envelope" 
                   unoptimized 
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="w-full -mt-10 relative z-20">
         <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               
               {/* Location Card */}
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0 text-[#00C265]">
                     <LuMapPin size={22} />
                  </div>
                  <div>
                     <h4 className="text-[#040f1a] font-bold text-[15px] mb-1.5">Our Location</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        123 Software Street,<br/>Tech City, TC 12345,<br/>United States
                     </p>
                  </div>
               </div>

               {/* Call Us Card */}
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0 text-[#00C265]">
                     <LuPhone size={22} />
                  </div>
                  <div>
                     <h4 className="text-[#040f1a] font-bold text-[15px] mb-1.5">Call Us</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        +1 (555) 123-4567<br/>+1 (555) 987-6543
                     </p>
                  </div>
               </div>

               {/* Email Us Card */}
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0 text-[#00C265]">
                     <LuMail size={22} />
                  </div>
                  <div>
                     <h4 className="text-[#040f1a] font-bold text-[15px] mb-1.5">Email Us</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        info@softwarecompany.com<br/>support@softwarecompany.com
                     </p>
                  </div>
               </div>

               {/* Working Hours Card */}
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0 text-[#00C265]">
                     <LuClock size={22} />
                  </div>
                  <div>
                     <h4 className="text-[#040f1a] font-bold text-[15px] mb-1.5">Working Hours</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: Closed
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 3. MAIN FORM & MAP SECTION */}
      <section className="w-full py-20">
         <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* Left: Contact Form */}
               <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#040f1a] mb-3">Send Us A Message</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill out the form and our team will get back to you as soon as possible.</p>
                  
                  <form className="flex flex-col gap-5">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-gray-50 border border-gray-200 focus:border-[#00C265] focus:bg-white transition-colors" required />
                        <input type="email" placeholder="Your Email" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-gray-50 border border-gray-200 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     </div>
                     <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-gray-50 border border-gray-200 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     <input type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-gray-50 border border-gray-200 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     <textarea placeholder="Your Message" rows={6} className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-700 outline-none placeholder-gray-400 bg-gray-50 border border-gray-200 focus:border-[#00C265] focus:bg-white transition-colors resize-none" required></textarea>
                     
                     <button type="submit" className="bg-[#00C265] hover:bg-[#00a355] text-white py-4 px-8 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#00C265]/20 flex items-center justify-center gap-2 w-max mt-2">
                        <LuSend size={16} /> Send Message
                     </button>
                  </form>
               </div>

               {/* Right: Map & Office Info */}
               <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-[#040f1a] mb-6">Our Location</h2>
                  
                  {/* Map Box */}
                  <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative mb-6">
                     {/* Dummy Map Image placeholder since we don't have an API key */}
                     <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                        {/* We use a static dummy iframe to simulate a map */}
                        <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744488828!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                           width="100%" 
                           height="100%" 
                           style={{border:0}} 
                           allowFullScreen={false} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           className="opacity-70 grayscale"
                        ></iframe>
                        {/* Custom Marker overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 w-[250px]">
                           <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00C265] shrink-0">
                              <LuMapPin size={20} />
                           </div>
                           <div className="text-xs text-gray-600 font-medium">
                              123 Software Street, Tech City, TC 12345, United States
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Visit Office Box */}
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6 flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#00C265]">
                        <LuBuilding size={22} />
                     </div>
                     <div>
                        <h4 className="text-[#040f1a] font-bold text-[15px] mb-1.5">Visit Our Office</h4>
                        <p className="text-gray-600 text-sm leading-relaxed m-0">
                           We welcome you to visit our office. Please call us before coming to ensure availability.
                        </p>
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="w-full pb-20">
         <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="bg-[#040f1a] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00C265] rounded-full opacity-[0.05] blur-[80px] pointer-events-none"></div>
               <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#00C265] rounded-full opacity-[0.05] blur-[60px] pointer-events-none"></div>

               <div className="relative z-10 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
                  <p className="text-gray-400 text-lg">Have a project in mind or need expert advice? Let's connect!</p>
               </div>

               <div className="relative z-10 shrink-0">
                  <button className="bg-[#00C265] hover:bg-[#00a355] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-[#00C265]/20 flex items-center justify-center gap-2 text-[15px]">
                     Get in Touch Today <LuArrowRight size={18} />
                  </button>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}

const LuArrowRight = ({ size }: { size: number }) => (
   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);
