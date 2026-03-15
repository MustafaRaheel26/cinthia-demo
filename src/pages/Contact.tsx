import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 tracking-tight">We'd love to hear <br /> from you</h1>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a question about our menu, catering, or just want to say hello? Our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-10">Contact Information</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Phone Number</p>
                    <p className="text-lg font-bold text-gray-900">{RESTAURANT_INFO.phone}</p>
                    <p className="text-sm text-gray-500">Mon-Sun, 9am-11pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-lg font-bold text-gray-900">{RESTAURANT_INFO.email}</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Our Location</p>
                    <p className="text-lg font-bold text-gray-900">{RESTAURANT_INFO.address}</p>
                    <p className="text-sm text-gray-500">Rome, Italy</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-50">
                <h4 className="font-bold text-gray-900 mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 bg-gray-50 text-gray-400 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-10 rounded-[40px] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Working Hours</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-bold">09:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-bold">10:00 - 00:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-bold">10:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Send us a Message</h3>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 p-12 rounded-[32px] text-center"
                >
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h4>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-orange-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-900 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-900 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-900 ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-900 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white font-bold py-5 rounded-2xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-200 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <ArrowRight className="w-5 h-5 ml-2" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
