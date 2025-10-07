import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AdminPage } from './components/AdminPage';
import { ToastProvider } from './hooks/useToast';
import { ToastContainer } from './components/common/Toast';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // When switching away from admin page, log out.
    if (currentPage !== Page.Admin) {
      setIsLoggedIn(false);
    }
  }, [currentPage]);
  
  const handleLogin = (success: boolean) => {
    if(success) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderPage = () => {
    switch(currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Admin:
        return <AdminPage isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />;
      default:
        return <HomePage />;
    }
  }

  return (
    <ToastProvider>
      <div className="bg-base-200 min-h-screen flex flex-col font-sans text-text-DEFAULT">
        <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="flex-grow">
          {renderPage()}
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
};

export default App;