
// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Youtube, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';

// const ContactView: React.FC = () => {
//   const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus('sending');
//     // Simulate API call & auto email notification
//     setTimeout(() => {
//       setFormStatus('success');
//     }, 1500);
//   };

//   const offices = [
//     {
//       city: "Hubballi (HQ)",
//       type: "State Campaign Headquarters",
//       address: "New City Plaza, 4th Floor, Sector 12, Hubli, Karnataka - 580020",
//       phone: "+91 89433 23509",
//       email: "hq@insightmetrics.in"
//     },
//     {
//       city: "Dharwad",
//       type: "Regional Strategy Hub",
//       address: "Modern Business Park, PB Road, Dharwad, Karnataka - 580001",
//       phone: "+91 99979 19080",
//       email: "regional@insightmetrics.in"
//     }
//   ];

//   return (
//     <div className="animate-in fade-in duration-700 bg-white">
//       {/* 1. HERO BANNER SECTION */}
//       <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920" 
//             alt="Contact Us Background" 
//             className="w-full h-full object-cover scale-105"
//           />
//           <div className="absolute inset-0 bg-[#0B1C3F]/85 backdrop-blur-[2px]"></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
//         </div>
        
//         <div className="relative z-10 text-center space-y-4 px-4">
//           <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-sm animate-fade-up">Get in Touch</h4>
//           <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
//             Contact Us
//           </h1>
//           <p className="text-gray-300 text-xl font-medium italic max-w-2xl mx-auto opacity-80">
//             "Connect with our strategy experts to bring data-driven realism to your constituency."
//           </p>
//         </div>
//       </section>

//       {/* 2. CONTACT INFO & LOCATIONS SECTION */}
//       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Information Cards */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="space-y-4 mb-12">
//               <h2 className="text-4xl font-black text-[#333333]">Our Hubs</h2>
//               <p className="text-gray-500 font-medium leading-relaxed">
//                 Strategic presence across the region to ensure ground-level intelligence and immediate response.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex items-start space-x-6 hover:shadow-xl transition-all group">
//                 <div className="p-4 bg-[#009ADE]/10 rounded-2xl text-[#009ADE] group-hover:bg-[#009ADE] group-hover:text-white transition-all">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Call Support</h4>
//                   <p className="text-lg font-black text-[#333333]">+91 89433 23509</p>
//                   <p className="text-sm font-bold text-[#009ADE]">+91 99979 19080</p>
//                 </div>
//               </div>

//               <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex items-start space-x-6 hover:shadow-xl transition-all group">
//                 <div className="p-4 bg-[#EAB308]/10 rounded-2xl text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-white transition-all">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Inquiries</h4>
//                   <p className="text-lg font-black text-[#333333] break-all">insightmetrics1@gmail.com</p>
//                   <p className="text-sm font-bold text-[#EAB308]">strategy@insightmetrics.in</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media Strip */}
//             <div className="pt-8">
//               <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#333333] mb-6">Official Channels</h4>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Facebook, color: "hover:bg-blue-600" },
//                   { icon: Instagram, color: "hover:bg-pink-600" },
//                   { icon: Linkedin, color: "hover:bg-blue-700" },
//                   { icon: Youtube, color: "hover:bg-red-600" }
//                 ].map((social, i) => (
//                   <button key={i} className={`w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center transition-all hover:text-white ${social.color}`}>
//                     <social.icon size={20} />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Multiple Office Locations */}
//           <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
//             {offices.map((office, idx) => (
//               <div key={idx} className="bg-white rounded-[3rem] p-10 border-2 border-slate-50 shadow-sm hover:shadow-2xl transition-all group">
//                 <div className="flex justify-between items-start mb-8">
//                   <div className="p-4 bg-slate-100 rounded-2xl text-[#333333]">
//                     <MapPin size={28} />
//                   </div>
//                   <span className="bg-[#009ADE]/10 text-[#009ADE] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//                     {idx === 0 ? "Main HQ" : "Branch"}
//                   </span>
//                 </div>
//                 <h3 className="text-3xl font-black text-[#333333] mb-2">{office.city}</h3>
//                 <p className="text-[#009ADE] font-bold text-xs uppercase tracking-widest mb-6">{office.type}</p>
//                 <p className="text-gray-500 leading-relaxed mb-8 font-medium">
//                   {office.address}
//                 </p>
//                 <div className="pt-6 border-t border-slate-100 space-y-3">
//                   <div className="flex items-center space-x-3 text-sm font-bold text-gray-400">
//                     <Clock size={16} />
//                     <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. CONTACT FORM & MAP SECTION */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-[5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
//             {/* Contact Form */}
//             <div className="w-full lg:w-1/2 p-12 md:p-20">
//               <div className="space-y-4 mb-12">
//                 <h2 className="text-4xl md:text-5xl font-black text-[#333333]">Send a Message</h2>
//                 <p className="text-gray-400 font-medium">Fill out the form below and our strategy lead will be in touch with an auto-notification briefing.</p>
//               </div>

