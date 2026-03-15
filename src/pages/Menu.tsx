import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { SafeImage } from '../components/SafeImage';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

  const categories = ['All', 'Appetizers', 'Main Courses', 'Pizza', 'Desserts', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.item.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.item.id !== itemId);
    });
  };

  const cartTotal = cart.reduce((sum, i) => sum + (i.item.price * i.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Exquisite Menu</h1>
              <p className="text-gray-500 mt-2">Discover the authentic flavors of Italy, prepared with passion.</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search dishes..." 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="p-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-orange-600 transition-all">
                <Filter className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 mt-12 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-white text-gray-500 border border-gray-100 hover:border-orange-200 hover:text-orange-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Menu Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={item.id}
                    className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex group h-48"
                  >
                    <div className="w-40 h-full overflow-hidden shrink-0">
                      <SafeImage 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                          <span className="text-orange-600 font-extrabold">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-[10px] font-bold text-gray-900">4.9</span>
                        </div>
                        <button 
                          onClick={() => addToCart(item)}
                          className="p-2 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-8 sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Your Order</h2>
              </div>

              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-sm">Your cart is empty.</p>
                    <p className="text-xs text-gray-400 mt-2">Add some delicious items to get started!</p>
                  </div>
                ) : (
                  cart.map(({ item, quantity }) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                        <p className="text-xs text-gray-500">${item.price.toFixed(2)} x {quantity}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-xl">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 hover:bg-white hover:text-orange-600 rounded-lg transition-all text-gray-400"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold text-gray-900 min-w-[20px] text-center">{quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="p-1.5 hover:bg-white hover:text-orange-600 rounded-lg transition-all text-gray-400"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Delivery Fee</span>
                  <span className="font-bold text-gray-900">${cart.length > 0 ? '2.50' : '0.00'}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-orange-600">${(cartTotal + (cart.length > 0 ? 2.5 : 0)).toFixed(2)}</span>
                </div>
                <button 
                  disabled={cart.length === 0}
                  className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 disabled:opacity-50 disabled:shadow-none mt-4"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
