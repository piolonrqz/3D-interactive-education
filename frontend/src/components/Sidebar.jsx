import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeItem }) => {
  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'library', label: 'Library', path: '/library' },
    { id: 'classes', label: 'Classes', path: '/classes' },
    { id: 'games', label: 'Games', path: '/games' },
    { id: 'community', label: 'Community', path: '/community' }
  ];

  return (
    <div className="flex flex-col flex-shrink-0 w-64 h-screen text-neutral-900 bg-primary-400">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-neutral-900">seagle.</h1>
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`block w-full text-left px-6 py-3 text-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 transition-colors ${
              activeItem === item.id ? 'bg-neutral-50 text-neutral-900 font-medium' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;