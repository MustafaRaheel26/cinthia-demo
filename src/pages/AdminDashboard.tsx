import React, { useState } from 'react';
import { Shield, Users, Store, MessageSquare, TrendingUp, AlertCircle, CheckCircle, XCircle, MoreVertical, Search, Filter, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCK_BUSINESSES, CATEGORIES } from '../data';
import { SafeImage } from '../components/SafeImage';

const categoryData = [
  { name: 'Italian', value: 45 },
  { name: 'Pizza', value: 25 },
  { name: 'Desserts', value: 15 },
  { name: 'Seafood', value: 10 },
  { name: 'Steakhouse', value: 5 },
];

const COLORS = ['#ea580c', '#f97316', '#fb923c', '#fdba74', '#fed7aa'];

export const AdminDashboard: React.FC = () => {
  const [businesses, setBusinesses] = useState(MOCK_BUSINESSES.map((b, i) => ({
    ...b,
    status: i % 3 === 0 ? 'pending' : 'active',
    dateJoined: 'Jan 12, 2026'
  })));

  const handleStatusChange = (id: string, newStatus: string) => {
    setBusinesses(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-900 text-white rounded-2xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Control Center</h1>
              <p className="text-gray-500 mt-1">Platform-wide management and monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right mr-4">
              <p className="text-sm font-bold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-orange-600">+124</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">12,482</h3>
            <p className="text-sm text-gray-500 mt-1">Total Users</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-orange-600">+18</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">842</h3>
            <p className="text-sm text-gray-500 mt-1">Registered Restaurants</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-orange-600">+42</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">4,291</h3>
            <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-orange-600">+8.4%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">$12,400</h3>
            <p className="text-sm text-gray-500 mt-1">Monthly Revenue</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Management Table */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-xl font-bold text-gray-900">Restaurant Management</h3>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search restaurants..." 
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-gray-600">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                      <th className="px-8 py-4">Restaurant</th>
                      <th className="px-8 py-4">Category</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Date Joined</th>
                      <th className="px-8 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {businesses.map((biz) => (
                      <tr key={biz.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl overflow-hidden">
                              <SafeImage src={biz.image} alt={biz.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-bold text-gray-900">{biz.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-xs font-medium text-gray-500">{biz.categories[0]}</span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-1.5">
                            {biz.status === 'active' ? (
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            ) : biz.status === 'pending' ? (
                              <Clock className="w-3.5 h-3.5 text-amber-500" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-red-500" />
                            )}
                            <span className={`text-xs font-bold ${
                              biz.status === 'active' ? 'text-green-600' : 
                              biz.status === 'pending' ? 'text-amber-600' : 'text-red-600'
                            }`}>
                              {biz.status.charAt(0).toUpperCase() + biz.status.slice(1)}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-400">{biz.dateJoined}</td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex justify-end gap-2">
                            {biz.status === 'pending' && (
                              <>
                                <button 
                                  onClick={() => handleStatusChange(biz.id, 'active')}
                                  className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                                  title="Approve"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleStatusChange(biz.id, 'rejected')}
                                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                  title="Reject"
                                >
                                  <XCircle className="w-4 h-4" />
                                </button>
                              </>
                            )}
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          {/* Category Distribution Chart */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Category Distribution</h3>
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-gray-900">842</span>
                  <span className="text-xs text-gray-400">Total</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {categoryData.map((cat, idx) => (
                  <div key={cat.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                      <span className="text-sm text-gray-600">{cat.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">System Health</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">API Latency</span>
                  <span className="text-sm font-bold text-orange-600">24ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Server Load</span>
                  <span className="text-sm font-bold text-amber-600">42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Storage</span>
                  <span className="text-sm font-bold text-orange-600">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
