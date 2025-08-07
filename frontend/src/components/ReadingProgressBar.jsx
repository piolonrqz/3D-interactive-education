// components/ReadingProgressBar.jsx
import React from 'react';
import { ArrowLeft, ArrowRight, Menu, Bookmark } from 'lucide-react';

const ReadingProgressBar = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 text-white bg-slate-600">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-16 bg-teal-400 rounded"></div>
          <div>
            <h4 className="font-medium text-white">Chapter 1: Title</h4>
            <p className="text-sm text-white">Book Title • Author</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-2 transition-colors rounded hover:bg-teal-300">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-white">60%</span>
            <div className="w-64 h-2 rounded-full bg-neutral-600">
              <div className="w-3/5 h-full rounded-full bg-primary-400"></div>
            </div>
            <span className="text-sm text-white">100%</span>
          </div>
          
          <button className="p-2 transition-colors rounded hover:bg-teal-300">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 transition-colors rounded hover:bg-teal-300">
            <Menu className="w-5 h-5" />
          </button>
          <button className="p-2 transition-colors rounded hover:bg-teal-300">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingProgressBar;