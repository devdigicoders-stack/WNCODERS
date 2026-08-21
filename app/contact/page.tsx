import type { Metadata } from 'next';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Contact Us | WORKNESTCONNECT',
  description: 'Get in touch with WORKNESTCONNECT. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#f8f9fa] font-sans min-h-screen pb-20">
      
      {/* Dark Header Section */}
      <section className="bg-[#040f1a] text-white relative overflow-hidden pt-24 pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00C265]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00C265]"></span>
            <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Start a <span className="text-[#00C265]">Conversation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, or just want to say hi? We're always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1200px] mx-auto px-6 relative z-20 -mt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Information (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#00C265]/10 text-[#00C265] rounded-xl flex items-center justify-center mb-6">
                <LuMapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#040f1a] mb-2">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Innovation Drive,<br />
                Tech Park, Suite 400<br />
                Silicon Valley, CA 94043
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#00C265]/10 text-[#00C265] rounded-xl flex items-center justify-center mb-6">
                <LuMail size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#040f1a] mb-2">Email Us</h3>
              <a href="mailto:hello@worknestconnect.com" className="block text-gray-600 hover:text-[#00C265] mb-1 transition-colors">hello@worknestconnect.com</a>
              <a href="mailto:support@worknestconnect.com" className="block text-gray-600 hover:text-[#00C265] transition-colors">support@worknestconnect.com</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#00C265]/10 text-[#00C265] rounded-xl flex items-center justify-center mb-6">
                <LuPhone size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#040f1a] mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="block text-gray-600 hover:text-[#00C265] mb-1 transition-colors">+1 (555) 123-4567</a>
              <a href="tel:+15559876543" className="block text-gray-600 hover:text-[#00C265] transition-colors">+1 (555) 987-6543</a>
            </div>

          </div>

          {/* Contact Form (Right) */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-bold text-[#040f1a] mb-8">Send us a Message</h2>
            
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  placeholder="Tell us about your project or inquiry..." 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all min-h-[200px] resize-y text-gray-800 placeholder-gray-400"
                ></textarea>
              </div>

              <button 
                type="button"
                className="mt-4 w-full bg-[#00C265] hover:bg-[#00a355] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(0,194,101,0.25)] hover:shadow-[0_15px_30px_rgba(0,194,101,0.35)]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
