
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 bg-white border-y border-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between gap-12 opacity-30 whitespace-nowrap overflow-x-auto no-scrollbar py-4">
              <div className="text-xl font-black text-slate-900">MICROSOFT</div>
              <div className="text-xl font-black text-slate-900">AIRBNB</div>
              <div className="text-xl font-black text-slate-900">STRIPE</div>
              <div className="text-xl font-black text-slate-900">VERIZON</div>
              <div className="text-xl font-black text-slate-900">ADOBE</div>
              <div className="text-xl font-black text-slate-900">NETFLIX</div>
            </div>
          </div>
        </section>

        <Services />
        
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              Enterprise Ready
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Scale your security <br/> across the organization.
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
              From individual projects to massive multi-cloud infrastructures, Cyber Guard provides the visibility and automated scanning needed for modern scale.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-8 border border-blue-50 rounded-2xl">
                <div className="text-4xl font-black text-blue-600 mb-2">99%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">False Positive Removal</div>
              </div>
              <div className="p-8 border border-blue-50 rounded-2xl">
                <div className="text-4xl font-black text-blue-600 mb-2">250+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">CWE Top Checks</div>
              </div>
              <div className="p-8 border border-blue-50 rounded-2xl">
                <div className="text-4xl font-black text-blue-600 mb-2">10k+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Applications Scanned</div>
              </div>
            </div>
          </div>
        </section>

        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default App;
