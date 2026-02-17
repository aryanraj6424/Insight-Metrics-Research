
import React from 'react';
import Campaigns from '../components/Campaigns';
import { Clock, Users, ArrowRight } from 'lucide-react';

const CampaignsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-[#0B1C3F] py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Campaigns & Events</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Track our movement across the region.</p>
      </div>

      <Campaigns />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1C3F] mb-12">Upcoming Rallies</h2>
          <div className="space-y-6">
            {[
              { time: '10:00 AM', date: 'Oct 28', title: 'Workers Rights March', venue: 'Industrial Area Plaza' },
              { time: '02:30 PM', date: 'Nov 02', title: 'Youth Townhall', venue: 'Modern University Hall' },
              { time: '05:00 PM', date: 'Nov 10', title: 'Grand Closing Rally', venue: 'Victory Stadium' }
            ].map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-6">
                  <div className="bg-orange-600 text-white p-4 rounded-xl text-center min-w-[80px]">
                    <p className="text-sm font-bold uppercase">{event.date.split(' ')[0]}</p>
                    <p className="text-2xl font-black">{event.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1C3F]">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mt-1">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <span>at {event.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i+idx}`} className="w-10 h-10 rounded-full border-2 border-white" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+1.2k</div>
                  </div>
                  <button className="bg-[#0B1C3F] text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                    RSVP Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignsView;
