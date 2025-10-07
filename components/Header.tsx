import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Logo } from './icons/Icons';

interface HeaderProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

const NavLink: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}> = ({ onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`relative text-lg font-medium transition-colors duration-300 ${
      isActive
        ? 'text-primary'
        : 'text-text-light hover:text-primary'
    }`}
  >
    {children}
    {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
  </button>
);


export const Header: React.FC<HeaderProps> = ({ setCurrentPage, currentPage }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-base-100/80 backdrop-blur-lg sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : 'shadow-none'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>
            <Logo className="h-10 w-auto text-primary"/>
        </div>
        <div className="flex items-center space-x-8">
            <NavLink onClick={() => setCurrentPage(Page.Home)} isActive={currentPage === Page.Home}>Home</NavLink>
            <NavLink onClick={() => setCurrentPage(Page.Admin)} isActive={currentPage === Page.Admin}>Admin Login</NavLink>
        </div>
      </nav>
    </header>
  );
};