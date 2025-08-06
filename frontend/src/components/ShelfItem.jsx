// components/ShelfItem.jsx
import React from 'react';

const ShelfItem = ({ title, author, description, curator, image }) => {
  return (
    <div className="flex gap-4 p-4 transition-colors rounded-lg cursor-pointer hover:bg-neutral-50">
      <div className="flex-shrink-0 w-16 h-20 rounded bg-primary-300"></div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-neutral-800">{title}</h3>
          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-success-500">
            <span className="text-xs text-white">?</span>
          </div>
        </div>
        <p className="mb-2 text-sm text-neutral-600">Shelf • {curator}</p>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default ShelfItem;