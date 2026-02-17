
import React, { useState, useEffect } from 'react';
import {MessageCircle,} from 'lucide-react';
import Hero from '../components/Hero';
import DonationStrip from '../components/DonationStrip';
import { Page } from '../App';
import { 
  ArrowRight, CheckCircle, Database, Users, Target, Layout, 
  Share2, Monitor, Trophy, Mail, Phone, MapPin, ArrowLeft,
  Briefcase, BarChart3, Star
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: Page, id?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  const teamMembers = [
    {
      name: "Amal M.",
      role: "Head, Campaign Strategy & Management",
      img: "./public/img1.png",
      bio: "Served as a Public Policy Consultant with the Government of Uttar Pradesh under initiatives of the Ministry of Rural Development, Government of India. He has led award-winning governance and development projects and headed international research assignments for organisations such as WHO and UNESCAP. With experience as a Campaign Manager in the 2019 Delhi Assembly Elections, 2021 Kerala Assembly Elections, and 2024 Lok Sabha Elections, he brings strong electoral and strategic expertise. He holds a Master’s degree from the University of Delhi."
    },
    {
      name: "Mukesh Chauhan",
      role: "Head, Social Research",
      img: "./public/img2.png",
      bio: "A Research Coordinator for the United Nations in Uttar Pradesh, India. He has extensive experience in managing and coordinating multi-stakeholder research projects across social and development sectors. His work involves field study design, data collection supervision, and stakeholder engagement, providing strong insights into grassroots socio-economic dynamics. Within the team, he leads social research, community behaviour analysis, and ground intelligence inputs for electoral strategy."
    },
    {
      name: "Leela K.",
      role: "Political Consultant",
      img: "./public/img3.png",
      bio: "A Public Policy Consultant with the Government of Uttar Pradesh, supporting initiatives aligned with the Ministry of Rural Development, Government of India. She brings experience working with the Government of Kerala through institutions such as the Kerala Institute of Local Administration (KILA) and the Kerala Youth Leadership Academy. She holds an M.A. in English Literature, an LL.B., and specialised training in public policy and governance, along with academic exposure from Durham University, UK."
    },
    {
      name: "Krishna Prasad",
      role: "Content Strategist",
      img: "./public/img4.png",
      bio: "A Content Strategist and Writer with experience across both product-based and service-based organisations, specialising in advertising, marketing, and digital communication. He has worked in startups and a leading Edtech firm, handling roles such as SEO Writer, Content Analyst, and Content Editor, with a strong track record in creating high-impact, conversion-focused content. He also brings direct electoral experience, having led communication and campaign content for the 2021 Kerala Assembly Elections."
    }
  ];

  const services = [
    { title: "Research & Data Analytics", icon: <Database />, desc: "Transforming raw data into actionable political intelligence through advanced modeling." },
    { title: "Constituency & Candidate Profiling", icon: <Users />, desc: "Deep demographic analysis and perception mapping for targeted outreach." },
    { title: "Strategy & Narrative Building", icon: <Target />, desc: "Crafting powerful, data-backed narratives that resonate with local realities." },
    { title: "Booth Management System", icon: <Layout />, desc: "Precision logistics and real-time monitoring at the granular booth level." },
    { title: "Online & Offline Campaign Management", icon: <Share2 />, desc: "Seamlessly integrated digital presence and grassroots mobilization." },
    { title: "Digital War Room Coordination", icon: <Monitor />, desc: "Real-time response infrastructure for rapid strategic pivots." }
  ];

  const campaigns = [
    { year: "2018", name: "Karnataka Assembly Elections" },
    { year: "2019", name: "Delhi Assembly Elections" },
    { year: "2019", name: "Lok Sabha Elections" },
    { year: "2021", name: "Kerala Assembly Elections" },
    { year: "2022", name: "Uttar Pradesh Assembly Elections" },
    { year: "2024", name: "Lok Sabha Elections" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <Hero onNavigate={onNavigate} />
      
      {/* WHO WE ARE SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h4 className="text-[#009ADE] font-black uppercase tracking-[0.2em] text-xs">Who We Are</h4>
                <h2 className="text-4xl md:text-6xl font-black text-[#333333] leading-tight">
                  Grounded in Data <br/><span className="text-[#EAB308]">Driven by Results</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#009ADE] rounded-full"></div>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Insight Metrics Research is a premier political research firm with over <span className="font-bold text-[#333333]">7+ years of experience</span> in high-stakes election management. 
                  We have successfully steered <span className="font-bold text-[#333333]">50+ campaigns</span> across diverse Indian states.
                </p>
                <p className="font-medium text-[#333333] border-l-4 border-[#009ADE] pl-6 py-2 bg-slate-50">
                  Our network spans over <span className="text-[#009ADE] font-black">25,000+ researchers, stakeholders, and digital volunteers</span>, ensuring every strategic decision is backed by absolute ground reality.
                </p>
              </div>
              <div className="flex gap-12 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-black text-[#333333]">7+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#009ADE]">50+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Campaigns</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#EAB308]">25K+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Personnel</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-[#009ADE]/5 rounded-[4rem] -rotate-3"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800" 
                  alt="Team Research" 
                  className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent flex items-end p-10">
                  <p className="text-white text-xl font-bold">Leading with precision analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="py-24 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-[#009ADE] font-black uppercase tracking-[0.2em] text-xs">Strategic Governance</h4>
            <h2 className="text-4xl md:text-5xl font-black">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((s, i) => (
              <div key={i} className="group bg-white/5 p-12 rounded-[2.5rem] border border-white/10 hover:bg-white hover:text-[#333333] transition-all duration-500 hover:-translate-y-4 shadow-xl">
                <div className="w-16 h-16 bg-[#009ADE]/20 rounded-2xl flex items-center justify-center text-[#009ADE] mb-8 group-hover:bg-[#009ADE] group-hover:text-white transition-all">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-[#EAB308] transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM SLIDER - Detailed Bios */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex justify-between items-end">
             <div className="space-y-4">
               <h4 className="text-[#009ADE] font-black uppercase tracking-[0.2em] text-xs">The Advisory Board</h4>
               <h2 className="text-4xl md:text-5xl font-black text-[#333333]">Our Team</h2>
             </div>
             <div className="flex space-x-4 mb-2">
                <button 
                  onClick={() => setCurrentTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
                  className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={() => setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length)}
                  className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[#009ADE] hover:border-[#009ADE] hover:text-white transition-all"
                >
                  <ArrowRight size={24} />
                </button>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[750px] md:h-[500px]">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-700 flex flex-col md:flex-row gap-12 items-center ${
                  currentTeamSlide === i ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl relative group">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 brand-gradient text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-sm font-black uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black text-[#333333]">{member.name}</h3>
                    <p className="text-[#009ADE] text-xl font-bold italic">{member.role}</p>
                  </div>
                  <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-white relative">
                    <div className="absolute -top-6 -left-6 bg-[#EAB308] w-12 h-12 rounded-2xl flex items-center justify-center text-[#333333]">
                      <Star fill="currentColor" size={24} />
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#009ADE] first-letter:mr-3 first-letter:float-left">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Connect:</span>
                    <button className="text-gray-400 hover:text-[#009ADE] transition-colors font-bold uppercase text-xs tracking-widest underline decoration-2 underline-offset-4">LinkedIN Profile</button>
                    <button className="text-gray-400 hover:text-[#009ADE] transition-colors font-bold uppercase text-xs tracking-widest underline decoration-2 underline-offset-4">Electoral History</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Indicators */}
          <div className="flex justify-center space-x-3 mt-12 md:mt-20">
            {teamMembers.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentTeamSlide(i)}
                className={`h-2 transition-all rounded-full ${currentTeamSlide === i ? 'w-12 bg-[#009ADE]' : 'w-4 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK SECTION - ELECTION TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-[#009ADE] font-black uppercase tracking-[0.2em] text-xs">Legacy of Success</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#333333]">Our Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((camp, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-[#009ADE] hover:border-[#009ADE] transition-all duration-500 flex items-center space-x-6">
                <div className="text-3xl font-black text-[#EAB308] group-hover:text-white transition-colors">
                  {camp.year}
                </div>
                <div className="h-10 w-px bg-slate-200 group-hover:bg-white/30"></div>
                <div className="text-lg font-bold text-[#333333] group-hover:text-white transition-colors leading-tight">
                  {camp.name}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-20 text-center">
            <button className="bg-[#333333] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all shadow-xl flex items-center justify-center space-x-3 mx-auto">
              <span>View Case Studies</span>
              <ArrowRight size={20} />
            </button>
          </div> */}
        </div>
      </section>

      {/* CONTACT CTA SECTION - Updated Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#333333] rounded-[4rem] p-12 md:p-20 text-white grid md:grid-cols-2 gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#009ADE]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black">Get in <span className="text-[#009ADE]">Touch</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed">Let's discuss how data-driven realism can transform your upcoming campaign.</p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-[#009ADE]/20 rounded-2xl flex items-center justify-center text-[#009ADE]"><Mail /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">Email Us</p>
                    <p className="text-xl font-bold">insightmetrics1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-[#009ADE]/20 rounded-2xl flex items-center justify-center text-[#009ADE]"><Phone /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">Call Now</p>
                    <p className="text-xl font-bold">+91 89433 23509 <br/> +91 99979 19080</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/10 relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" className="bg-transparent border-b border-white/20 pb-4 focus:border-[#009ADE] outline-none text-white font-medium" />
                  <input type="tel" placeholder="Phone" className="bg-transparent border-b border-white/20 pb-4 focus:border-[#009ADE] outline-none text-white font-medium" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-[#009ADE] outline-none text-white font-medium" />
                <textarea placeholder="Your Message" rows={3} className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-[#009ADE] outline-none text-white font-medium" />
                <button className="w-full bg-[#009ADE] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#007bb3] transition-all shadow-xl">
                  Send Briefing Request
                </button>
              </form>
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

      <DonationStrip />
    </div>
  );
};

export default HomeView;
