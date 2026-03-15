import React from 'react';
import { Search, User, Menu, MapPin, Bell } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string, params?: any) => void;
  currentPage: string;
  userRole: 'user' | 'business' | 'admin' | 'guest';
  setUserRole: (role: 'user' | 'business' | 'admin' | 'guest') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, userRole, setUserRole }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200">
                E
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight">EcuMarket</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => onNavigate('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('search')}
                className={`text-sm font-medium transition-colors ${currentPage === 'search' ? 'text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Discover
              </button>
              {userRole !== 'guest' && (
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className={`text-sm font-medium transition-colors ${currentPage === 'dashboard' ? 'text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
              <span className="text-xs font-medium text-gray-600">Quito, EC</span>
            </div>

            <div className="flex items-center space-x-2">
              {userRole === 'guest' ? (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => onNavigate('auth', { mode: 'login' })}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => onNavigate('auth', { mode: 'signup' })}
                    className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-100"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>
                  <div 
                    onClick={() => onNavigate('dashboard')}
                    className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole}`} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button 
                    onClick={() => setUserRole('guest')}
                    className="text-xs text-gray-400 hover:text-red-500 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
