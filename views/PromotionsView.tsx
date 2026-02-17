
import React from 'react';
import { Tag, Clock } from 'lucide-react';

const PromotionsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-[#FF6A00] py-24 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Promotions & Initiatives</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Exclusive campaign benefits for our active community members.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 space-y-12">
        {[
          { title: 'Youth Scholarship Program', desc: 'Full funding for 1,000 students in tech-driven higher education.', valid: 'Until Dec 2025' },
          { title: 'Farmer Agri-Kit Subsidy', desc: '50% off on smart sensors and irrigation management tools.', valid: 'Limited Stock' }
        ].map((p, i) => (
          <div key={i} className="bg-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-orange-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 group-hover:scale-110 transition-transform">
              <Tag size={40} />
            </div>
            <div className="space-y-4 flex-grow text-center md:text-left">
              <h2 className="text-3xl font-black text-[#0B1C3F]">{p.title}</h2>
              <p className="text-xl text-gray-500 leading-relaxed">{p.desc}</p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#FF6A00] font-black uppercase text-xs tracking-widest">
                <Clock size={16} />
                <span>{p.valid}</span>
              </div>
            </div>
            <button className="orange-gradient text-white px-10 py-5 rounded-2xl font-black shadow-xl shrink-0">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsView;
