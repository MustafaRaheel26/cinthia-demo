import React from 'react';
import { 
  User, 
  Heart, 
  Star, 
  Settings, 
  LogOut, 
  Bell, 
  ChevronRight, 
  Search,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_BUSINESSES } from '../data';
import { SafeImage } from '../components/SafeImage';

export const UserDashboard: React.FC = () => {
  const savedRestaurants = MOCK_BUSINESSES.slice(0, 3);
  const recentReviews = [
    { 
      id: 1, 
      restaurant: 'La Dolce Vita', 
      rating: 5, 
      comment: 'The best authentic Italian food I have had in years. The truffle pasta is a must-try!', 
      date: 'March 12, 2026',
      image: MOCK_BUSINESSES[0].image
    },
    { 
      id: 2, 
      restaurant: 'Ocean Breeze', 
      rating: 4, 
      comment: 'Fresh seafood and great view. Service was a bit slow but the food made up for it.', 
      date: 'March 8, 2026',
      image: MOCK_BUSINESSES[3].image
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col">
        <div className="p-8">
          <div className="flex items-center gap-2 text-orange-600 font-black text-2xl tracking-tighter">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <span>SaaS<span className="text-gray-900">Hub</span></span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {[
            { label: 'Profile Overview', icon: User, active: true },
            { label: 'Saved Restaurants', icon: Heart, active: false },
            { label: 'My Reviews', icon: Star, active: false },
            { label: 'Account Settings', icon: Settings, active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-100 px-8 py-6 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for your next meal..." 
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-600 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">Mustafa Raheel</p>
                  <p className="text-xs text-gray-400">Premium Member</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mustafa" alt="User" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Welcome Banner */}
          <div className="bg-gray-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl font-bold mb-4">Welcome back, Mustafa! 👋</h2>
              <p className="text-gray-400 mb-8">You have 3 new restaurant recommendations based on your recent visits to Italian places.</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-orange-700 transition-all">
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-orange-600/20 to-transparent"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Saved Places', value: '12', icon: Heart, color: 'red' },
              { label: 'Reviews Written', value: '24', icon: Star, color: 'amber' },
              { label: 'Notifications', value: '3', icon: Bell, color: 'orange' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center gap-6">
                <div className={`p-4 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Saved Restaurants */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Recently Saved</h3>
                <button className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedRestaurants.map((biz) => (
                  <div key={biz.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                    <div className="h-48 relative">
                      <SafeImage src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl text-red-500 shadow-sm">
                        <Heart className="w-5 h-5 fill-red-500" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{biz.name}</h4>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="text-sm font-bold text-gray-900">{biz.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                        <MapPin className="w-3 h-3" />
                        {biz.address}
                      </div>
                      <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl text-sm hover:bg-gray-100 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">My Recent Reviews</h3>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden">
                        <SafeImage src={review.image} alt={review.restaurant} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{review.restaurant}</h4>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic leading-relaxed">"{review.comment}"</p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {review.date}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[32px] text-gray-400 font-bold text-sm hover:border-orange-200 hover:text-orange-600 transition-all">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
