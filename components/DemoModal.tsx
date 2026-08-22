import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import { toast } from 'react-toastify';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${apiUrl}/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Consultation requested successfully! We'll contact you soon.");
        setFormData({ fullName: '', phoneNumber: '', message: '' });
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      toast.error('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="w-full max-w-[480px] bg-white rounded-[20px] shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-800 bg-[#f0f2f5] hover:bg-[#e4e6eb] rounded-full transition-colors z-10"
        >
          <LuX size={18} />
        </button>

        {/* Header */}
        <div className="pt-8 px-8 pb-4">
          <h3 className="text-[24px] font-bold text-[#0f172a] mb-2">
            Request Consultation
          </h3>
          <p className="text-gray-500 text-[15px]">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Name */}
            <div>
              <label className="block text-[14px] font-bold text-[#1e293b] mb-1.5">
                Full Name
              </label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-[14px] font-bold text-[#1e293b] mb-1.5">
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors placeholder:text-gray-400"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[14px] font-bold text-[#1e293b] mb-1.5">
                Message
              </label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#00C265] focus:ring-1 focus:ring-[#00C265] transition-colors resize-none placeholder:text-gray-400"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#00C265] hover:bg-[#00a355] text-white rounded-lg font-bold text-[16px] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
