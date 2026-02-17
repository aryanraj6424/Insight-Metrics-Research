
import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Campaigns: React.FC = () => {
  const events = [
    {
      date: 'OCT 24, 2024',
      title: 'Grand Youth Rally for Change',
      loc: 'City Convention Center',
      img: 'https://picsum.photos/id/129/600/400',
    },
    {
      date: 'NOV 12, 2024',
      title: 'Healthcare Access Townhall',
      loc: 'District Public Hospital',
      img: 'https://picsum.photos/id/152/600/400',
    },
    {
      date: 'DEC 05, 2024',
      title: 'Farmers Awareness Summit',
      loc: 'Regional Agri Market',
      img: 'https://picsum.photos/id/160/600/400',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h4 className="text-[#FF6A00] font-bold tracking-widest uppercase">Ongoing Movement</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C3F] mt-2">Campaign Highlights</h2>
          </div>
          <button className="text-[#0B1C3F] font-bold px-6 py-3 border-2 border-[#0B1C3F] rounded-full hover:bg-[#0B1C3F] hover:text-white transition-all">
            View All Events
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((ev, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative overflow-hidden h-56">
                <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-[#FF6A00]">
                  LIVE EVENT
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-4 text-sm font-semibold text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{ev.loc}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1C3F] group-hover:text-[#FF6A00] transition-colors">{ev.title}</h3>
                <p className="text-gray-500 line-clamp-2">
                  Join thousands of citizens as we discuss our collective future and the steps needed to achieve our goals.
                </p>
                <button className="flex items-center space-x-2 text-[#0B1C3F] font-bold group-hover:underline">
                  <span>Read Full Details</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
