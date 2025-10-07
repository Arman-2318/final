
import React from 'react';
import { Logo } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-text-DEFAULT text-base-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-12 w-auto mb-4 text-base-100" />
            <p className="text-text-light max-w-md">
              Providing exceptional healthcare with compassion and expertise. Your health is our priority.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-base-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-base-100 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-text-light">
              <li>123 Health St, Wellness City, 12345</li>
              <li>(123) 456-7890</li>
              <li>contact@medicareplus.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediCare+ Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};