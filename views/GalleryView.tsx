
import React, { useState } from 'react';
import { X, ZoomIn, Maximize2, Camera, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import {MessageCircle,} from 'lucide-react';

const GalleryView: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Political Rallies', 'Community Meetings', 'Field Research', 'Media Events'];

  const galleryItems = [
    { url: 'https://images.unsplash.com/photo-1540910419892-4a39d2c32e5c?q=80&w=800', category: 'Political Rallies', title: 'Grand Youth Convention' },
    { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800', category: 'Media Events', title: 'National Press Briefing' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800', category: 'Field Research', title: 'Constituency Data Collection' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b52e?q=80&w=800', category: 'Community Meetings', title: 'Educational Reforms Talk' },
    { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800', category: 'Media Events', title: 'Policy Manifesto Launch' },
    { url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', category: 'Community Meetings', title: 'Grassroots Feedback Session' },
    { url: 'https://images.unsplash.com/photo-1573163231134-282030030021?q=80&w=800', category: 'Field Research', title: 'Rural Development Survey' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800', category: 'Field Research', title: 'War Room Analytics' },
    { url: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800', category: 'Political Rallies', title: 'State Victory Parade' },
  ];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (url: string, index: number) => {
    setSelectedImage(url);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(filteredItems[nextIdx].url);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(filteredItems[prevIdx].url);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920" 
            alt="Media Gallery Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#333333]/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-4 px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-[#009ADE] p-4 rounded-2xl shadow-2xl animate-bounce">
              <Camera size={40} className="text-white" />
            </div>
          </div>
          <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-sm animate-fade-up">Visual Archives</h4>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            Media Gallery
          </h1>
          <p className="text-gray-300 text-xl font-medium italic max-w-2xl mx-auto opacity-80">
            "Capturing the moments that define our political realism and data-driven impact."
          </p>
        </div>
      </section>

      {/* 2. GALLERY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#009ADE] text-white shadow-xl scale-105' 
                  : 'bg-slate-50 text-gray-500 hover:bg-slate-100 hover:text-[#333333]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative rounded-[2.5rem] overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => openLightbox(item.url, i)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#EAB308] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{item.category}</span>
                  <h3 className="text-white text-2xl font-black mb-4">{item.title}</h3>
                  <div className="flex items-center space-x-3 text-white/70">
                    <Maximize2 size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">View Full Size</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-400 font-bold text-xl">No media found in this category.</p>
          </div>
        )}
      </section>

      {/* 3. LIGHTBOX VIEW */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-[#333333]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-10 right-10 text-white hover:text-[#009ADE] transition-colors p-4 z-[1010]"
            onClick={closeLightbox}
          >
            <X size={48} strokeWidth={3} />
          </button>

          {/* Navigation Controls */}
          <button 
            className="absolute left-6 md:left-12 text-white hover:text-[#009ADE] transition-all p-4 rounded-full bg-white/5 hover:bg-white/10 z-[1010]"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>
          
          <button 
            className="absolute right-6 md:right-12 text-white hover:text-[#009ADE] transition-all p-4 rounded-full bg-white/5 hover:bg-white/10 z-[1010]"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>

          {/* Lightbox Content */}
          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Full Size View" 
              className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border-4 border-white/5"
            />
            <div className="mt-8 text-center text-white space-y-2">
              <span className="text-[#EAB308] font-black uppercase tracking-[0.4em] text-xs">Insight Archives</span>
              <h3 className="text-2xl font-black tracking-tight">{filteredItems[currentIndex].title}</h3>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                Image {currentIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Teaser Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h4 className="text-[#009ADE] font-black uppercase tracking-widest text-xs">Video Content</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#333333]">Speeches & Briefings</h2>
            </div>
            <button className="flex items-center space-x-3 bg-[#333333] text-white px-10 py-4 rounded-full font-black text-sm tracking-widest hover:bg-[#009ADE] transition-all shadow-xl">
              <Video size={20} />
              <span>YOUTUBE CHANNEL</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800', title: 'Strategy Masterclass 2024', duration: '14:20' },
              { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800', title: 'Press Bureau Q&A Session', duration: '08:45' },
            ].map((video, i) => (
              <div key={i} className="group relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-[#333333]">
                <img src={video.url} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white text-white group-hover:scale-110 group-hover:bg-[#009ADE] transition-all cursor-pointer">
                    <div className="ml-2 w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent"></div>
                  </div>
                  <h3 className="mt-8 text-2xl font-black text-white text-center">{video.title}</h3>
                  <span className="mt-2 text-white/50 font-black text-xs tracking-widest uppercase">{video.duration} MIN</span>
                </div>
              </div>
            ))}
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

export default GalleryView;
