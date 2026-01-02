
import React from 'react';

const categories = [
  {
    title: "Scanning Capabilities",
    features: [
      "Web Application Security Scanning",
      "Mobile Application Security Scanning",
      "CWE Top 25 Vulnerability Detection",
      "Comprehensive Vulnerability Coverage"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    )
  },
  {
    title: "Core Engines",
    features: [
      "DAST & SAST Hybrid Engine",
      "Real-time Logic Testing",
      "Automated Exploit Verification",
      "Advanced Payload Injection"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Reporting & Analytics",
    features: [
      "Interactive Executive Reports",
      "Detailed Developer Remediation",
      "Compliance Gap Analysis",
      "Trend & Risk Scoring"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "User Experience & Interface",
    features: [
      "Intuitive Security Dashboard",
      "Role-Based Access Control",
      "Multi-Project Management",
      "Custom Scan Scheduling"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  {
    title: "Architecture & Performance",
    features: [
      "High-Concurrency Scanning",
      "Cloud-Native Scalability",
      "Low-Latency Assessment",
      "Distributed Scan Agents"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7-5V7m5 0v1m-5 4v1m5-1v1" />
      </svg>
    )
  },
  {
    title: "Advanced Features",
    features: [
      "CI/CD Pipeline Integration",
      "API Security Auditing",
      "WAF Validation Testing",
      "Vulnerability Retesting"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-blue-900 mb-6">Complete Cyber Security Scanning Platform</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our extensive feature set organized by category. Everything you need for comprehensive security testing in a single unified ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h100v100H0z" fill="url(#pattern)"/>
              <defs>
                <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor"/>
                </pattern>
              </defs>
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Ready to secure your application?</h3>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            Join thousands of security professionals using Cyber Guard to protect their web and mobile infrastructure.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors relative z-10">
            Request Demo Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
