
import React, { useState, useRef, useEffect } from 'react';
import { getSecurityAdvice } from '../services/gemini';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your Cyber Guard Security Assistant. How can I help you with your vulnerability scans or report analysis today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getSecurityAdvice([...messages, userMsg]);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cyber Guard AI Specialist</h2>
          <p className="text-slate-500">Instant answers to your security scanning and vulnerability questions.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-blue-100">
          <div className="p-6 bg-blue-600 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold leading-none">Security Assistant</h3>
                <span className="text-[10px] opacity-75 uppercase font-bold tracking-widest">Always Active</span>
              </div>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase">
              AI Powered
            </div>
          </div>

          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-8 space-y-6 bg-slate-50/30 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-100' 
                  : 'bg-white text-slate-700 rounded-bl-none border border-blue-50 shadow-sm'
                }`}>
                  <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-blue-50 shadow-sm">
                   <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-blue-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a security question..."
                className="flex-1 bg-slate-50 border border-slate-100 text-slate-900 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
