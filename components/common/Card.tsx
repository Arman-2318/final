
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-base-100 rounded-xl shadow-md overflow-hidden transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200/80 ${className}`}>
      {children}
    </div>
  );
};