"use client";

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone: string) => {
    // Allows optional +, numbers, spaces, dashes, parentheses, minimum 7 digits
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    // Count digits
    const digits = phone.replace(/\D/g, "");
    return phoneRegex.test(phone) && digits.length >= 7 && digits.length <= 15;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      toast.error('Please enter a valid phone number (min 7 digits).');
      return;
    }

    // Success
    toast.success('Your message has been sent successfully! We will get back to you soon.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: ''
    });
  };

  return (
    <div className="w-full lg:w-[55%] bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] h-fit sticky top-24">
      <h2 className="text-3xl font-bold text-[#040f1a] mb-2">Send us a Message</h2>
      <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
      
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input 
              type="text" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Inquiry Type</label>
          <select 
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all text-gray-800 appearance-none"
          >
            <option value="general">General Inquiry</option>
            <option value="sales">Sales & Pricing</option>
            <option value="support">Technical Support</option>
            <option value="career">Career Opportunities</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Your Message <span className="text-red-500">*</span></label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..." 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#00C265] focus:ring-2 focus:ring-[#00C265]/20 transition-all min-h-[160px] resize-y text-gray-800 placeholder-gray-400"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="mt-2 w-full bg-[#00C265] hover:bg-[#00a355] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(0,194,101,0.25)] hover:shadow-[0_15px_30px_rgba(0,194,101,0.35)]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