//               {formStatus === 'success' ? (
//                 <div className="bg-green-50 p-12 rounded-[3rem] text-center space-y-6 animate-in zoom-in duration-500 border border-green-100">
//                   <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
//                     <ShieldCheck size={40} />
//                   </div>
//                   <h3 className="text-2xl font-black text-green-800">Briefing Request Sent!</h3>
//                   <p className="text-green-700 font-medium">An automated confirmation has been sent to your email. We will contact you shortly.</p>
//                   <button onClick={() => setFormStatus('idle')} className="text-green-600 font-black uppercase tracking-widest text-xs hover:underline">
//                     Send another message
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
//                       <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
//                       <input required type="tel" placeholder="+91" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
//                     <input required type="email" placeholder="rahul@example.com" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Your Strategic Inquiry</label>
//                     <textarea required rows={4} placeholder="Tell us about your constituency or organization goals..." className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333] resize-none"></textarea>
//                   </div>

//                   {/* reCAPTCHA Simulation */}
//                   <div className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 w-full sm:w-fit">
//                     <input type="checkbox" id="captcha" className="w-6 h-6 rounded border-slate-300 text-[#009ADE] focus:ring-[#009ADE] cursor-pointer" required />
//                     <label htmlFor="captcha" className="text-sm font-bold text-gray-500 cursor-pointer flex items-center space-x-2">
//                       <span>I'm not a robot</span>
//                       <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-5 opacity-40 grayscale" />
//                     </label>
//                   </div>

//                   <button 
//                     disabled={formStatus === 'sending'}
//                     className={`w-full bg-[#009ADE] text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all flex items-center justify-center space-x-3 ${formStatus === 'sending' ? 'opacity-70' : 'hover:bg-[#333333] hover:-translate-y-1'}`}
//                   >
//                     <span>{formStatus === 'sending' ? 'TRANSMITTING...' : 'SEND BRIEFING REQUEST'}</span>
//                     <Send size={24} className={formStatus === 'sending' ? 'animate-pulse' : ''} />
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Embedded Map */}
//             <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-slate-200 relative">
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123136.25708560012!2d74.96570566418849!3d15.352481093155163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d14a4cf0b5d5%3A0x1ec01c243888636e!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
//                 className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
//                 allowFullScreen={true} 
//                 loading="lazy"
//               ></iframe>
//               {/* Map Information Overlay */}
//               <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl border border-white/20 hidden sm:block max-w-xs">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
//                   <span className="text-xs font-black uppercase tracking-widest text-gray-500">Live Operation Center</span>
//                 </div>
//                 <h4 className="font-black text-[#333333]">Sector 12, Hubballi</h4>
//                 <p className="text-xs text-gray-400 font-bold mt-1 uppercase">Twin City State HQ</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WhatsApp Floating Button */}
//       <a 
//         href="https://wa.me/918943323509" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="fixed bottom-10 right-10 z-[500] group flex items-center"
//       >
//         <div className="bg-white px-6 py-3 rounded-full shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 hidden md:block">
//           <p className="text-[#25D366] font-black text-sm whitespace-nowrap uppercase tracking-widest">Chat with Strategist</p>
//         </div>
//         <div className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform animate-bounce hover:animate-none">
//           <MessageCircle size={32} fill="currentColor" />
//         </div>
//       </a>
//     </div>
//   );
// };

