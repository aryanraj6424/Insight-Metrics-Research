
import React from 'react';
import News from '../components/News';
import { Search, ChevronRight } from 'lucide-react';

const NewsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-[#0B1C3F] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Latest News</h1>
            <p className="text-xl text-gray-400">Policy updates, press releases, and campaign announcements.</p>
          </div>
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <Search className="absolute right-6 top-4 text-gray-400" />
          </div>
        </div>
      </div>

      <News />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {[
                {
                  title: "A New Future for Education: The Digital School Initiative",
                  date: "Oct 20, 2024",
                  author: "Sankalp Media Team",
                  img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b52e?q=80&w=800",
                  excerpt: "Today we unveil the most ambitious education overhaul in regional history. By 2027, every child will have access to high-speed internet and tablets..."
                },
                {
                  title: "Agricultural Reform Bill: Supporting our Farmers",
                  date: "Oct 18, 2024",
                  author: "Policy Advisor",
                  img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800",
                  excerpt: "New insurance protections for small-scale farmers have been proposed as part of our 'Farm First' policy initiative discussed today at the summit..."
                }
              ].map((article, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={article.img} alt={article.title} className="w-full h-80 object-cover" />
                  <div className="p-10 space-y-6">
                    <div className="flex items-center space-x-4 text-sm font-bold text-orange-600 uppercase">
                      <span>Article</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-medium">{article.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#0B1C3F] leading-tight hover:text-orange-600 cursor-pointer transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <span className="font-bold text-[#0B1C3F]">{article.author}</span>
                      </div>
                      <button className="flex items-center space-x-2 text-orange-600 font-bold">
                        <span>Read Full Post</span>
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="space-y-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-[#0B1C3F]">Categories</h3>
                <div className="space-y-4">
                  {['Press Release', 'Speeches', 'Community', 'Analysis', 'Updates'].map(cat => (
                    <button key={cat} className="flex items-center justify-between w-full text-gray-600 font-medium hover:text-orange-600">
                      <span>{cat}</span>
                      <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs">12</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-orange-600 p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Join Newsletter</h3>
                <p className="text-orange-100 mb-6 text-sm">Get daily campaign updates and policy analysis directly in your inbox.</p>
                <form className="space-y-4">
                  <input type="email" placeholder="Email address" className="w-full bg-white/20 border border-white/40 rounded-xl p-4 placeholder-white/70 text-white focus:outline-none" />
                  <button className="w-full bg-[#0B1C3F] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-black transition-all">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsView;
