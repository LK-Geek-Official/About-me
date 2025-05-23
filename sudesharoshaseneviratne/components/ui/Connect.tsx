"use client";

import { GradientButton } from "./gradient-button";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Connect with me</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">sudeshseneviratne@gmail.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">Gampaha Town, Gampaha, Sri Lanka</p>
              </div>
            </div>
            
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..." 
                ></textarea>
              </div>
              <GradientButton className="w-full">Send Message</GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 