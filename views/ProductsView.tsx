
// import React from 'react';
// import { Page } from '../App';
// import { ShoppingBag, Star } from 'lucide-react';

// interface Props {
//   onNavigate: (page: Page, id?: string) => void;
// }

// const ProductsView: React.FC<Props> = ({ onNavigate }) => {
//   const products = [
//     { id: '1', name: 'Smart Meter Pro', price: '₹4,500', img: 'https://images.unsplash.com/photo-1558485081-10aa048799bf?q=80&w=400' },
//     { id: '2', name: 'Citizen App Hub', price: 'Free', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400' },
//     { id: '3', name: 'Agri-Sensor Kit', price: '₹12,000', img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=400' },
//     { id: '4', name: 'Waste IQ Bin', price: '₹8,900', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400' },
//   ];

//   return (
//     <div className="animate-in fade-in duration-500 pb-24">
//       <div className="bg-orange-600 py-24 text-white text-center">
//         <h1 className="text-5xl font-black mb-4">Product Catalog</h1>
//         <p className="text-xl opacity-90">Innovative tools built for a smarter community.</p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 mt-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map(p => (
//             <div key={p.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all flex flex-col">
//               <img src={p.img} alt={p.name} className="h-60 w-full object-cover" />
//               <div className="p-8 flex-grow space-y-4">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-xl font-bold text-[#0B1C3F]">{p.name}</h3>
//                   <div className="flex items-center text-orange-500 font-bold text-xs">
//                     <Star size={12} fill="currentColor" />
//                     <span>4.9</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-400 text-sm">Industrial grade hardware designed for long-term regional deployment.</p>
//                 <div className="flex justify-between items-center pt-4 border-t border-gray-50">
//                   <span className="text-2xl font-black text-[#0B1C3F]">{p.price}</span>
//                   <button 
//                     onClick={() => onNavigate('product-detail', p.id)}
//                     className="p-3 bg-slate-100 rounded-xl hover:bg-[#FF6A00] hover:text-white transition-colors"
//                   >
//                     <ShoppingBag size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsView;



// import React from 'react';
// import { Page } from '../App';
// import { ChevronRight } from 'lucide-react';

// interface Props {
//   onNavigate: (page: Page, id?: string) => void;
// }

// const ProductsView: React.FC<Props> = ({ onNavigate }) => {
//   const products = [
//     { 
//       id: '1', 
//       name: 'RAJYOG Voterlist', 
//       desc: "Introduced our cutting-edge Election Management Software Solution 14 years ago. Designed to streamline and automate the entire election process on ground, this software guarantees seamless analysis of voter lists.",
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     },
//     { 
//       id: '2', 
//       name: 'Last Day Booth Management System', 
//       desc: 'An essential tool for political campaigns. This user-friendly platform combines a mobile app and an online web dashboard, enabling seamless management of polling booths with real-time updates.',
//       bgColor: 'bg-[#0089D0]', // Unicef Blue
//       textColor: 'text-white'
//     },
//     { 
//       id: '3', 
//       name: 'Online Voter Connect', 
//       desc: 'An innovative service designed to bridge the gap between election candidates and local voters. This home-to-home connection initiative ensures meaningful conversations about vision and policies.',
//       bgColor: 'bg-[#FFDB58]', // Mustard Yellow
//       textColor: 'text-[#333333]'
//     },
//     { 
//       id: '4', 
//       name: 'Digital Ballot Machine', 
//       desc: 'Designed to enhance voter awareness and engagement. Compliant with Election Commission of India standards, this tool provides a user-friendly experience for voters to understand the process.',
//       bgColor: 'bg-[#0089D0]', // Unicef Blue
//       textColor: 'text-white'
//     },
//     { 
//       id: '5', 
//       name: 'Jan Spandan', 
//       desc: 'A cutting-edge Election Management Software for candidates. Our mobile app ensures seamless communication with supporters and volunteers with decentralized branding.',
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     },
//     { 
//       id: '6', 
//       name: 'Political Consultation', 
//       desc: 'Unlock the power of effective election campaigning. Specializing in ground and field work strategies, focusing on connecting with local voters through personalized interactions.',
//       bgColor: 'bg-[#FFDB58]', // Mustard Yellow
//       textColor: 'text-[#333333]'
//     },
//     { 
//       id: '7', 
//       name: 'Rajyog AI', 
//       desc: 'Innovative campaign management software to connect with voters emotionally using AI-driven personalized videos featuring the voter\'s name.',
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     }
//   ];

