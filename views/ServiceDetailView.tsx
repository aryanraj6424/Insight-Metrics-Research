
import React from 'react';
import { Page } from '../App';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

interface Props {
  id: string | null;
  onNavigate: (page: Page) => void;
}

const ServiceDetailView: React.FC<Props> = ({ id, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button onClick={() => onNavigate('services')} className="flex items-center space-x-2 text-[#0B1C3F] font-bold mb-8 hover:text-[#FF6A00]">
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h1 className="text-5xl font-black text-[#0B1C3F]">Service Detail Strategy</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our comprehensive approach ensures that every service we deliver meets the highest standards of efficiency and transparency.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Key Benefits</h3>
              {[
                'Reduced bureaucratic delays by 75%',
                'Full digital traceability for every request',
                '24/7 Citizen support centers',
                'Eco-friendly implementation protocols'
              ].map((b, i) => (
                <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl">
                  <CheckCircle2 className="text-green-500" size={24} />
                  <span className="font-bold text-[#0B1C3F]">{b}</span>
                </div>
              ))}
            </div>

            <button className="orange-gradient text-white px-10 py-5 rounded-2xl font-black shadow-xl w-full md:w-auto">
              Inquire About Service
            </button>
          </div>

          <div className="space-y-8">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="rounded-[3rem] shadow-2xl" alt="Service Detail" />
            <div className="bg-[#0B1C3F] p-10 rounded-[2rem] text-white">
              <h3 className="text-2xl font-bold mb-4">Implementation Timeline</h3>
              <p className="text-gray-400 mb-6">Phase 1: Research (3 Months)<br/>Phase 2: Pilot Deployment (6 Months)<br/>Phase 3: Regional Rollout (12 Months)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailView;
