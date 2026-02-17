
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How can I join the volunteer program?', a: 'You can sign up directly through our contact page by selecting the "Volunteer" option. Our team will review your profile and reach out within 48 hours.' },
    { q: 'What is the "Sankalp" vision?', a: 'Sankalp is our primary manifesto focusing on 10 pillars of development including education, healthcare, and infrastructure.' },
    { q: 'How are campaign donations utilized?', a: 'All contributions are transparently allocated to ground-level outreach, community hubs, and developmental research projects.' },
    { q: 'Where is your main campaign office located?', a: 'Our regional headquarters is in Hubli, Karnataka. Detailed address is available on the contact page.' },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-slate-900 py-24 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to know about our campaign and vision.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-50">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 text-left flex justify-between items-center group"
            >
              <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-[#FF6A00]' : 'text-[#0B1C3F]'}`}>
                {f.q}
              </span>
              <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-orange-600 text-white' : 'bg-slate-100 text-gray-400'}`}>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-8 pt-0 text-gray-500 leading-relaxed text-lg border-t border-gray-50 mt-2">
                {f.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQView;