// export default ContactView;


// import React, { useState, useRef } from 'react';
// import { Mail, Phone, Send, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
// // Note: Install emailjs-com via npm to make the form functional
// // npm install @emailjs/browser

// const ContactView: React.FC = () => {
//   const form = useRef<HTMLFormElement>(null);
//   const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus('sending');

//     // EmailJS Integration Logic
//     // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
    
//     // Simulating API Call
//     setTimeout(() => {
//       setFormStatus('success');
//       form.current?.reset();
//     }, 2000);
//   };

//   return (
//     <div className="animate-in fade-in duration-700 bg-white">
//       {/* 1. HERO BANNER */}
//       <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920" 
//             alt="Contact Us Background" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-[#0B1C3F]/90 backdrop-blur-[3px]"></div>
//         </div>
        
//         <div className="relative z-10 text-center space-y-4 px-4">
//           <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-sm">Connect With Us</h4>
//           <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter">
//             Contact Us
//           </h1>
//           <div className="w-24 h-2 bg-[#FFDB58] mx-auto rounded-full mt-4"></div>
//         </div>
//       </section>

//       {/* 2. DIRECT CONTACT STRIP */}
//       <section className="py-12 bg-slate-50 border-b">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12">
//           <div className="flex items-center space-x-4">
//             <div className="p-4 bg-[#009ADE] text-white rounded-2xl shadow-lg">
//               <Phone size={24} />
//             </div>
//             <div>
//               <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Call Support</p>
//               <p className="text-xl font-black text-[#333333]">+91 89433 23509</p>
//               <p className="text-sm font-bold text-[#009ADE]">+91 99979 19080</p>
//             </div>
//           </div>

//           <div className="h-12 w-[1px] bg-gray-200 hidden md:block"></div>

//           <div className="flex items-center space-x-4">
//             <div className="p-4 bg-[#FFDB58] text-[#333333] rounded-2xl shadow-lg">
//               <Mail size={24} />
//             </div>
//             <div>
//               <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Official Email</p>
//               <p className="text-xl font-black text-[#333333]">insightmetrics1@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. SEND A MESSAGE (EMAIL FORM) */}
//       <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
//           <div className="p-12 md:p-16">
//             <div className="text-center space-y-4 mb-12">
//               <h2 className="text-4xl font-black text-[#333333]">Get In Touch</h2>
//               <p className="text-gray-500 font-medium max-w-md mx-auto">
//                 Fill out the form below and your inquiry will be delivered directly to our strategy team's inbox.
//               </p>
//             </div>

//             {formStatus === 'success' ? (
//               <div className="bg-green-50 p-12 rounded-[3rem] text-center space-y-6 animate-in zoom-in duration-500 border border-green-100">
//                 <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
//                   <ShieldCheck size={40} />
//                 </div>
//                 <h3 className="text-2xl font-black text-green-800">Message Delivered!</h3>
//                 <p className="text-green-700 font-medium">Thank you. Your message has been sent directly to our email. We will get back to you shortly.</p>
//                 <button onClick={() => setFormStatus('idle')} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
//                   Send Another Message
//                 </button>
//               </div>
//             ) : (
//               <form ref={form} onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
//                     <input name="user_name" required type="text" placeholder="Your Name" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
//                     <input name="user_phone" required type="tel" placeholder="+91" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
//                   <input name="user_email" required type="email" placeholder="email@example.com" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
//                   <textarea name="message" required rows={5} placeholder="How can we help you?" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333] resize-none"></textarea>
//                 </div>

