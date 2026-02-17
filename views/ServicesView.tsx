
import React from 'react';
import { Page } from '../App';
import { ArrowRight, Laptop, Heart, Zap, Globe, Shield, Users } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: Page, id?: string) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const services = [
    { id: '1', name: 'Digital Governance', desc: 'Bringing 100% of municipal services online for citizen convenience.', icon: <Laptop /> },
    { id: '2', name: 'Healthcare Excellence', desc: 'Modernizing PHCs and hospital infrastructure across the region.', icon: <Heart /> },
    { id: '3', name: 'Infrastructure Development', desc: 'Smart roads, waste management, and green urban planning.', icon: <Zap /> },
    { id: '4', name: 'Global Connectivity', desc: 'Establishing tech hubs to connect local talent with global markets.', icon: <Globe /> },
    { id: '5', name: 'Public Safety', desc: 'Enhanced security monitoring and emergency response systems.', icon: <Shield /> },
    { id: '6', name: 'Youth Empowerment', desc: 'Skills training and startup incubation centers.', icon: <Users /> },
  ];

  return (
    <div className="animate-in slide-in-from-right-10 duration-500 pb-24">
      <div className="bg-[#0B1C3F] py-24 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Strategic Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Providing the structural support for a modern society.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.id} className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
              {/* Fix: Added <any> to React.ReactElement to resolve property access error with cloneElement */}
              <div className="w-16 h-16 orange-gradient rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black text-[#0B1C3F] mb-4">{s.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{s.desc}</p>
              <button 
                onClick={() => onNavigate('service-detail', s.id)}
                className="font-black text-[#FF6A00] flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
              >
                <span>View Strategy</span>
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
