
import React from 'react';
import { Heart } from 'lucide-react';

const DonationStrip: React.FC = () => {
  return (
    <div className="bg-[#00B4B4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Heart size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Support Our Research for Change</h3>
              <p className="text-white/80">Every contribution helps us gather more insights to build better policies.</p>
            </div>
          </div>
          <button className="bg-[#0B1C3F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-2xl flex items-center space-x-3">
            <span>Contribute Now</span>
            <span className="text-xl">₹</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationStrip;