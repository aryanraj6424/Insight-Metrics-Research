
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const VolunteerForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="py-24 bg-[#0B1C3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h4 className="text-[#00B4B4] font-bold tracking-widest uppercase">Be The Insight</h4>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Collaborate in our Research & Outreach</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our movement is powered by community researchers and dedicated volunteers. 
              Help us gather data, spread awareness, and build a better future together.
            </p>
            
            <div className="space-y-6">
              {[
                "Assist in community data gathering",
                "Share insights on social platforms",
                "Host research-focused townhalls",
                "Facilitate voter engagement metrics"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-[#00B4B4] flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative text-[#0B1C3F]">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-[scaleIn_0.3s_ease-out]">
                <div className="w-20 h-20 bg-[#00B4B4]/10 text-[#00B4B4] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold">Welcome Aboard!</h3>
                <p className="text-gray-500">Your details are registered. Our research lead will connect with you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#00B4B4] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#00B4B4]" placeholder="Enter your name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase">Email</label>
                    <input required type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#00B4B4]" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase">Phone</label>
                    <input required type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#00B4B4]" placeholder="+91" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Department Interests</label>
                  <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#00B4B4]">
                    <option>Data Gathering</option>
                    <option>Community Outreach</option>
                    <option>Digital Strategy</option>
                    <option>Event Management</option>
                  </select>
                </div>
                <button className="w-full brand-gradient text-white py-4 rounded-xl font-bold shadow-xl flex items-center justify-center space-x-2 transition-transform transform hover:-translate-y-1">
                  <span>Register Volunteer Status</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;