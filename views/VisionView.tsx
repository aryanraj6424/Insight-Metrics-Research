
import React from 'react';
import Vision from '../components/Vision';

const VisionView: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <div className="bg-orange-600 py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Our Vision for 2025</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">A data-driven, compassionate blueprint for regional growth.</p>
      </div>
      
      <Vision />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1C3F] text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Manifesto Download</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Download our complete 120-page detailed manifesto covering agriculture, industry, 
                  education, tech, and social welfare policies.
                </p>
                <button className="bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-xl">
                  Download PDF (12MB)
                </button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800" 
                  alt="Manifesto" 
                  className="rounded-xl shadow-2xl transform rotate-3"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionView;
