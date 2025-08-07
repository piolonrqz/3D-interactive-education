import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import StatusCard from './StatusCard';
import ShelfItem from './ShelfItem';

const Content = () => {
  const [recentsExpanded, setRecentsExpanded] = useState(true);

  const statusCards = [
    { title: 'Reading', count: 3 },
    { title: 'Completed', count: 12 },
    { title: 'To Read', count: 8 }
  ];

  const recentShelves = [
    {
      title: 'Emotions',
      curator: 'Amando Loreno IV',
      description: 'Songs about Meiji Hart Motoc'
    }
  ];

  return (
    <div className="flex-1 p-6 pb-24 overflow-y-auto">
      {/* Reading Status Section */}
      <section className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Reading Status</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {statusCards.map((card, index) => (
            <StatusCard key={index} title={card.title} count={card.count} />
          ))}
        </div>
      </section>

      {/* Your Shelves Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Your Shelves</h2>
        
        <div className="border rounded-lg bg-neutral-50 border-neutral-200">
          <button
            onClick={() => setRecentsExpanded(!recentsExpanded)}
            className="flex items-center justify-between w-full p-4 transition-colors hover:bg-neutral-100"
          >
            <span className="font-medium text-neutral-800">Recents</span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-600 transition-transform ${
                recentsExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {recentsExpanded && (
            <div className="border-t border-neutral-200">
              {recentShelves.map((shelf, index) => (
                <ShelfItem
                  key={index}
                  title={shelf.title}
                  curator={shelf.curator}
                  description={shelf.description}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Content;