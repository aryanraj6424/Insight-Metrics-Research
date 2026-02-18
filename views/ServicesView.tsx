
// import React from 'react';
// import { Page } from '../App';
// import { ArrowRight, Laptop, Heart, Zap, Globe, Shield, Users } from 'lucide-react';

// interface ServicesViewProps {
//   onNavigate: (page: Page, id?: string) => void;
// }

// const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
//   const services = [
//     { id: '1', name: 'Digital Governance', desc: 'Bringing 100% of municipal services online for citizen convenience.', icon: <Laptop /> },
//     { id: '2', name: 'Healthcare Excellence', desc: 'Modernizing PHCs and hospital infrastructure across the region.', icon: <Heart /> },
//     { id: '3', name: 'Infrastructure Development', desc: 'Smart roads, waste management, and green urban planning.', icon: <Zap /> },
//     { id: '4', name: 'Global Connectivity', desc: 'Establishing tech hubs to connect local talent with global markets.', icon: <Globe /> },
//     { id: '5', name: 'Public Safety', desc: 'Enhanced security monitoring and emergency response systems.', icon: <Shield /> },
//     { id: '6', name: 'Youth Empowerment', desc: 'Skills training and startup incubation centers.', icon: <Users /> },
//   ];

//   return (
//     <div className="animate-in slide-in-from-right-10 duration-500 pb-24">
//       <div className="bg-[#0B1C3F] py-24 text-white text-center">
//         <h1 className="text-5xl font-black mb-4">Strategic Services</h1>
//         <p className="text-xl text-gray-400 max-w-2xl mx-auto">Providing the structural support for a modern society.</p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 mt-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map(s => (
//             <div key={s.id} className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
//               {/* Fix: Added <any> to React.ReactElement to resolve property access error with cloneElement */}
//               <div className="w-16 h-16 orange-gradient rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
//                 {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
//               </div>
//               <h3 className="text-2xl font-black text-[#0B1C3F] mb-4">{s.name}</h3>
//               <p className="text-gray-500 leading-relaxed mb-8">{s.desc}</p>
//               <button 
//                 onClick={() => onNavigate('service-detail', s.id)}
//                 className="font-black text-[#FF6A00] flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
//               >
//                 {/* <span>View Strategy</span> */}
//                 {/* <ArrowRight size={20} /> */}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesView;



import React from 'react';
import { Page } from '../App';
import { Laptop, Heart, Zap, Globe, Shield, Users } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: Page, id?: string) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const services = [
    { id: '1', title: 'Research & Data Analytics', desc: 'Transforming raw data into actionable political intelligence through advanced modeling.', icon: <Laptop /> },
    { id: '2', title: 'Constituency & Candidate Profiling', desc: 'Deep demographic analysis and perception mapping for targeted outreach.', icon: <Heart /> },
    { id: '3', title: 'Strategy & Narrative Building', desc: 'Crafting powerful, data-backed narratives that resonate with local realities.', icon: <Zap /> },
    { id: '4', title: 'Booth Management System', desc: 'Precision logistics and real-time monitoring at the granular booth level.', icon: <Globe /> },
    { id: '5', title: 'Online & Offline Campaign Management', desc: 'Seamlessly integrated digital presence and grassroots mobilization.', icon: <Shield /> },
    { id: '6', title: 'Digital War Room Coordination', desc: ' Real-Time response infrastructure for rapid strategic pivots.', icon: <Users /> },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Background set to White, avoiding any Gray */}
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-[#009ADE] font-black uppercase tracking-[0.3em] text-sm">
              Strategic Governance
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#0089D0]">
              Our Services
            </h2>
            <div className="w-24 h-2 bg-[#FFDB58] mx-auto rounded-full"></div> 
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((s) => (
              <div 
                key={s.id} 
                className="group bg-white p-12 rounded-[3rem] border-2 border-[#009ADE]/10 hover:border-[#009ADE] transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-[#009ADE]/10 cursor-default"
              >
                {/* Icon Container - Unicef Blue branding */}
                <div className="w-20 h-20 bg-[#009ADE] rounded-3xl flex items-center justify-center text-white mb-10 group-hover:bg-[#FFDB58] group-hover:text-[#0089D0] transition-all duration-500 shadow-lg">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                </div>

                {/* Title - Unicef Blue */}
                <h3 className="text-2xl font-black mb-4 text-[#0089D0] leading-tight">
                  {s.title}
                </h3>

                {/* Description - Dark Blue Tint (No Gray) */}
                <p className="text-[#001F3F] opacity-70 leading-relaxed mb-8 font-medium">
                  {s.desc}
                </p>

                {/* Mustard Yellow Accent Bar */}
                <div className="flex items-center space-x-3">
                    <div className="h-2 w-12 bg-[#FFDB58] rounded-full group-hover:w-24 transition-all duration-500"></div>
                    <div className="h-2 w-2 bg-[#009ADE] rounded-full group-hover:animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;