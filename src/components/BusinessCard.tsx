import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { Business } from '../types';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

interface BusinessCardProps {
  business: Business;
  onClick: (id: string) => void;
  variant?: 'grid' | 'list';
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business, onClick, variant = 'grid' }) => {
  if (variant === 'list') {
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        className="flex bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => onClick(business.id)}
      >
        <div className="w-48 h-full min-h-[160px]">
          <SafeImage 
            src={business.image} 
            alt={business.name} 
            className="w-full h-full object-cover"
            fallbackSources={[
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
            ]}
          />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {business.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{business.name}</h3>
              </div>
              <div className="flex items-center bg-amber-50 px-2 py-1 rounded-lg">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-1" />
                <span className="text-xs font-bold text-amber-700">{business.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{business.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {business.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
            <div className="flex items-center text-gray-400">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span className="text-xs">{business.location}</span>
            </div>
            <button className="text-emerald-600 text-sm font-bold flex items-center hover:translate-x-1 transition-transform">
              Details <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
      onClick={() => onClick(business.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <SafeImage 
          src={business.image} 
          alt={business.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          fallbackSources={[
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
          ]}
        />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
            {business.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center shadow-sm">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
          <span className="text-xs font-bold text-gray-900">{business.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{business.name}</h3>
        <div className="flex items-center text-gray-400 mt-1 mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span className="text-xs truncate">{business.location}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">{business.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-900">{business.priceRange || '$$'}</span>
          <button className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};
