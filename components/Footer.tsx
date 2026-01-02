
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21a9.003 9.003 0 008.367-5.633l-1.081-.34A7.003 7.003 0 0112 19c-3.866 0-7-3.134-7-7 0-1.554.512-3.04 1.45-4.281L5.367 7.367A9.003 9.003 0 0012 21z" />
                </svg>
              </div>
              <span className="text-xl font-black text-blue-950 uppercase tracking-tighter">
                Cyber Guard
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              The world's leading security scanning platform for modern development teams. Proactive, automated, and comprehensive.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center text-slate-400 hover:text-blue-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91 0.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">Web Scanner</a></li>
              <li><a href="#" className="hover:text-blue-600">Mobile Scanner</a></li>
              <li><a href="#" className="hover:text-blue-600">CWE Top 25</a></li>
              <li><a href="#" className="hover:text-blue-600">API Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">About Guard</a></li>
              <li><a href="#" className="hover:text-blue-600">Trust Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Security Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6 font-medium">Get the latest threat alerts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="bg-slate-50 border border-slate-100 text-slate-900 px-4 py-3 rounded-lg text-sm w-full focus:ring-1 focus:ring-blue-600 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <div>© {new Date().getFullYear()} Cyber Guard Security. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
