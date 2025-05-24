"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { GradientButton } from "./gradient-button";
import { FancyHeading } from "./FancyHeading";

// EmailJS configuration
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not properly configured. Please contact the administrator.'
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sudeshseneviratne@gmail.com'
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact directly via email.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <FancyHeading title="Connect with me" />
        <div className="section-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">sudeshseneviratne@gmail.com</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">Gampaha Town, Gampaha, Sri Lanka</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg shadow-lg">
              {status.type && (
                <div className={`mb-6 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                  {status.message}
                </div>
              )}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full bg-zinc-800 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <GradientButton 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 