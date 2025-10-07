
import React, { useState } from 'react';
import { Button } from './common/Button';
import { UserIcon, LockIcon } from './icons/Icons';
import { DatabaseDashboard } from './DatabaseDashboard';

interface AdminPageProps {
  isLoggedIn: boolean;
  onLogin: (success: boolean) => void;
  onLogout: () => void;
}

const AdminLogin: React.FC<{ onLogin: (success: boolean) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      setError('');
      onLogin(true);
    } else {
      setError('Invalid username or password.');
      onLogin(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-base-200">
      <div className="w-full max-w-md p-8 space-y-8 bg-base-100 rounded-xl shadow-lg border border-gray-200/80">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-DEFAULT">Admin Login</h2>
          <p className="mt-2 text-text-light">Access the hospital management dashboard.</p>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-center font-medium">{error}</p>}
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50"
              aria-label="Username"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50"
              aria-label="Password"
            />
          </div>
          <Button type="submit" className="w-full text-lg !font-bold">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
        <div className="min-h-[calc(100vh-200px)] bg-base-200 p-4 sm:p-8">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-DEFAULT mb-4 sm:mb-0">Admin Dashboard</h1>
                    <Button onClick={onLogout} variant="outline">Logout</Button>
                </div>
                <div className="bg-base-100 p-4 md:p-8 rounded-xl shadow-lg border border-gray-200/80">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Database Management</h2>
                    <DatabaseDashboard />
                </div>
            </div>
        </div>
    );
};

export const AdminPage: React.FC<AdminPageProps> = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <main>
      {isLoggedIn ? <AdminDashboard onLogout={onLogout} /> : <AdminLogin onLogin={onLogin} />}
    </main>
  );
};