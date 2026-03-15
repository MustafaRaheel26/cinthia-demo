import React, { useState } from 'react';
import { Search, MapPin, ChevronRight, Utensils, Coffee, Sparkles, Wrench, Trash2, Dumbbell, Map as MapIcon, Bike, Monitor, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES, MOCK_BUSINESSES } from '../data';
import { BusinessCard } from '../components/BusinessCard';
import { SafeImage } from '../components/SafeImage';

const iconMap: Record<string, any> = {
  Utensils, Coffee, Sparkles, Wrench, Trash2, Dumbbell, Bike, Monitor, Heart
};

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const featuredRestaurants = MOCK_BUSINESSES.filter(b => b.category === 'Restaurants').slice(0, 3);
  const popularServices = MOCK_BUSINESSES.filter(b => b.category !== 'Restaurants' && b.category !== 'Cafes').slice(0, 3);
  const topRated = [...MOCK_BUSINESSES].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-emerald-50/50 rounded-b-[100px] -z-10"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest mb-6">
              Discover the Best of Ecuador
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
              Find local services <br />
              <span className="text-emerald-600">you can trust.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
              The all-in-one marketplace for restaurants, cafes, and professional services across Quito, Guayaquil, and Cuenca.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl shadow-emerald-100 border border-emerald-50 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Location (e.g. Quito)" 
                  className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
              <div className="px-4 py-3 flex items-center">
                <select 
                  className="bg-transparent border-none focus:ring-0 text-gray-500 font-medium cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={() => onNavigate('search', { q: searchQuery, loc: locationQuery, cat: selectedCategory })}
                className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
              <p className="text-gray-500 mt-2">Explore services by category</p>
            </div>
            <button 
              onClick={() => onNavigate('search')}
              className="text-emerald-600 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || Utensils;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 cursor-pointer hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all group"
                  onClick={() => onNavigate('search', { category: cat.name })}
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 text-center">{cat.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Restaurants</h2>
              <p className="text-gray-500 mt-2">The best dining experiences in Ecuador</p>
            </div>
            <button 
              onClick={() => onNavigate('search', { category: 'Restaurants' })}
              className="text-emerald-600 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              Explore More <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((biz) => (
              <BusinessCard 
                key={biz.id} 
                business={biz} 
                onClick={(id) => onNavigate('profile', { id })} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Local Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Local Services</h2>
              <p className="text-gray-500 mt-2">Trusted professionals for your home and lifestyle</p>
            </div>
            <button 
              onClick={() => onNavigate('search')}
              className="text-emerald-600 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              Explore More <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((biz) => (
              <BusinessCard 
                key={biz.id} 
                business={biz} 
                onClick={(id) => onNavigate('profile', { id })} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Businesses */}
      <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/20 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Top Rated Businesses</h2>
            <p className="text-emerald-200 text-lg">Highly recommended by our community</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRated.map((biz) => (
              <motion.div 
                key={biz.id}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer"
                onClick={() => onNavigate('profile', { id: biz.id })}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400 mr-2">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold">{biz.rating}</span>
                  <span className="text-white/60 text-sm ml-1">({biz.reviewCount})</span>
                </div>
                <h3 className="text-xl font-bold mb-2 truncate">{biz.name}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{biz.description}</p>
                <div className="flex items-center text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  {biz.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore on Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[40px] overflow-hidden relative min-h-[400px] flex items-center">
            <div className="absolute inset-0 opacity-40">
              <SafeImage 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80" 
                alt="Map Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 px-12 py-20 max-w-xl">
              <h2 className="text-4xl font-bold text-white mb-6">Discover visually with our interactive map</h2>
              <p className="text-gray-300 text-lg mb-10">
                Find hidden gems and local favorites right in your neighborhood. Filter by distance and see what's open now.
              </p>
              <button 
                onClick={() => onNavigate('search', { view: 'map' })}
                className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all flex items-center shadow-xl shadow-emerald-900/20"
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Explore on Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                <span className="ml-2 text-xl font-bold text-gray-900">EcuMarket</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                The leading marketplace for discovering and booking local services in Ecuador. Quality guaranteed.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-emerald-600">Browse Categories</a></li>
                <li><a href="#" className="hover:text-emerald-600">Search Map</a></li>
                <li><a href="#" className="hover:text-emerald-600">Featured Businesses</a></li>
                <li><a href="#" className="hover:text-emerald-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">For Businesses</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-emerald-600">List your Business</a></li>
                <li><a href="#" className="hover:text-emerald-600">Owner Dashboard</a></li>
                <li><a href="#" className="hover:text-emerald-600">Advertising</a></li>
                <li><a href="#" className="hover:text-emerald-600">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-emerald-600">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">© 2026 EcuMarket Marketplace. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
