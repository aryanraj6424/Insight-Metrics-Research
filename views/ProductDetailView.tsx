
import React from 'react';
import { Page } from '../App';
import { ArrowLeft, Check, Download } from 'lucide-react';

interface Props {
  id: string | null;
  onNavigate: (page: Page) => void;
}

const ProductDetailView: React.FC<Props> = ({ id, onNavigate }) => {
  return (
    <div className="animate-in slide-in-from-bottom-10 duration-500 pb-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button onClick={() => onNavigate('products')} className="flex items-center space-x-2 text-[#0B1C3F] font-bold mb-8 hover:text-[#FF6A00]">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558485081-10aa048799bf?q=80&w=800" className="w-full h-full object-cover" alt="Product" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={`https://picsum.photos/id/${i+100}/300/300`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <span className="bg-orange-100 text-[#FF6A00] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">In Stock</span>
              <h1 className="text-5xl font-black text-[#0B1C3F]">Smart Meter Pro v2</h1>
              <p className="text-2xl font-black text-[#FF6A00]">₹4,500.00</p>
            </div>

            <p className="text-gray-500 leading-relaxed text-lg">
              The next generation of municipal utility management. Features real-time data sync, 
              LPWAN connectivity, and industrial-grade security.
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Specifications</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                {['Battery Life: 10 Years', 'Range: 5km (Urban)', 'Security: AES-256', 'IP Rating: IP67 Waterproof'].map(s => (
                  <div key={s} className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                    <Check size={16} className="text-green-500" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="flex-grow orange-gradient text-white py-5 rounded-2xl font-black shadow-xl">
                Place Inquiry
              </button>
              <button className="flex-grow bg-slate-100 text-[#0B1C3F] py-5 rounded-2xl font-black flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
