
import React from 'react';
import { Database, ShieldCheck, Target, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" 
              alt="Data Strategy Team" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#EAB308] p-8 rounded-[2rem] z-20 text-[#333333] shadow-xl max-w-xs">
              <p className="text-lg font-black">"Rooted in Political Realism, powered by precision metrics."</p>
              <p className="mt-4 text-xs font-black uppercase tracking-widest opacity-80">— Insight Metrics Research</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[#009ADE] font-black tracking-widest uppercase text-xs">The Insight Framework</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#333333]">Science Meets Strategy</h2>
              <p className="text-xl text-gray-500 font-medium italic">"Grounded in Data" — Our fundamental promise.</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Insight Metrics Research delivers a tactical advantage through comprehensive constituency profiling and narrative building. 
              Our work spans from the Government of Uttar Pradesh to international mandates for WHO and UNESCAP, ensuring our 
              clients receive global-standard strategic coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-3xl">
                <div className="p-3 bg-[#009ADE]/10 rounded-lg text-[#009ADE]">
                  <Database size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#333333]">Data Analytics</h5>
                  <p className="text-sm text-gray-500">Evidence-based electoral strategy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-3xl">
                <div className="p-3 bg-[#EAB308]/10 rounded-lg text-[#EAB308]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#333333]">Governance</h5>
                  <p className="text-sm text-gray-500">Public policy research and management.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#333333] rounded-xl flex items-center justify-center text-white">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-[#333333] font-black text-xl">50+ Campaigns Managed</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Pan-India Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
