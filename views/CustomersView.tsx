
import React from 'react';

const CustomersView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-[#0B1C3F] py-24 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Our Valued Partners</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Working together with communities and corporations to build a better future.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="bg-white p-12 rounded-[2rem] shadow-sm flex items-center justify-center border border-gray-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <div className="text-3xl font-black text-gray-300">LOGO {i}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 space-y-12">
          <h2 className="text-3xl font-black text-center text-[#0B1C3F]">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Hubli Urban Co-op', loc: 'Hubli, Karnataka', desc: 'Implemented our digital banking gateway for 50,000+ local members.' },
              { name: 'Regional Agri Board', loc: 'Dharwad District', desc: 'Successfully deployed smart soil sensors across 500+ small-scale farms.' }
            ].map((c, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-orange-50">
                <h3 className="text-2xl font-black text-[#0B1C3F]">{c.name}</h3>
                <p className="text-[#FF6A00] font-bold text-sm mb-4">{c.loc}</p>
                <p className="text-gray-500 leading-relaxed italic">"{c.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersView;
