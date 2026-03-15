import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Filter, Star, List, Map as MapIcon, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, MOCK_BUSINESSES } from '../data';
import { BusinessCard } from '../components/BusinessCard';
import { Business } from '../types';
import { SafeImage } from '../components/SafeImage';

interface SearchProps {
  onNavigate: (page: string, params?: any) => void;
  initialParams?: any;
}

export const SearchPage: React.FC<SearchProps> = ({ onNavigate, initialParams }) => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>(initialParams?.view || 'list');
  const [searchQuery, setSearchQuery] = useState(initialParams?.q || '');
  const [locationQuery, setLocationQuery] = useState(initialParams?.loc || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialParams?.category || initialParams?.cat || '');
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const filteredBusinesses = MOCK_BUSINESSES.filter(biz => {
    const matchesCategory = !selectedCategory || biz.category === selectedCategory;
    const matchesSearch = !searchQuery || biz.name.toLowerCase().includes(searchQuery.toLowerCase()) || biz.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationQuery || biz.city.toLowerCase().includes(locationQuery.toLowerCase()) || biz.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesRating = biz.rating >= minRating;
    return matchesCategory && matchesSearch && matchesLocation && matchesRating;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-white overflow-hidden">
      {/* Search & Filter Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for restaurants, spas, home repair..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 shrink-0">
              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="City"
                className="bg-transparent border-none focus:ring-0 text-sm font-medium text-gray-600 w-24"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 shrink-0">
              <Filter className="w-4 h-4 text-gray-400 mr-2" />
              <select 
                className="bg-transparent border-none focus:ring-0 text-sm font-medium text-gray-600 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 shrink-0">
              <Star className="w-4 h-4 text-gray-400 mr-2" />
              <select 
                className="bg-transparent border-none focus:ring-0 text-sm font-medium text-gray-600 cursor-pointer"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
              >
                <option value="0">Any Rating</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
              </select>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 mx-2 hidden md:block"></div>

            <div className="flex bg-gray-100 p-1 rounded-xl shrink-0">
              <button 
                onClick={() => setViewMode('list')}
                className={`flex items-center px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <List className="w-4 h-4 mr-2" /> List
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={`flex items-center px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <MapIcon className="w-4 h-4 mr-2" /> Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* List View */}
        <div className={`flex-1 overflow-y-auto p-6 bg-gray-50/50 transition-all duration-300 ${viewMode === 'map' ? 'hidden lg:block lg:max-w-md xl:max-w-lg' : 'w-full'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">{filteredBusinesses.length} results found</h2>
              <div className="text-sm text-gray-500">Sorted by: <span className="font-bold text-gray-900">Recommended</span></div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredBusinesses.map(biz => (
                <BusinessCard 
                  key={biz.id} 
                  business={biz} 
                  variant="list"
                  onClick={(id) => onNavigate('profile', { id })} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Map View (Mock) */}
        <div className={`flex-1 bg-gray-200 relative transition-all duration-300 ${viewMode === 'list' ? 'hidden lg:block' : 'w-full block'}`}>
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
            <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80 M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" stroke="#000" strokeWidth="0.1" fill="none" />
            </svg>
            
            {/* Mock Markers */}
            {filteredBusinesses.map((biz, idx) => (
              <motion.div
                key={biz.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="absolute cursor-pointer group"
                style={{ 
                  left: `${30 + (idx * 15) % 40}%`, 
                  top: `${20 + (idx * 20) % 60}%` 
                }}
                onClick={() => setSelectedBusiness(biz)}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${selectedBusiness?.id === biz.id ? 'bg-emerald-600 text-white scale-125 z-10' : 'bg-white text-emerald-600 hover:scale-110'}`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {biz.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600">+</button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600">-</button>
          </div>

          {/* Business Popup on Map */}
          <AnimatePresence>
            {selectedBusiness && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-30"
              >
                <button 
                  onClick={() => setSelectedBusiness(null)}
                  className="absolute top-2 right-2 p-1 bg-black/20 hover:bg-black/40 text-white rounded-full z-10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <SafeImage 
                  src={selectedBusiness.image} 
                  alt={selectedBusiness.name} 
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">{selectedBusiness.name}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
                        <span className="font-bold text-gray-900 mr-1">{selectedBusiness.rating}</span>
                        <span>({selectedBusiness.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate('profile', { id: selectedBusiness.id })}
                    className="w-full mt-4 bg-emerald-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    View Profile <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
