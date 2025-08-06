// components/StatusCard.jsx
import React from 'react';

const StatusCard = ({ title, count = 0, icon }) => {
  return (
    <div className="p-6 transition-shadow border rounded-lg cursor-pointer bg-neutral-50 border-neutral-200 hover:shadow-md">
      <div className="w-16 h-20 mb-4 bg-teal-400 rounded"></div>
      <h3 className="font-medium text-neutral-800">{title}</h3>
      {count > 0 && <p className="mt-1 text-sm text-neutral-500">{count} books</p>}
    </div>
  );
};

export default StatusCard;