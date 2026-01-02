
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-100">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21a9.003 9.003 0 008.367-5.633l-1.081-.34A7.003 7.003 0 0112 19c-3.866 0-7-3.134-7-7 0-1.554.512-3.04 1.45-4.281L5.367 7.367A9.003 9.003 0 0012 21z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-blue-900">
              CYBER<span className="text-blue-500">GUARD</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#hero" className="hover:text-blue-600 transition-colors">Platform</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Scanning Features</a>
            <a href="#ai" className="hover:text-blue-600 transition-colors">AI Assistant</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Enterprise</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-blue-600 font-bold text-sm hidden sm:block px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-blue-700 transition-all hover:shadow-blue-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
