
import React from 'react';
import { Page } from '../App';
import { ShoppingBag, Star } from 'lucide-react';

interface Props {
  onNavigate: (page: Page, id?: string) => void;
}

const ProductsView: React.FC<Props> = ({ onNavigate }) => {
  const products = [
    { id: '1', name: 'Smart Meter Pro', price: '₹4,500', img: 'https://images.unsplash.com/photo-1558485081-10aa048799bf?q=80&w=400' },
    { id: '2', name: 'Citizen App Hub', price: 'Free', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400' },
    { id: '3', name: 'Agri-Sensor Kit', price: '₹12,000', img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=400' },
    { id: '4', name: 'Waste IQ Bin', price: '₹8,900', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400' },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-orange-600 py-24 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Product Catalog</h1>
        <p className="text-xl opacity-90">Innovative tools built for a smarter community.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all flex flex-col">
              <img src={p.img} alt={p.name} className="h-60 w-full object-cover" />
              <div className="p-8 flex-grow space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[#0B1C3F]">{p.name}</h3>
                  <div className="flex items-center text-orange-500 font-bold text-xs">
                    <Star size={12} fill="currentColor" />
                    <span>4.9</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Industrial grade hardware designed for long-term regional deployment.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-2xl font-black text-[#0B1C3F]">{p.price}</span>
                  <button 
                    onClick={() => onNavigate('product-detail', p.id)}
                    className="p-3 bg-slate-100 rounded-xl hover:bg-[#FF6A00] hover:text-white transition-colors"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
