import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Briefcase, Shield, ChevronRight, ArrowLeft } from 'lucide-react';

interface AuthProps {
  onNavigate: (page: string, params?: any) => void;
  setUserRole: (role: any) => void;
  initialMode?: 'login' | 'signup';
}

export const Auth: React.FC<AuthProps> = ({ onNavigate, setUserRole, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [role, setRole] = useState<'user' | 'business' | 'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    setUserRole(role);
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[40px] shadow-2xl shadow-emerald-100 border border-emerald-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-400 hover:text-emerald-600 transition-colors mb-8 text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-xl shadow-emerald-200">
              E
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {mode === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="ml-1 font-bold text-emerald-600 hover:text-emerald-500"
              >
                {mode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleAuth}>
            {mode === 'signup' && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">I am a...</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('user')}
                    className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${role === 'user' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-emerald-200'}`}
                  >
                    <User className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Client</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('business')}
                    className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${role === 'business' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-emerald-200'}`}
                  >
                    <Briefcase className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Owner</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${role === 'admin' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-emerald-200'}`}
                  >
                    <Shield className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Admin</span>
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {mode === 'signup' && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {mode === 'login' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                  <label className="ml-2 block text-sm text-gray-500">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-bold text-emerald-600 hover:text-emerald-500">Forgot password?</a>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all shadow-emerald-200"
            >
              {mode === 'login' ? 'Sign in' : 'Create account'}
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
