
import React from 'react';
import { ArrowRight, CheckCircle, Database, ShieldCheck, BarChart3, Search } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-[#333333] overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920" 
          alt="Data Research and Strategy" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-10">
        <div className="text-white space-y-8 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 backdrop-blur-md px-4 py-2 rounded-full text-[#009ADE] font-semibold border border-[#009ADE]/20">
            <Database size={18} />
            <span className="text-sm tracking-wide uppercase font-black">Insight Metrics Research</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Grounded in <span className="text-[#009ADE]">Data</span>,<br />
              <span className="text-[#EAB308]">Rooted</span> in Realism
            </h1>
            <p className="text-xl text-gray-400 font-medium italic">
              "Providing precision leadership for the modern political landscape."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-[#009ADE]" />
              <span>Political Research</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-[#009ADE]" />
              <span>Governance Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-[#009ADE]" />
              <span>Policy Evaluation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-[#009ADE]" />
              <span>Social Development</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#009ADE] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-[#007bb3] transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <span>Get Expert Advice</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#333333] transition-all"
            >
              Our Vision
            </button>
          </div>
        </div>

        <div className="hidden md:block relative animate-[slideInRight_1s_ease-out]">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" 
              alt="Analytical Dashboard" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          {/* Decorative Experience Accent */}
          <div className="absolute -bottom-6 -left-6 bg-[#EAB308] p-6 rounded-3xl z-20 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-[#333333]/20 p-3 rounded-xl">
                <BarChart3 className="text-[#333333]" size={24} />
              </div>
              <div className="text-[#333333]">
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Proven Results</p>
                <p className="text-2xl font-black">50+ Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
