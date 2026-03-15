import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SearchPage } from './pages/Search';
import { BusinessProfile } from './pages/BusinessProfile';
import { UserDashboard } from './pages/UserDashboard';
import { BusinessDashboard } from './pages/BusinessDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Auth } from './pages/Auth';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'search' | 'profile' | 'dashboard' | 'auth';
type UserRole = 'user' | 'business' | 'admin' | 'guest';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<any>(null);
  const [userRole, setUserRole] = useState<UserRole>('guest');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, pageParams]);

  const navigate = (page: string, params?: any) => {
    setCurrentPage(page as Page);
    setPageParams(params || null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'search':
        return <SearchPage onNavigate={navigate} initialParams={pageParams} />;
      case 'profile':
        return <BusinessProfile id={pageParams?.id} onNavigate={navigate} />;
      case 'auth':
        return <Auth onNavigate={navigate} setUserRole={setUserRole} initialMode={pageParams?.mode} />;
      case 'dashboard':
        if (userRole === 'user') return <UserDashboard onNavigate={navigate} />;
        if (userRole === 'business') return <BusinessDashboard />;
        if (userRole === 'admin') return <AdminDashboard />;
        return <Auth onNavigate={navigate} setUserRole={setUserRole} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar 
        onNavigate={navigate} 
        currentPage={currentPage} 
        userRole={userRole} 
        setUserRole={setUserRole} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (pageParams?.id || '') + userRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Toast / Notification Area (Mock) */}
      <div className="fixed bottom-8 right-8 z-[100]">
        {/* Can add notifications here if needed */}
      </div>
    </div>
  );
}
