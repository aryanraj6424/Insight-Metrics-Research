
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-slate-50 py-24 text-center">
        <h1 className="text-5xl font-black text-[#0B1C3F] mb-4">Voices of Progress</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Real feedback from citizens, community leaders, and local business owners.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="break-inside-avoid bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all">
              <div className="flex text-orange-500 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#0B1C3F] font-medium text-lg leading-relaxed mb-8 italic">
                "The digital governance initiative has literally saved me hours of travel time every month. Truly transparent and modern."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                </div>
                <div>
                  <h4 className="font-black text-[#0B1C3F]">Citizen Name {i}</h4>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Resident, Hubli</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsView;