//   return (
//     <div className="bg-[#F4F7F9] min-h-screen pb-24 font-sans">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
//         <p className="text-[#0089D0] font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Products</p>
//         <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-12 max-w-4xl mx-auto leading-tight">
//           Transforming Vision Into a Winning Political Movement
//         </h1>

//         {/* Hero Banner Card - Updated to Unicef Blue */}
//         <div className="bg-[#0089D0] rounded-[3rem] p-12 md:p-20 text-left text-white mb-16 shadow-2xl relative overflow-hidden">
//             <div className="relative z-10">
//                 <h2 className="text-4xl md:text-6xl font-black mb-6">Political Solutions</h2>
//                 <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium">Empowering leaders with data-driven strategies and innovative ground-level technology.</p>
//             </div>
//             {/* Subtle background decoration */}
//             <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white opacity-10 rounded-full"></div>
//         </div>
//       </div>

//       {/* Products Grid - Fixed 3 Cards per Row */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((p) => (
//             <div 
//               key={p.id}
//               onClick={() => onNavigate('product-detail', p.id)}
//               className={`${p.bgColor} ${p.textColor} rounded-[2.5rem] p-10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[350px]`}
//             >
//               <h3 className="text-2xl font-black mb-6 leading-tight">{p.name}</h3>
//               <p className="text-sm leading-relaxed mb-8 opacity-85 font-medium">
//                 {p.desc}
//               </p>
//               <div className="mt-auto flex items-center font-bold text-sm uppercase tracking-wider">
//                 {/* <span>Explore Details</span> */}
//                 {/* <ChevronRight size={18} className="ml-2" /> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsView;



// import React from 'react';
// import { Page } from '../App';

// interface Props {
//   onNavigate: (page: Page, id?: string) => void;
// }

// const ProductsView: React.FC<Props> = () => {
//   const products = [
//     { 
//       id: '1', 
//       name: 'RAJYOG Voterlist', 
//       desc: "Introduced our cutting-edge Election Management Software Solution 14 years ago. Designed to streamline and automate the entire election process on ground, this software guarantees seamless analysis of voter lists.",
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     },
//     { 
//       id: '2', 
//       name: 'Last Day Booth Management System', 
//       desc: 'An essential tool for political campaigns. This user-friendly platform combines a mobile app and an online web dashboard, enabling seamless management of polling booths with real-time updates.',
//       bgColor: 'bg-[#0089D0]', // Unicef Blue
//       textColor: 'text-white'
//     },
//     { 
//       id: '3', 
//       name: 'Online Voter Connect', 
//       desc: 'An innovative service designed to bridge the gap between election candidates and local voters. This home-to-home connection initiative ensures meaningful conversations about vision and policies.',
//       bgColor: 'bg-[#FFDB58]', // Mustard Yellow
//       textColor: 'text-[#333333]'
//     },
//     { 
//       id: '4', 
//       name: 'Digital Ballot Machine', 
//       desc: 'Designed to enhance voter awareness and engagement. Compliant with Election Commission of India standards, this tool provides a user-friendly experience for voters to understand the process.',
//       bgColor: 'bg-[#0089D0]', // Unicef Blue
//       textColor: 'text-white'
//     },
//     { 
//       id: '5', 
//       name: 'Jan Spandan', 
//       desc: 'A cutting-edge Election Management Software for candidates. Our mobile app ensures seamless communication with supporters and volunteers with decentralized branding.',
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     },
//     { 
//       id: '6', 
//       name: 'Political Consultation', 
//       desc: 'Unlock the power of effective election campaigning. Specializing in ground and field work strategies, focusing on connecting with local voters through personalized interactions.',
//       bgColor: 'bg-[#FFDB58]', // Mustard Yellow
//       textColor: 'text-[#333333]'
//     },
//     { 
//       id: '7', 
//       name: 'Rajyog AI', 
//       desc: 'Innovative campaign management software to connect with voters emotionally using AI-driven personalized videos featuring the voter\'s name.',
//       bgColor: 'bg-[#333333]', // Charcoal Grey
//       textColor: 'text-white'
//     }
//   ];

//   return (
//     <div className="bg-[#F4F7F9] min-h-screen pb-24 font-sans">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
//         <p className="text-[#0089D0] font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Products</p>
//         <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-12 max-w-4xl mx-auto leading-tight">
//           Transforming Vision Into a Winning Political Movement
//         </h1>

