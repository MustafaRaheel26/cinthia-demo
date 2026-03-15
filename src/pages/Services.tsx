import React from 'react';
import { Users, Truck, Calendar, Clock, ShieldCheck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CATERING_SERVICES, ONLINE_SERVICES } from '../data';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Our Premium Services</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-6 tracking-tight">Beyond Just Dining</h1>
            <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-xl leading-relaxed">
              From grand celebrations to intimate home dinners, we provide professional services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Users className="w-4 h-4" /> Professional Catering
              </div>
              <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Exquisite Catering for <br />
                <span className="text-orange-600">Every Occasion</span>
              </h2>
              <p className="text-gray-500 mt-8 text-lg leading-relaxed">
                Our catering service is designed to take the stress out of your events. We handle everything from menu planning to professional service on the day.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {CATERING_SERVICES.map(service => (
                  <div key={service.id} className="group">
                    <div className="w-14 h-14 bg-gray-50 text-gray-400 group-hover:bg-orange-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-orange-600 text-white font-bold px-10 py-5 rounded-2xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-200 flex items-center">
                Inquire Now <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80" 
                  alt="Catering Service" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Ordering Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&w=600&q=80" alt="Delivery 1" className="rounded-3xl shadow-xl h-64 w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" alt="Delivery 2" className="rounded-3xl shadow-xl h-80 w-full object-cover" />
                </div>
                <div className="space-y-6 pt-12">
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" alt="Delivery 3" className="rounded-3xl shadow-xl h-80 w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=600&q=80" alt="Delivery 4" className="rounded-3xl shadow-xl h-64 w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Truck className="w-4 h-4" /> Fast Delivery
              </div>
              <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Fresh Italian Food <br />
                <span className="text-orange-600">at Your Doorstep</span>
              </h2>
              <p className="text-gray-500 mt-8 text-lg leading-relaxed">
                Experience the convenience of our premium delivery service. We ensure your food arrives hot, fresh, and exactly as you ordered it.
              </p>

              <div className="space-y-8 mt-12">
                {ONLINE_SERVICES.map(service => (
                  <div key={service.id} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-gray-900 text-white font-bold px-10 py-5 rounded-2xl hover:bg-black transition-all shadow-2xl shadow-gray-200 flex items-center">
                Order Online Now <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-600 rounded-[60px] p-16 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Ready to experience the best?</h2>
              <p className="text-orange-100 text-xl max-w-2xl mx-auto mb-12">
                Join thousands of satisfied customers who trust SmartCafe for their dining and catering needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-orange-600 font-bold px-12 py-5 rounded-2xl hover:bg-gray-100 transition-all shadow-2xl shadow-orange-900/20">
                  Book a Table
                </button>
                <button className="bg-orange-700 text-white font-bold px-12 py-5 rounded-2xl hover:bg-orange-800 transition-all border border-orange-500">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
