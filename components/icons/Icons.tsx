
import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
    <text x="35" y="35" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="bold" fill="currentColor">
      MediCare+
    </text>
    <path d="M10 10 H 30 V 30 H 10 Z" fill="#4CAF50" />
    <path d="M15 15 H 25 V 25 H 15 Z" fill="white" />
    <path d="M19 15 V 25 M 15 20 H 25" stroke="#4CAF50" strokeWidth="2" />
  </svg>
);

export const StethoscopeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935m-14 0A10.003 10.003 0 0112 2a10.003 10.003 0 017 1.935M5.5 21h13.041a2 2 0 002-1.823l-1.427-7.135a2 2 0 00-1.995-1.542h-9.223a2 2 0 00-1.995 1.542l-1.427 7.135A2 2 0 005.5 21z" />
  </svg>
);

export const HeartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export const AmbulanceIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.5-1.5L8 17l2.5-1.5L13 16z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h4M10 9v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h2a1 1 0 001-1V6a1 1 0 00-1-1h-3.28a1 1 0 00-.948.684l-1.788 4.47A1 1 0 0015 11h-2" />
    />
  </svg>
);

export const BrainIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.547 21.03a6.002 6.002 0 003.53-.518l.318-.158a6 6 0 013.53-.518l2.387.477a2 2 0 001.806-.547M8.547 21.03a2 2 0 01-1.806.547l-2.387-.477a6.002 6.002 0 01-3.53-.518l-.318.158a6 6 0 00-3.53.518L.53 21.48a2 2 0 00-.547 1.806" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.572 15.428a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387-.477a2 2 0 001.806-.547" />
  </svg>
);


export const UserIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const LockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);
