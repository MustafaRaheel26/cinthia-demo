import React, { useState } from 'react';
import { Star, MapPin, Phone, Globe, Heart, Share2, MessageSquare, ChevronRight, Clock, ShieldCheck, ShoppingBag, Calendar, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_BUSINESSES } from '../data';
import { SafeImage } from '../components/SafeImage';

interface BusinessProfileProps {
  id: string;
  onNavigate: (page: string, params?: any) => void;
}

export const BusinessProfile: React.FC<BusinessProfileProps> = ({ id, onNavigate }) => {
  const business = MOCK_BUSINESSES.find(b => b.id === id) || MOCK_BUSINESSES[0];
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleAction = () => {
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Success Notification */}
      <AnimatePresence>
        {isBooked && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold"
          >
            <CheckCircle className="w-6 h-6" />
            {business.category === 'Restaurants' || business.category === 'Cafes' ? 'Order placed successfully!' : 'Booking request sent!'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header / Cover */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <SafeImage 
          src={business.image} 
          alt={business.name} 
          className="w-full h-full object-cover"
          fallbackSources={[
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80'
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {business.category}
                </span>
                <div className="flex items-center bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
                  <span className="text-xs font-bold">{business.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{business.name}</h1>
              <div className="flex items-center mt-3 text-gray-200">
                <MapPin className="w-4 h-4 mr-1.5" />
                <span className="text-sm">{business.location}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-xl backdrop-blur-md transition-all ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-white' : ''}`} />
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all">
                <Share2 className="w-6 h-6" />
              </button>
              <button 
                onClick={handleAction}
                className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2"
              >
                {business.category === 'Restaurants' || business.category === 'Cafes' ? <ShoppingBag className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                {business.category === 'Restaurants' || business.category === 'Cafes' ? 'Order Now' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Business</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {business.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Price</span>
                  <span className="font-bold text-gray-900">{business.priceRange || '$$'}</span>
                </div>
                <div className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Reviews</span>
                  <span className="font-bold text-gray-900">{business.reviewCount}</span>
                </div>
                <div className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Status</span>
                  <span className="font-bold text-emerald-600">Open Now</span>
                </div>
                <div className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Verified</span>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </section>

            {/* Menu or Services */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {business.category === 'Restaurants' || business.category === 'Cafes' ? 'Menu Preview' : 'Our Services'}
              </h2>
              <div className="space-y-4">
                {(business.menu || business.services || []).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-2xl transition-colors border-b border-gray-50 last:border-0">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {'description' in item ? item.description : `Duration: ${item.duration}`}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-emerald-600">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-emerald-200 hover:text-emerald-600 transition-all">
                View Full {business.category === 'Restaurants' || business.category === 'Cafes' ? 'Menu' : 'Service List'}
              </button>
            </section>

            {/* Reviews */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <button className="bg-gray-900 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-600 transition-colors">
                  Write a Review
                </button>
              </div>
              <div className="space-y-8">
                {business.reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.userName}`} alt={review.userName} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{review.userName}</h4>
                          <span className="text-xs text-gray-400">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    {review.reply && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-emerald-500">
                        <p className="text-xs font-bold text-gray-900 mb-1">Response from Owner:</p>
                        <p className="text-sm text-gray-600 italic">{review.reply}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-bold text-gray-900">+593 99 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Website</p>
                    <p className="font-bold text-gray-900">www.{business.name.toLowerCase().replace(/\s/g, '')}.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="font-bold text-gray-900">09:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50">
                <div className="h-48 bg-gray-100 rounded-2xl overflow-hidden relative mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(business.location)}&output=embed`}
                  ></iframe>
                </div>
                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.location)}`, '_blank')}
                  className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center"
                >
                  Get Directions <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>

            {/* Similar Businesses */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Similar Places</h3>
              <div className="space-y-6">
                {MOCK_BUSINESSES.filter(b => b.id !== id && b.category === business.category).slice(0, 2).map(b => (
                  <div 
                    key={b.id} 
                    className="flex gap-4 cursor-pointer group"
                    onClick={() => onNavigate('profile', { id: b.id })}
                  >
                    <SafeImage 
                      src={b.image} 
                      alt={b.name} 
                      className="w-16 h-16 rounded-xl object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{b.name}</h4>
                      <div className="flex items-center mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-1" />
                        <span className="text-xs font-bold text-gray-900">{b.rating}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">{b.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
