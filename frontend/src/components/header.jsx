import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileAction = (action) => {
    setIsDropdownOpen(false);
    if (action === 'profile') {
      // Replace with your routing logic:
      window.location.href = '/profile';
    } else if (action === 'logout') {
      // Replace with your logout logic:
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  };

  return (
    <div className="relative flex items-center justify-between p-6 border-b bg-neutral-50 border-neutral-200">
      <div className="flex items-center gap-4">
        <button className="p-2 transition-colors rounded-lg hover:bg-neutral-100">
          <Plus className="w-5 h-5 text-neutral-600" />
        </button>
        <button className="p-2 transition-colors rounded-lg hover:bg-neutral-100">
          <Search className="w-5 h-5 text-neutral-600" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium text-neutral-700">User's Library</span>
        <button
          className="flex items-center justify-center w-10 h-10 font-bold text-black rounded-full bg-primary-400 focus:outline-none"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          PP
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 w-40 border rounded-lg shadow-lg bg-neutral-50 border-neutral-200 right-6 top-20">
            <button
              className="w-full px-4 py-2 text-left hover:bg-neutral-100"
              onClick={() => handleProfileAction('profile')}
            >
              Profile
            </button>
            <button
              className="w-full px-4 py-2 text-left hover:bg-neutral-100"
              onClick={() => handleProfileAction('logout')}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;