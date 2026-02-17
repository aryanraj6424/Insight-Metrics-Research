
import React from 'react';
import { BookOpen, Briefcase, HeartPulse, Building2, Zap, Globe } from 'lucide-react';

const Vision: React.FC = () => {
  const visions = [
    {
      title: 'Evidence-Based Learning',
      desc: 'Integrating data science and digital analytics into school curricula for the future workforce.',
      icon: <BookOpen />,
    },
    {
      title: 'Economic Insight',
      desc: 'Using market research to identify and boost high-growth sectors in our local economy.',
      icon: <Briefcase />,
    },
    {
      title: 'Precision Healthcare',
      desc: 'Deploying health metrics systems to ensure preventive care is accessible to every doorstep.',
      icon: <HeartPulse />,
    },
    {
      title: 'Smart Infrastructure',
      desc: 'Building sensor-enabled roads and public systems for efficient energy and traffic management.',
      icon: <Building2 />,
    },
    {
      title: 'Sustainable Analytics',
      desc: 'Monitoring environmental impact in real-time to maintain our region\'s natural beauty.',
      icon: <Zap />,
    },
    {
      title: 'Transparent Governance',
      desc: 'A public dashboard for all regional spending and development milestones.',
      icon: <Globe />,
    },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h4 className="text-[#00B4B4] font-bold tracking-widest uppercase">The Research Roadmap</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C3F]">Our Vision for Progress</h2>
          <p className="text-lg text-gray-600">
            A research-first approach to solving community challenges with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visions.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-lg border border-transparent hover:border-[#00B4B4]/20 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1C3F] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <button className="mt-6 text-[#00B4B4] font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Explore Research</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;