
import React, { useState, useEffect } from 'react';
import { Target, Eye, Quote, History, Database, BarChart3, ShieldCheck, Users, ArrowLeft, ArrowRight, Star, ExternalLink, Mail } from 'lucide-react';
import {MessageCircle,} from 'lucide-react';

const AboutView: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamMembers = [
    {
      name: "Amal M.",
      role: "Head, Campaign Strategy & Management",
      img: "./public/img1.png",
      bio: "Amal M. served as a Public Policy Consultant with the Government of Uttar Pradesh under initiatives aligned with the Ministry of Rural Development, Government of India. He has led several award-winning projects in the governance and development sectors and headed international research assignments for organisations such as the WHO and UNESCAP. With direct experience as a Campaign Manager in the 2019 Delhi Assembly Elections, 2021 Kerala Assembly Elections, and 2024 Lok Sabha Elections, he brings strong electoral and strategic expertise. He holds a Master’s degree from the University of Delhi."
    },
    {
      name: "Mukesh Chauhan",
      role: "Head, Social Research",
      img: "./public/img2.png",
      bio: "Mukesh Chauhan is a Research Coordinator for the United Nations in Uttar Pradesh, India. He has extensive experience in managing and coordinating multi-stakeholder research projects across social and development sectors. His work involves field study design, data collection supervision, and stakeholder engagement, providing strong insights into grassroots socio-economic dynamics. Within the team, he leads social research, community behaviour analysis, and ground intelligence inputs for electoral strategy."
    },
    {
      name: "Leela K.",
      role: "Political Consultant",
      img: "./public/img3.png",
      bio: "Leela K. is a Public Policy Consultant with the Government of Uttar Pradesh, supporting initiatives aligned with the Ministry of Rural Development, Government of India. She brings experience working with the Government of Kerala through institutions such as the Kerala Institute of Local Administration (KILA) and the Kerala Youth Leadership Academy. She holds an M.A. in English Literature, an LL.B., and specialised training in public policy and governance, along with academic exposure from Durham University, UK. She is a core member leading field research, constituency diagnostics, and strategy planning."
    },
    {
      name: "Krishna Prasad",
      role: "Content Strategist",
      img: "./public/img4.png",
      bio: "Krishna Prasad is a Content Strategist and Writer with experience across both product-based and service-based organisations, specialising in advertising, marketing, and digital communication. He has worked in startups and a leading Edtech firm, handling roles such as SEO Writer, Content Analyst, and Content Editor, with a strong track record in creating high-impact, conversion-focused content. He also brings direct electoral experience, having led communication and campaign content for the 2021 Kerala Assembly Elections and 2020 Local Body Elections. Within the team, he leads content strategy, campaign messaging, and digital communication planning."
    }
  ];

  const electoralHistory = [
    { year: '2018', event: 'Karnataka Assembly Elections', detail: 'Grassroots diagnostics and voter sentiment analysis.' },
    { year: '2019', event: 'Delhi Assembly Elections', detail: 'Strategic coordination and social media narrative building.' },
    { year: '2019', event: 'Lok Sabha Elections', detail: 'National level campaign diagnostics and constituency profiling.' },
    { year: '2021', event: 'Kerala Assembly Elections', detail: 'Comprehensive booth-level management and digital war room ops.' },
    { year: '2022', event: 'Uttar Pradesh Assembly Elections', detail: 'Mass-scale policy research and social development auditing.' },
    { year: '2024', event: 'Lok Sabha Elections', detail: 'Data-driven precision strategy for multi-state campaign management.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % teamMembers.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  return (
    <div className="animate-in fade-in duration-700 pb-24 bg-white">
      {/* Page Header */}
      <div className="bg-[#333333] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#009ADE]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h4 className="text-[#EAB308] font-black uppercase tracking-[0.4em] text-xs mb-4">Integrity in Intelligence</h4>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">About Our <span className="text-[#009ADE]">Journey</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium italic">
            "Providing precision leadership for the modern political landscape through data-driven realism."
          </p>
        </div>
      </div>

      {/* Company History / Background */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h4 className="text-[#009ADE] font-black uppercase tracking-widest text-xs">Our Background</h4>
                <h2 className="text-4xl md:text-6xl font-black text-[#333333] leading-tight">Grounded in <span className="text-[#EAB308]">Science</span>, Rooted in Reality</h2>
                <div className="w-24 h-2 bg-[#009ADE] rounded-full"></div>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Insight Metrics Research is more than a consultancy; we are an intelligence hub for modern leaders. With over <span className="font-bold text-[#333333]">7+ years of dedicated service</span>, our team has pioneered the use of predictive analytics in Indian politics.
                </p>
                <div className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAB308]/5 rounded-full -mr-16 -mt-16"></div>
                   <p className="text-[#333333] font-semibold text-xl leading-relaxed">
                    Our impact is felt through <span className="text-[#009ADE] font-black">50+ successfully managed campaigns</span> and a network of <span className="text-[#009ADE] font-black">25,000+ researchers</span> and volunteers working around the clock.
                   </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-8 bg-slate-100 rounded-[5rem] rotate-2 transition-transform group-hover:rotate-0 duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
                alt="Strategic Hub" 
                className="relative z-10 rounded-[4rem] shadow-2xl border-[12px] border-white w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Fixed Card Colors to prevent section background blending */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-white p-16 rounded-[4rem] border border-slate-200 shadow-xl hover:border-[#009ADE] hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-[#333333] rounded-3xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                  <Eye size={40} />
                </div>
                <h3 className="text-4xl font-black text-[#333333] mb-6">Our Vision</h3>
                <p className="text-gray-500 text-xl leading-relaxed font-medium group-hover:text-[#333333] transition-colors">
                  To institutionalize data-driven governance across India, ensuring that political narratives are built on the foundations of empirical truth and socio-economic progress.
                </p>
             </div>
             <div className="bg-white p-16 rounded-[4rem] border border-slate-200 shadow-xl hover:border-[#EAB308] hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-[#009ADE] rounded-3xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                  <Target size={40} />
                </div>
                <h3 className="text-4xl font-black text-[#333333] mb-6">Our Mission</h3>
                <p className="text-gray-500 text-xl leading-relaxed font-medium group-hover:text-[#333333] transition-colors">
                  To provide candidates and organizations with high-trust metrics, confidential strategic advice, and the precision logistics required to achieve electoral and administrative success.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP AUTO-SLIDER (THE TEAM) */}
      {/* <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-xs">The Advisory Board</h4>
            <h2 className="text-4xl md:text-7xl font-black text-[#333333]">Leadership <span className="text-[#009ADE]">Insights</span></h2>
            <div className="w-32 h-2 bg-[#EAB308] rounded-full"></div>
          </div>
          <div className="flex space-x-4">
             <button 
               onClick={() => setActiveSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
               className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all shadow-sm"
             >
               <ArrowLeft size={28} />
             </button>
             <button 
               onClick={() => setActiveSlide((prev) => (prev + 1) % teamMembers.length)}
               className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all shadow-sm"
             >
               <ArrowRight size={28} />
             </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[850px] md:h-[600px]">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row gap-16 items-center ${
                  activeSlide === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24 pointer-events-none'
                }`}
              >
                <div className="w-full md:w-2/5 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group relative">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 to-transparent"></div>
                   <div className="absolute bottom-12 left-12">
                     <p className="text-[#EAB308] font-black uppercase tracking-widest text-xs mb-2">Member of Board</p>
                     <h4 className="text-white text-3xl font-black">{member.name}</h4>
                   </div>
                </div>
                <div className="w-full md:w-3/5 space-y-10">
                   <div className="space-y-4">
                      <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 px-4 py-2 rounded-full">
                        <Star className="text-[#009ADE]" size={16} fill="currentColor" />
                        <span className="text-[#009ADE] font-black text-xs uppercase tracking-widest">Expert Consultant</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-[#333333]">{member.name}</h3>
                      <p className="text-[#009ADE] text-xl font-bold italic">{member.role}</p>
                   </div>
                   <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border-l-[12px] border-[#EAB308] relative">
                      <Quote className="absolute top-8 right-10 text-slate-100" size={80} />
                      <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                        {member.bio}
                      </p>
                   </div>
                   <div className="flex gap-6">
                      <button className="flex items-center space-x-2 text-[#333333] font-black uppercase text-xs tracking-widest hover:text-[#009ADE] transition-colors">
                        <ExternalLink size={18} />
                        <span>Professional Dossier</span>
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-3">
             {teamMembers.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setActiveSlide(i)}
                 className={`h-2 transition-all duration-500 rounded-full ${activeSlide === i ? 'w-16 bg-[#009ADE]' : 'w-4 bg-gray-300'}`}
               />
             ))}
          </div>
        </div>
      </section> */}

      {/* LEADERSHIP AUTO-SLIDER (THE TEAM) */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
    <div className="space-y-4">
      <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-xs">The Advisory Board</h4>
      <h2 className="text-4xl md:text-7xl font-black text-[#333333]">
        Leadership <span className="text-[#009ADE]">Insights</span>
      </h2>
      <div className="w-32 h-2 bg-[#EAB308] rounded-full"></div>
    </div>

    <div className="flex space-x-4">
      <button
        onClick={() => setActiveSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all shadow-sm"
      >
        <ArrowLeft size={26} />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % teamMembers.length)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all shadow-sm"
      >
        <ArrowRight size={26} />
      </button>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4">

    {/* HEIGHT FIXED HERE */}
    <div className="relative min-h-[980px] md:min-h-[620px]">

      {teamMembers.map((member, i) => (
        <div
          key={i}
          className={`transition-all duration-700 flex flex-col md:flex-row gap-10 md:gap-16 items-center
          ${activeSlide === i ? "relative opacity-100 translate-x-0" : "absolute inset-0 opacity-0 translate-x-24 pointer-events-none"}
          `}
        >

          {/* IMAGE FIX */}
          <div className="w-full md:w-2/5 h-[420px] sm:h-[520px] md:h-auto aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group relative">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 to-transparent"></div>

            <div className="absolute bottom-8 left-8">
              <p className="text-[#EAB308] font-black uppercase tracking-widest text-xs mb-1">
                Member of Board
              </p>
              <h4 className="text-white text-2xl md:text-3xl font-black">
                {member.name}
              </h4>
            </div>
          </div>

          {/* TEXT FIX */}
          <div className="w-full md:w-3/5 space-y-8">

            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 px-4 py-2 rounded-full">
                <Star className="text-[#009ADE]" size={16} fill="currentColor" />
                <span className="text-[#009ADE] font-black text-xs uppercase tracking-widest">
                  Expert Consultant
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-[#333333]">
                {member.name}
              </h3>

              <p className="text-[#009ADE] text-lg md:text-xl font-bold italic">
                {member.role}
              </p>
            </div>

            <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border-l-[10px] border-[#EAB308] relative">
              <Quote className="absolute top-6 right-6 text-slate-100" size={60} />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10">
                {member.bio}
              </p>
            </div>

            <button className="flex items-center space-x-2 text-[#333333] font-black uppercase text-xs tracking-widest hover:text-[#009ADE] transition-colors">
              <ExternalLink size={18} />
              <span>Professional Dossier</span>
            </button>

          </div>

        </div>
      ))}

    </div>

    {/* DOTS */}
    <div className="flex justify-center mt-12 space-x-3">
      {teamMembers.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveSlide(i)}
          className={`h-2 transition-all duration-500 rounded-full ${
            activeSlide === i ? "w-16 bg-[#009ADE]" : "w-4 bg-gray-300"
          }`}
        />
      ))}
    </div>

  </div>
</section>


      {/* OUR WORK - ELECTION HISTORY TIMELINE - Reduced spacing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-xs">Electoral Track Record</h4>
            <h2 className="text-5xl md:text-6xl font-black text-[#333333]">Our Success Timeline</h2>
            <div className="w-32 h-2 bg-[#EAB308] rounded-full mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 hidden md:block"></div>

            {/* Reduced vertical gaps from md:space-y-32 to md:space-y-12 */}
            <div className="space-y-12 md:space-y-12">
              {electoralHistory.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-8 relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Card Content */}
                  <div className="w-full md:w-[45%] animate-fade-up">
                    <div className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 hover:bg-[#009ADE] hover:border-[#009ADE] transition-all duration-500 shadow-lg hover:shadow-2xl">
                       <div className="flex items-center justify-between mb-4">
                         <span className="text-4xl font-black text-[#EAB308] group-hover:text-white transition-colors">{item.year}</span>
                         <BarChart3 className="text-[#009ADE] group-hover:text-white/40" size={32} />
                       </div>
                       <h3 className="text-2xl font-black text-[#333333] group-hover:text-white mb-2 transition-colors leading-tight">
                         {item.event}
                       </h3>
                       <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-sm">
                         {item.detail}
                       </p>
                    </div>
                  </div>

                  {/* Marker Pin */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-[#009ADE] rounded-full items-center justify-center z-20 shadow-xl group cursor-help transition-transform hover:scale-125">
                    <div className="w-4 h-4 bg-[#EAB308] rounded-full"></div>
                  </div>

                  <div className="hidden md:block w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#333333] rounded-[4rem] p-16 md:p-24 text-white flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
             <div className="relative z-10 space-y-6 text-center md:text-left">
               <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">Ready to <span className="text-[#009ADE]">Win</span>?</h2>
               <p className="text-gray-400 text-2xl font-medium max-w-xl">Consult our leadership team for a data-driven strategy tailored to your constituency.</p>
             </div>
             <div className="relative z-10 shrink-0">
               <a href="mailto:insightmetrics1@gmail.com" className="bg-[#009ADE] text-white px-16 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-110 hover:bg-white hover:text-[#333333] transition-all flex items-center gap-4">
                 <Mail size={24} />
                 <span>Get Briefed</span>
               </a>
             </div>
          </div>

          <a 
                  href="https://wa.me/918943323509" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fixed bottom-10 right-10 z-[500] group flex items-center"
                >
                  <div className="bg-white px-6 py-3 rounded-full shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 hidden md:block">
                    <p className="text-[#25D366] font-black text-sm whitespace-nowrap uppercase tracking-widest">Chat with Strategist</p>
                  </div>
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform animate-bounce hover:animate-none">
                    <MessageCircle size={32} fill="currentColor" />
                  </div>
                </a>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
