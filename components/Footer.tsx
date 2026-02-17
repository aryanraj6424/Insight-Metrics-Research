
// import React from 'react';
// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Search, BookOpen } from 'lucide-react';
// import { Page } from '../App';

// interface FooterProps {
//   onNavigate: (page: Page) => void;
// }

// const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
//   return (
//     <footer className="bg-[#333333] pt-24 pb-12 text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
//           <div className="space-y-8">
//             {/* BRAND LOGO - Fixed Overflow */}
//             <div 
//               className="flex items-center space-x-4 cursor-pointer group" 
//               onClick={() => onNavigate('home')}
//             >
//               <div className="w-12 h-12 bg-[#009ADE] rounded-xl flex items-center justify-center text-white relative shrink-0 shadow-lg">
//                  <BookOpen size={24} className="absolute" />
//                  <Search size={12} className="absolute mt-1" strokeWidth={3} />
//               </div>
//               <div className="flex flex-col leading-none min-w-max">
//                 <span className="text-xl font-black tracking-tighter whitespace-nowrap uppercase">INSIGHT</span>
//                 <span className="text-xl font-black tracking-tighter whitespace-nowrap uppercase text-[#009ADE]">METRICS</span>
//               </div>
//             </div>
            
//             <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
//               "Grounded in Data, Rooted in Political Realism." Providing precision leadership 
//               and data-driven development strategies for the modern age.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Twitter, Instagram].map((Icon, i) => (
//                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#009ADE] transition-all hover:-translate-y-1">
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-8">
//             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Navigation</h4>
//             <ul className="grid grid-cols-1 gap-y-4 text-gray-400 font-bold text-xs uppercase">
//               <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Home</button></li>
//               <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">About Us</button></li>
//               <li><button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors text-left">Gallery</button></li>
//               <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
//             </ul>
//           </div>

//           <div className="space-y-8">
//             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Official Contact</h4>
//             <ul className="space-y-6 text-gray-400 font-bold text-xs uppercase">
//               <li className="flex flex-col space-y-2">
//                 <div className="flex items-center space-x-3">
//                   <Phone size={18} className="text-[#EAB308]" />
//                   <span>+91 89433 23509</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone size={18} className="text-[#EAB308]" />
//                   <span>+91 99979 19080</span>
//                 </div>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail size={18} className="text-[#EAB308]" />
//                 <span className="lowercase">insightmetrics1@gmail.com</span>
//               </li>
//               <li className="flex items-start space-x-3 leading-relaxed">
//                 <MapPin size={18} className="text-[#EAB308] shrink-0" />
//                 <span>Sector 12, Hubli-Dharwad Twin City, Karnataka, India.</span>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-8">
//             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Intelligence Hub</h4>
//             <p className="text-gray-400 text-xs font-bold leading-relaxed">Stay updated with our latest data releases and policy insights.</p>
//             <div className="flex p-2 bg-white/5 rounded-2xl border border-white/10">
//               <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 text-sm flex-grow px-2 outline-none" />
//               <button className="bg-[#009ADE] px-4 py-2 rounded-xl text-xs font-black hover:bg-[#007bb3] transition-colors">JOIN</button>
//             </div>
//           </div>
//         </div>

//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-black uppercase tracking-widest">
//           <p>© 2025 INSIGHT METRICS RESEARCH. ALL RIGHTS RESERVED.</p>
//           <div className="flex space-x-8 mt-4 md:mt-0">
//             <button className="hover:text-white transition-colors">Privacy Policy</button>
//             <button className="hover:text-white transition-colors">Terms of Service</button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#333333] pt-24 pb-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* ✅ BRAND WITH MANUAL LOGO */}
          <div className="space-y-8">

            <div
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              {/* CHANGE THIS PATH */}
              <img
                src="/public/logo1.png"
                alt="Insight Metrics Research"
                className="h-14 w-auto object-contain "
              />

              <div className="flex flex-col leading-none min-w-max">
                <span className="text-xl font-black tracking-tighter whitespace-nowrap uppercase">
                  INSIGHT
                </span>
                <span className="text-xl font-black tracking-tighter whitespace-nowrap uppercase text-[#009ADE]">
                  METRICS
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              "Grounded in Data, Rooted in Political Realism." Providing precision leadership 
              and data-driven development strategies for the modern age.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#009ADE] transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

          </div>

          {/* NAVIGATION */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Navigation</h4>
            <ul className="grid grid-cols-1 gap-y-4 text-gray-400 font-bold text-xs uppercase">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors text-left">Gallery</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Official Contact</h4>
            <ul className="space-y-6 text-gray-400 font-bold text-xs uppercase">

              <li className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#EAB308]" />
                  <span>+91 89433 23509</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#EAB308]" />
                  <span>+91 99979 19080</span>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#EAB308]" />
                <span className="lowercase">insightmetrics1@gmail.com</span>
              </li>

              <li className="flex items-start space-x-3 leading-relaxed">
                <MapPin size={18} className="text-[#EAB308] shrink-0" />
                <span>Sector 12, Hubli-Dharwad Twin City, Karnataka, India.</span>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#009ADE]">Intelligence Hub</h4>
            <p className="text-gray-400 text-xs font-bold leading-relaxed">
              Stay updated with our latest data releases and policy insights.
            </p>

            <div className="flex p-2 bg-white/5 rounded-2xl border border-white/10">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none focus:ring-0 text-sm flex-grow px-2 outline-none"
              />
              <button className="bg-[#009ADE] px-4 py-2 rounded-xl text-xs font-black hover:bg-[#007bb3] transition-colors">
                JOIN
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-black uppercase tracking-widest">
          <p>© 2025 INSIGHT METRICS RESEARCH. ALL RIGHTS RESERVED.</p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
