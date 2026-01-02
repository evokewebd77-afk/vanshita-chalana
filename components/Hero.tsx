
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 rounded-md border border-blue-100">
              New: CWE Top 25 Detection
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              Complete Cyber <br/> Security <span className="text-blue-600">Scanning.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              The industry's most comprehensive scanning platform for web and mobile applications. Everything you need for continuous security testing in one unified dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all hover:-translate-y-1">
                Start Free Scan
              </button>
              <button className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-50 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                View Sample Reports
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliant with:</div>
              <div className="font-black text-slate-600">SOC2</div>
              <div className="font-black text-slate-600">GDPR</div>
              <div className="font-black text-slate-600">HIPAA</div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-blue-50 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Cyber Guard Dashboard" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-blue-50 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-black text-blue-900 uppercase">Live Vulnerability Monitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
