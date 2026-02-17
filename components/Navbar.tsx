
// import React, { useState, useEffect } from 'react';
// import { Menu, X, Search, BookOpen } from 'lucide-react';
// import { Page } from '../App';

// interface NavbarProps {
//   currentPage: Page;
//   onNavigate: (page: Page, id?: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuItems: { name: string; id: Page }[] = [
//     { name: 'Home', id: 'home' },
//     { name: 'About Us', id: 'about' },
//     { name: 'Gallery', id: 'gallery' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   const handleNavClick = (page: Page) => {
//     onNavigate(page);
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed w-full z-[100] transition-all duration-500 ${
//       scrolled 
//         ? 'bg-white shadow-2xl py-2' 
//         : 'bg-white/95 backdrop-blur-md border-b border-[#00B4B4]/10 py-4'
//     }`}>
//       {/* Subtle Banner Accent Line */}
//       <div className="absolute top-0 left-0 w-full h-1 brand-gradient"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* LOGO - Left Corner */}
//           <div 
//             className="flex items-center space-x-3 cursor-pointer group shrink-0" 
//             onClick={() => handleNavClick('home')}
//           >
//             <div className="relative flex items-center justify-center">
//               <div className="w-12 h-10 flex items-center justify-center relative">
//                 <BookOpen size={42} className="text-[#00B4B4] absolute" strokeWidth={1.5} />
//                 <Search size={20} className="text-[#00B4B4] absolute mt-1" strokeWidth={3} />
//               </div>
//             </div>
//             <div className="flex flex-col -space-y-1">
//               <span className="text-lg font-black tracking-tight leading-tight text-[#0B1C3F]">
//                 INSIGHT METRICS
//               </span>
//               <span className="text-lg font-black tracking-tight leading-tight text-[#0B1C3F]">
//                 RESEARCH
//               </span>
//             </div>
//           </div>

//           {/* NAVIGATION LINKS - Spaced from logo, positioned to the right */}
//           <div className="hidden lg:flex items-center space-x-12">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`relative font-bold text-sm uppercase tracking-widest transition-all py-1 group text-[#0B1C3F] hover:text-[#00B4B4] ${
//                   currentPage === item.id ? 'text-[#00B4B4]' : ''
//                 }`}
//               >
//                 <span>{item.name}</span>
//                 <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B4B4] transition-all duration-300 group-hover:w-full ${
//                   currentPage === item.id ? 'w-full' : ''
//                 }`}></span>
//               </button>
//             ))}
//           </div>

//           {/* MOBILE TOGGLE - High contrast for visibility */}
//           <div className="lg:hidden flex items-center">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="p-2.5 rounded-xl bg-slate-100 text-[#0B1C3F] hover:bg-slate-200 transition-colors"
//               aria-label="Toggle Menu"
//             >
//               <Menu size={26} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU OVERLAY - DARK THEME (Inspired by requested image) */}
//       <div className={`lg:hidden fixed inset-0 z-[110] bg-[#0B1C3F] transition-all duration-500 ease-in-out transform ${
//         isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//       }`}>
//         {/* Mobile Header Inside Overlay */}
//         <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
//           <div className="flex items-center space-x-3">
//              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#00B4B4]">
//                 <div className="relative flex items-center justify-center scale-75">
//                   <BookOpen size={32} className="text-[#00B4B4] absolute" strokeWidth={2} />
//                   <Search size={16} className="text-[#00B4B4] absolute mt-0.5" strokeWidth={4} />
//                 </div>
//              </div>
//              <div className="text-white text-xs font-black tracking-widest leading-none">
//                 INSIGHT<br/>RESEARCH
//              </div>
//           </div>
//           <button 
//             onClick={() => setIsOpen(false)}
//             className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
//           >
//             <X size={32} />
//           </button>
//         </div>

//         <div className="flex flex-col h-full pt-12 px-8 pb-10">
//           <div className="flex flex-col space-y-10">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`text-left text-5xl font-black uppercase tracking-tighter transition-all ${
//                   currentPage === item.id ? 'text-[#00B4B4] pl-4 border-l-4 border-[#00B4B4]' : 'text-white'
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
          
//           <div className="mt-auto pt-8 border-t border-white/5 text-center">
//             <p className="text-[#00B4B4] font-black text-xs tracking-[0.3em] uppercase mb-4">
//               RESEARCH • DATA • LEADERSHIP
//             </p>
//             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
//               Better Governance Through Metrics
//             </p>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, id?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-2xl py-2' 
        : 'bg-white/95 backdrop-blur-md border-b border-[#00B4B4]/10 py-4'
    }`}>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 brand-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* ✅ MANUAL LOGO */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            {/* CHANGE THIS PATH */}
            <img
              src="/logo1.png"
              alt="Insight Metrics Research"
              className="h-12 w-auto object-contain"
            />

            {/* Optional text beside logo */}
            <div className="hidden sm:flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tight leading-tight text-[#0B1C3F]">
                INSIGHT METRICS
              </span>
              <span className="text-lg font-black tracking-tight leading-tight text-[#0B1C3F]">
                RESEARCH
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-bold text-sm uppercase tracking-widest transition-all py-1 group text-[#0B1C3F] hover:text-[#00B4B4] ${
                  currentPage === item.id ? 'text-[#00B4B4]' : ''
                }`}
              >
                <span>{item.name}</span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B4B4] transition-all duration-300 group-hover:w-full ${
                  currentPage === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-[#0B1C3F] hover:bg-slate-200 transition-colors"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden fixed inset-0 z-[110] bg-[#0B1C3F] transition-all duration-500 transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>

        <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">

          {/* MOBILE LOGO */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo1.png"
              alt="Insight Metrics Research"
              className="h-10 w-auto object-contain "
            />
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-12 px-8 pb-10">
          <div className="flex flex-col space-y-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-5xl font-black uppercase tracking-tighter transition-all ${
                  currentPage === item.id ? 'text-[#00B4B4] pl-4 border-l-4 border-[#00B4B4]' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 text-center">
            <p className="text-[#00B4B4] font-black text-xs tracking-[0.3em] uppercase mb-4">
              RESEARCH • DATA • LEADERSHIP
            </p>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              Better Governance Through Metrics
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