//         {/* Hero Banner Card */}
//         <div className="bg-[#0089D0] rounded-[3rem] p-12 md:p-20 text-left text-white mb-16 shadow-2xl relative overflow-hidden">
//             <div className="relative z-10">
//                 <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">Political Solutions</h2>
//                 <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium text-white">Empowering leaders with data-driven strategies and innovative ground-level technology.</p>
//             </div>
//             <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white opacity-10 rounded-full"></div>
//         </div>
//       </div>

//       {/* Products Grid - Fixed 3 Cards per Row */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((p) => (
//             <div 
//               key={p.id}
//               /* onClick removed to prevent redirection */
//               className={`${p.bgColor} ${p.textColor} rounded-[2.5rem] p-10 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[350px]`}
//             >
//               <h3 className="text-2xl font-black mb-6 leading-tight">{p.name}</h3>
//               <p className="text-sm leading-relaxed mb-8 opacity-85 font-medium">
//                 {p.desc}
//               </p>
//               {/* Footer empty to keep the same spacing/format */}
//               <div className="mt-auto h-4"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsView;


import React from 'react';
import { Page } from '../App';
import { Database, ShieldCheck, Users, Vote, Smartphone, BarChart3, Cpu } from 'lucide-react';

interface Props {
  onNavigate: (page: Page, id?: string) => void;
}

const ProductsView: React.FC<Props> = () => {
  const products = [
    { 
      id: '1', 
      name: 'Insight Metrics Voterlist', 
      desc: "Our flagship Election Management Solution. Designed to streamline and automate ground activities with seamless analysis of voter lists.",
      icon: <Database />
    },
    { 
      id: '2', 
      name: 'Booth Management', 
      desc: 'User-friendly platform combining mobile app and web dashboard for real-time polling booth management and updates.',
      icon: <ShieldCheck />
    },
    { 
      id: '3', 
      name: 'Voter Connect', 
      desc: 'Innovative service to bridge the gap between candidates and voters through meaningful home-to-home connection.',
      icon: <Users />
    },
    { 
      id: '4', 
      name: 'Digital Ballot Machine', 
      desc: 'Compliant with ECI standards, this tool enhances voter awareness and provides a hands-on voting experience.',
      icon: <Vote />
    },
    { 
      id: '5', 
      name: 'Jan Spandan App', 
      desc: 'Cutting-edge software for supporters and volunteers with decentralized branding and seamless communication.',
      icon: <Smartphone />
    },
    { 
      id: '6', 
      name: 'Political Analysis', 
      desc: 'Deep-dive ground and field work strategies focusing on data-driven voter insights and personalized interactions.',
      icon: <BarChart3 />
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-sans animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-[#009ADE] font-black uppercase tracking-[0.3em] text-sm mb-4">Innovative Tools</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0089D0] mb-8 max-w-4xl mx-auto leading-tight">
          
          Transforming Vision Into a Winning <br /> <br /> Political Movement
        </h1>
        <div className="w-24 h-2 bg-[#FFDB58] mx-auto rounded-full mb-16"></div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.id}
              className="group bg-white p-10 rounded-[3rem] border-2 border-[#009ADE]/10 hover:border-[#009ADE] transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-[#009ADE]/10 cursor-default flex flex-col min-h-[400px]"
            >
              {/* Icon Container - Unicef Blue branding */}
              <div className="w-20 h-20 bg-[#009ADE] rounded-3xl flex items-center justify-center text-white mb-8 group-hover:bg-[#FFDB58] group-hover:text-[#0089D0] transition-all duration-500 shadow-lg">
                {React.cloneElement(p.icon as React.ReactElement<any>, { size: 36 })}
              </div>

              {/* Product Name */}
              <h3 className="text-2xl font-black mb-4 text-[#0089D0] leading-tight">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-[#001F3F] opacity-70 leading-relaxed mb-8 font-medium">
                {p.desc}
              </p>

              {/* Bottom Decorative Line - Mustard Yellow */}
              <div className="mt-auto flex items-center space-x-3">
                <div className="h-2 w-12 bg-[#FFDB58] rounded-full group-hover:w-24 transition-all duration-500"></div>
                <div className="h-2 w-2 bg-[#009ADE] rounded-full group-hover:animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsView;