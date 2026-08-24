"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight, LuHeadphones, LuShieldCheck, LuMapPin, LuPhone, LuMail, LuClock, LuSend, LuBuilding, LuLifeBuoy, LuBriefcase, LuGlobe, LuPlus, LuMinus, LuPhoneCall, LuFileText, LuRocket } from 'react-icons/lu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone || 'Not Provided',
        subject: formData.subject,
        message: formData.message
      };

      const response = await fetch(`${apiUrl}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f9fafb]">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#040f1a] pt-10 pb-16 md:py-28 relative overflow-hidden">
        {/* Background Subtle Gradient/Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C265] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 md:mt-10">
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

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-[#00C265]">Us</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center shrink-0 text-[#00C265]">
                    <LuHeadphones size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-1">Quick Response</h4>
                    <p className="text-gray-400 text-[15px]">We aim to respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center shrink-0 text-[#00C265]">
                    <LuShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-1">Expert Support</h4>
                    <p className="text-gray-400 text-[15px]">Our team is ready to assist you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] lg:h-[400px] w-full flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
               <div className="relative w-full max-w-[450px] h-full">
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
         <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
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
                     <p className="text-gray-500 text-sm leading-relaxed flex flex-col gap-1">
                        <a href="tel:+919140967607" className="hover:text-[#00C265] transition-colors">+91 9140967607</a>
                        <a href="tel:+916394296293" className="hover:text-[#00C265] transition-colors">+91 6394296293</a>
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
                     <p className="text-gray-500 text-sm leading-relaxed flex flex-col gap-1">
                        <a href="mailto:info@thedigicoders.com" className="hover:text-[#00C265] transition-colors">info@thedigicoders.com</a>
                        <a href="mailto:digicoderstech@gmail.com" className="hover:text-[#00C265] transition-colors">digicoderstech@gmail.com</a>
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
         <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* Left: Contact Form */}
               <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#040f1a] mb-3">Send Us A Message</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill out the form and our team will get back to you as soon as possible.</p>
                  
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-900 outline-none placeholder-gray-500 bg-gray-50 border border-gray-300 focus:border-[#00C265] focus:bg-white transition-colors" required />
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-900 outline-none placeholder-gray-500 bg-gray-50 border border-gray-300 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     </div>
                     <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-900 outline-none placeholder-gray-500 bg-gray-50 border border-gray-300 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-900 outline-none placeholder-gray-500 bg-gray-50 border border-gray-300 focus:border-[#00C265] focus:bg-white transition-colors" required />
                     <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={6} className="w-full px-5 py-4 rounded-xl text-sm font-medium text-gray-900 outline-none placeholder-gray-500 bg-gray-50 border border-gray-300 focus:border-[#00C265] focus:bg-white transition-colors resize-none" required></textarea>
                     
                     <button type="submit" disabled={loading} className="bg-[#00C265] hover:bg-[#00a355] text-white py-4 px-8 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#00C265]/20 flex items-center justify-center gap-2 w-max mt-2 disabled:opacity-70">
                        <LuSend size={16} /> {loading ? 'Sending...' : 'Send Message'}
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
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0679758151!2d51.448066599999995!3d25.2854473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f787d4b14!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1692120000000!5m2!1sen!2s" 
                           width="100%" 
                           height="100%" 
                           style={{border:0}} 
                           allowFullScreen={false} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           className="opacity-100 transition-opacity"
                        ></iframe>
                        {/* Custom Marker overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 w-[280px]">
                           <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00C265] shrink-0">
                              <LuMapPin size={20} />
                           </div>
                           <div className="text-[11px] text-gray-600 font-medium leading-relaxed">
                              4th Floor, Office 405, Room 09, Central Complex, Near Doha Municipality, B Ring Rd, Doha, Qatar
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

      {/* 4. CONTACT DEPARTMENTS SECTION */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-[#040f1a] mb-4">Contact the Right Team</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">Get in touch with the specific department to get your queries resolved faster.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Sales */}
               <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center mx-auto mb-4">
                     <LuBriefcase size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#040f1a] mb-2">Sales & Partnerships</h3>
                  <p className="text-gray-500 text-sm mb-4">Interested in our services? Let's talk about how we can help your business grow.</p>
                  <a href="mailto:info@thedigicoders.com" className="text-[#00C265] font-bold hover:underline">info@thedigicoders.com</a>
               </div>

               {/* Support */}
               <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center mx-auto mb-4">
                     <LuLifeBuoy size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#040f1a] mb-2">Technical Support</h3>
                  <p className="text-gray-500 text-sm mb-4">Already a customer? Our dedicated support team is here to help you 24/7.</p>
                  <a href="mailto:digicoderstech@gmail.com" className="text-[#00C265] font-bold hover:underline">digicoderstech@gmail.com</a>
               </div>

               {/* Press */}
               <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#f0fdf4] text-[#00C265] flex items-center justify-center mx-auto mb-4">
                     <LuGlobe size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#040f1a] mb-2">Press & Media</h3>
                  <p className="text-gray-500 text-sm mb-4">For media inquiries, interviews, or press resources, please contact our PR team.</p>
                  <a href="mailto:info@thedigicoders.com" className="text-[#00C265] font-bold hover:underline">info@thedigicoders.com</a>
               </div>
            </div>
         </div>
      </section>

      {/* 5. FAQ SECTION & HOW WE WORK */}
      <section className="w-full py-20 bg-[#f9fafb]">
         <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               
               {/* Left: FAQs */}
               <div className="flex flex-col gap-4">
                  <div className="mb-6">
                     <h2 className="text-3xl font-bold text-[#040f1a] mb-4">Frequently Asked Questions</h2>
                     <p className="text-gray-500">Quick answers to common questions about working with us.</p>
                  </div>
                  {[
                     {
                        q: "How long does it take to get a response?",
                        a: "We strive to respond to all inquiries within 24 hours during business days. For urgent technical support, our existing clients have access to a dedicated 24/7 hotline."
                     },
                     {
                        q: "Do you offer custom software development?",
                        a: "Yes, we specialize in building custom, scalable software solutions tailored specifically to your business needs, from enterprise web apps to mobile applications."
                     },
                     {
                        q: "Can I schedule a meeting at your office?",
                        a: "Absolutely! We welcome clients to our Doha office. Please fill out the contact form or call us in advance to schedule a meeting with the appropriate team."
                     },
                     {
                        q: "What is your typical project engagement model?",
                        a: "We offer flexible engagement models including Dedicated Teams, Time & Material, and Fixed Price contracts, depending on the scope and requirements of your project."
                     }
                  ].map((faq, idx) => (
                     <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                        <button 
                           onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                           className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                        >
                           <span className="font-bold text-[#040f1a] pr-4">{faq.q}</span>
                           <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#00C265]">
                              {activeFaq === idx ? <LuMinus size={16} /> : <LuPlus size={16} />}
                           </div>
                        </button>
                        {activeFaq === idx && (
                           <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                              {faq.a}
                           </div>
                        )}
                     </div>
                  ))}
               </div>

               {/* Right: How We Work Timeline */}
               <div className="bg-white rounded-[2rem] p-10 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden h-full">
                  <h3 className="text-2xl font-bold text-[#040f1a] mb-8">What Happens Next?</h3>
                  
                  <div className="relative border-l-2 border-gray-100 ml-5 flex flex-col gap-10 pb-4">
                     
                     {/* Step 1 */}
                     <div className="relative pl-10">
                        <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265] shadow-sm">
                           <LuPhoneCall size={18} />
                        </div>
                        <h4 className="text-lg font-bold text-[#040f1a] mb-2 pt-1">1. Discovery Call</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           Our team will reach out to understand your core requirements, business goals, and project scope.
                        </p>
                     </div>

                     {/* Step 2 */}
                     <div className="relative pl-10">
                        <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265] shadow-sm">
                           <LuFileText size={18} />
                        </div>
                        <h4 className="text-lg font-bold text-[#040f1a] mb-2 pt-1">2. Action Plan & Proposal</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           We'll craft a detailed proposal including technical architecture, timeline, and cost breakdown.
                        </p>
                     </div>

                     {/* Step 3 */}
                     <div className="relative pl-10">
                        <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#00C265] border-2 border-[#00C265] flex items-center justify-center text-white shadow-lg shadow-[#00C265]/30">
                           <LuRocket size={18} />
                        </div>
                        <h4 className="text-lg font-bold text-[#040f1a] mb-2 pt-1">3. Project Kickoff</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           Once approved, our dedicated team begins development and keeps you updated at every sprint.
                        </p>
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover theme="light" />
    </main>
  );
}

const LuArrowRight = ({ size }: { size: number }) => (
   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);
