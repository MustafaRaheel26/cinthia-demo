import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Star, 
  BarChart3, 
  Settings, 
  LogOut, 
  Eye, 
  Heart, 
  MessageSquare,
  ChevronRight,
  MoreHorizontal,
  Plus,
  ArrowUpRight,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { MOCK_BUSINESSES } from '../data';
import { SafeImage } from '../components/SafeImage';

const analyticsData = [
  { name: 'Mon', views: 400, reviews: 24 },
  { name: 'Tue', views: 300, reviews: 13 },
  { name: 'Wed', views: 200, reviews: 98 },
  { name: 'Thu', views: 278, reviews: 39 },
  { name: 'Fri', views: 189, reviews: 48 },
  { name: 'Sat', views: 239, reviews: 38 },
  { name: 'Sun', views: 349, reviews: 43 },
];

const recentReviews = [
  { id: 1, user: 'Sarah J.', rating: 5, comment: 'Amazing food and service! The pasta was perfectly cooked.', date: '2 hours ago' },
  { id: 2, user: 'Michael R.', rating: 4, comment: 'Great atmosphere, but the wait time was a bit long.', date: '5 hours ago' },
  { id: 3, user: 'Emma W.', rating: 5, comment: 'Best pizza in town. Will definitely be back!', date: '1 day ago' },
];

export const BusinessDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const business = MOCK_BUSINESSES[0]; // Mocking the owner's business

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'profile', label: 'Edit Profile', icon: Settings },
    { id: 'menu', label: 'Menu & Services', icon: UtensilsCrossed },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col">
        <div className="p-8">
          <div className="flex items-center gap-2 text-orange-600 font-black text-2xl tracking-tighter">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
              <Store className="w-5 h-5" />
            </div>
            <span>SaaS<span className="text-gray-900">Hub</span></span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === item.id 
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{business.name}</h1>
              <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                <MapPin className="w-4 h-4" />
                {business.address}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-all">
                <Plus className="w-4 h-4" />
                Add Item
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                <SafeImage src={business.image} alt={business.name} />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Profile Views', value: '2,842', icon: Eye, color: 'blue', trend: '+12%' },
              { label: 'Total Reviews', value: '156', icon: MessageSquare, color: 'orange', trend: '+5%' },
              { label: 'Avg. Rating', value: business.rating.toString(), icon: Star, color: 'amber', trend: '0.0' },
              { label: 'Favorites', value: '428', icon: Heart, color: 'red', trend: '+18%' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 bg-${stat.color}-50 text-${stat.color}-600 rounded-xl`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-green-600 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-gray-900">Weekly Profile Views</h3>
                <select className="bg-gray-50 border-none text-sm font-bold text-gray-500 rounded-lg px-3 py-1 focus:ring-0">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      cursor={{ fill: '#f97316', opacity: 0.1 }}
                    />
                    <Bar dataKey="views" fill="#ea580c" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-gray-900">Review Growth</h3>
                <select className="bg-gray-50 border-none text-sm font-bold text-gray-500 rounded-lg px-3 py-1 focus:ring-0">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line type="monotone" dataKey="reviews" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Reviews Table */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Recent Reviews</h3>
              <button className="text-sm font-bold text-orange-600 hover:text-orange-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-8 py-4">User</th>
                    <th className="px-8 py-4">Rating</th>
                    <th className="px-8 py-4">Comment</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentReviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                            {review.user.charAt(0)}
                          </div>
                          <span className="text-sm font-bold text-gray-900">{review.user}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-sm text-gray-500 line-clamp-1">{review.comment}</p>
                      </td>
                      <td className="px-8 py-5 text-sm text-gray-400">{review.date}</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-xs font-bold text-orange-600 hover:bg-orange-50 px-3 py-1.5 rounded-lg transition-all">
                          Reply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper component for sidebar logo
const Store = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 10V7" />
  </svg>
);
