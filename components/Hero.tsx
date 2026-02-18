
// import React from 'react';
// import { ArrowRight, CheckCircle, Database, ShieldCheck, BarChart3, Search } from 'lucide-react';
// import { Page } from '../App';

// interface HeroProps {
//   onNavigate: (page: Page) => void;
// }

// const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
//   return (
//     <div className="relative min-h-[90vh] flex items-center bg-[#333333] overflow-hidden">
//       {/* Background with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920" 
//           alt="Data Research and Strategy" 
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/80 to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-10">
//         <div className="text-white space-y-8 animate-[fadeIn_1s_ease-out]">
//           <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 backdrop-blur-md px-4 py-2 rounded-full text-[#009ADE] font-semibold border border-[#009ADE]/20">
//             <Database size={18} />
//             <span className="text-sm tracking-wide uppercase font-black">Insight Metrics Research</span>
//           </div>
          
//           <div className="space-y-4">
//             <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
//               Grounded in <span className="text-[#009ADE]">Data</span>,<br />
//               <span className="text-[#EAB308]">Rooted</span> in Realism
//             </h1>
//             <p className="text-xl text-gray-400 font-medium italic">
//               "Providing precision leadership for the modern political landscape."
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" />
//               <span>Political Research</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" />
//               <span>Governance Strategy</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" />
//               <span>Policy Evaluation</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" />
//               <span>Social Development</span>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
//             <button 
//               onClick={() => onNavigate('contact')}
//               className="bg-[#009ADE] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-[#007bb3] transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
//             >
//               <span>Get Expert Advice</span>
//               <ArrowRight size={20} />
//             </button>
//             <button 
//               onClick={() => onNavigate('about')}
//               className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#333333] transition-all"
//             >
//               Our Vision
//             </button>
//           </div>
//         </div>

//         <div className="hidden md:block relative animate-[slideInRight_1s_ease-out]">
//           <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
//             <img 
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" 
//               alt="Analytical Dashboard" 
//               className="w-full h-[600px] object-cover"
//             />
//           </div>
//           {/* Decorative Experience Accent */}
//           <div className="absolute -bottom-6 -left-6 bg-[#EAB308] p-6 rounded-3xl z-20 shadow-2xl">
//             <div className="flex items-center space-x-3">
//               <div className="bg-[#333333]/20 p-3 rounded-xl">
//                 <BarChart3 className="text-[#333333]" size={24} />
//               </div>
//               <div className="text-[#333333]">
//                 <p className="text-xs font-black uppercase tracking-widest opacity-80">Proven Results</p>
//                 <p className="text-2xl font-black">50+ Campaigns</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { ArrowRight, CheckCircle, Database, BarChart3 } from 'lucide-react';
// import { Page } from '../App';

// interface HeroProps {
//   onNavigate: (page: Page) => void;
// }

// const slides = [
//   {
//     title: "Political Research & Election Campaign Management",
//     subtitle: "Providing precision leadership for the modern political landscape.",
//     image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920"
//   },
//   {
//     title: "Governance & Public Policy Research",
//     subtitle: "Evidence-based insights for smarter governance decisions.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920"
//   },
//   {
//     title: "Social & Development Sector Research",
//     subtitle: "Driving measurable impact through social intelligence.",
//     image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920"
//   },
//   {
//     title: "Monitoring & Evaluation",
//     subtitle: "Tracking performance with transparent analytics.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920"
//   }
// ];

// const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

//   const [current, setCurrent] = useState(0);

//   // AUTO SLIDE
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(prev => (prev + 1) % slides.length);
//     }, 4500);

//     return () => clearInterval(timer);
//   }, []);

//   const activeSlide = slides[current];

//   return (
//     <div className="relative min-h-[90vh] flex items-center bg-[#333333] overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0 transition-all duration-1000">
//         <img
//           src={activeSlide.image}
//           alt="Hero Background"
//           className="w-full h-full object-cover opacity-20 transition-all duration-1000"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/80 to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-10">

//         {/* LEFT TEXT */}
//         <div className="text-white space-y-8">

//           <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 backdrop-blur-md px-4 py-2 rounded-full text-[#009ADE] font-semibold border border-[#009ADE]/20">
//             <Database size={18} />
//             <span className="text-sm tracking-wide uppercase font-black">
//               Insight Metrics Research
//             </span>
//           </div>

//           <div className="space-y-4 transition-all duration-700">
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
//               {activeSlide.title}
//             </h1>

//             <p className="text-xl text-gray-400 font-medium italic">
//               {activeSlide.subtitle}
//             </p>
//           </div>

//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" />
//               {/* <span>Political Research</span> */}
//             {/* </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" /> */}
//               {/* <span>Governance Strategy</span> */}
//             {/* </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" /> */}
//               {/* <span>Policy Evaluation</span> */}
//             {/* </div>
//             <div className="flex items-center space-x-2">
//               <CheckCircle size={16} className="text-[#009ADE]" /> */}
//               {/* <span>Social Development</span> */}
//             {/* </div>
//           </div> */}

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <button
//               onClick={() => onNavigate('contact')}
//               className="bg-[#009ADE] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-[#007bb3] transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
//             >
//               <span>Get Expert Advice</span>
//               <ArrowRight size={20} />
//             </button>

//             <button
//               onClick={() => onNavigate('about')}
//               className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#333333] transition-all"
//             >
//               Our Vision
//             </button>
//           </div>

//         </div>

//         {/* RIGHT IMAGE CARD */}
//         <div className="hidden md:block relative">
//           <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
//             <img
//               src={activeSlide.image}
//               alt="Dashboard"
//               className="w-full h-[600px] object-cover transition-all duration-700"
//             />
//           </div>

//           <div className="absolute -bottom-6 -left-6 bg-[#EAB308] p-6 rounded-3xl z-20 shadow-2xl">
//             <div className="flex items-center space-x-3">
//               <div className="bg-[#333333]/20 p-3 rounded-xl">
//                 <BarChart3 className="text-[#333333]" size={24} />
//               </div>
//               <div className="text-[#333333]">
//                 <p className="text-xs font-black uppercase tracking-widest opacity-80">
//                   Proven Results
//                 </p>
//                 <p className="text-2xl font-black">50+ Campaigns</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* DOT INDICATORS */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`h-3 w-3 rounded-full transition-all duration-300 ${
//               current === i ? "bg-[#009ADE] w-8" : "bg-white/30"
//             }`}
//           />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { ArrowRight, Database } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    title: "Political Research & Election Campaign Management",
    subtitle: "Providing precision leadership for the modern political landscape.",
    image: "/bannerimg.png"
  },
  {
    title: "Governance & Public Policy Research",
    subtitle: "Evidence-based insights for smarter governance decisions.",
    image: "/bannerimg.png"
  },
  {
    title: "Social & Development Sector Research",
    subtitle: "Driving measurable impact through social intelligence.",
    image: "/bannerimg.png"
  },
  {
    title: "Monitoring & Evaluation",
    subtitle: "Tracking performance with transparent analytics.",
    image: "/bannerimg.png"
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* SINGLE BACKGROUND BANNER */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeSlide.image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* TRANSPARENT DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#333333]/65"></div>

        {/* EXTRA LEFT GRADIENT FOR TEXT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/90 via-[#333333]/60 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">

        <div className="text-white max-w-3xl space-y-8">

          <div className="inline-flex items-center space-x-2 bg-[#009ADE]/10 backdrop-blur-md px-4 py-2 rounded-full text-[#009ADE] font-semibold border border-[#009ADE]/20">
            <Database size={18} />
            <span className="text-sm tracking-wide uppercase font-black">
              Insight Metrics Research
            </span>
          </div>

          <div className="space-y-4 transition-all duration-700">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {activeSlide.title}
            </h1>

            <p className="text-xl text-gray-200 font-medium italic">
              {activeSlide.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#009ADE] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-[#007bb3] transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <span>Get Expert Advice</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#333333] transition-all"
            >
              Our Vision
            </button>
          </div>

        </div>

      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              current === i ? "bg-[#009ADE] w-8" : "bg-white/40 w-3"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