//                 <button 
//                   disabled={formStatus === 'sending'}
//                   className={`w-full bg-[#333333] text-white py-6 rounded-[2rem] font-black text-xl shadow-xl transition-all flex items-center justify-center space-x-3 ${formStatus === 'sending' ? 'opacity-70' : 'hover:bg-[#009ADE] hover:-translate-y-1'}`}
//                 >
//                   <span>{formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</span>
//                   <Send size={24} className={formStatus === 'sending' ? 'animate-pulse' : ''} />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* WhatsApp Floating Button */}
//       <a 
//         href="https://wa.me/918943323509" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="fixed bottom-10 right-10 z-[500] group flex items-center"
//       >
//         <div className="bg-white px-6 py-3 rounded-full shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 hidden md:block border">
//           <p className="text-[#25D366] font-black text-sm whitespace-nowrap uppercase tracking-widest">Direct WhatsApp</p>
//         </div>
//         <div className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
//           <MessageCircle size={32} fill="currentColor" />
//         </div>
//       </a>
//     </div>
//   );
// };

// export default ContactView;


import React, { useState } from 'react';
import { Mail, Phone, Send, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactView: React.FC = () => {
  // Replace "xgolzann" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xgolzann");

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1C3F]/90 backdrop-blur-[3px]"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-4 px-4">
          <h4 className="text-[#009ADE] font-black uppercase tracking-[0.4em] text-sm">Connect With Us</h4>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter">
            Contact Us
          </h1>
          <div className="w-24 h-2 bg-[#FFDB58] mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT STRIP */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-[#009ADE] text-white rounded-2xl shadow-lg">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Call Support</p>
              <p className="text-xl font-black text-[#333333]">+91 89433 23509</p>
              <p className="text-sm font-bold text-[#009ADE]">+91 99979 19080</p>
            </div>
          </div>

          <div className="h-12 w-[1px] bg-gray-200 hidden md:block"></div>

          <div className="flex items-center space-x-4">
            <div className="p-4 bg-[#FFDB58] text-[#333333] rounded-2xl shadow-lg">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Official Email</p>
              <p className="text-xl font-black text-[#333333]">insightmetrics1@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEND A MESSAGE (FORMSPREE FORM) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-12 md:p-16">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-black text-[#333333]">Get In Touch</h2>
              <p className="text-gray-500 font-medium max-w-md mx-auto">
                Fill out the form below and your inquiry will be delivered directly to our strategy team's inbox.
              </p>
            </div>

            {state.succeeded ? (
              <div className="bg-green-50 p-12 rounded-[3rem] text-center space-y-6 animate-in zoom-in duration-500 border border-green-100">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-black text-green-800">Message Delivered!</h3>
                <p className="text-green-700 font-medium">Thank you. Your message has been sent directly to our email. We will get back to you shortly.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.errors && state.errors.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3 text-red-700 border border-red-100 mb-6">
                    <AlertCircle size={20} />
                    <p className="font-bold text-sm">Something went wrong. Please check your details.</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" 
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                    <input 
                      name="phone" 
                      required 
                      type="tel" 
                      placeholder="+91" 
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" 
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333]" 
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#009ADE] outline-none transition-all font-bold text-[#333333] resize-none"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button 
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full bg-[#333333] text-white py-6 rounded-[2rem] font-black text-xl shadow-xl transition-all flex items-center justify-center space-x-3 ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#009ADE] hover:-translate-y-1'}`}
                >
                  <span>{state.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <Send size={24} className={state.submitting ? 'animate-pulse' : ''} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918943323509" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[500] group flex items-center"
      >
        <div className="bg-white px-6 py-3 rounded-full shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 hidden md:block border">
          <p className="text-[#25D366] font-black text-sm whitespace-nowrap uppercase tracking-widest">Direct WhatsApp</p>
        </div>
        <div className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <MessageCircle size={32} fill="currentColor" />
        </div>
      </a>
    </div>
  );
};

export default ContactView;