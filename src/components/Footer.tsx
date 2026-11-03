import React, { useState } from 'react';
import { StorageNoticeModal } from './StorageNoticeModal';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="flex items-center gap-2 text-white group focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md w-fit"
              aria-label="StableKnit AI homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-500 transition-colors">
                <svg
                  className="w-5 h-5 text-teal-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                  <path d="M8 4v16" />
                  <path d="M16 4v16" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                StableKnit<span className="text-teal-400 font-semibold ml-1">AI</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Fabric stability intelligence grounded in construction and testing evidence.
            </p>

            {/* Development-Stage Note */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-md">
              <span className="font-semibold text-slate-200 block mb-0.5">Development Status:</span>
              <p>
                StableKnit AI is in development. Platform visuals are illustrative and capabilities follow the proposed roadmap.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action and Browser Storage */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Pilot Enquiries
            </h4>
            <a
              href="#request-pilot"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-xs"
            >
              <span>Request a Pilot</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-300 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Browser Storage Notice</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Storage Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} StableKnit AI. All rights reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            Demonstration website • Client-side local storage only
          </p>
        </div>

      </div>

      {/* Accessible Local Storage Notice Modal */}
      <StorageNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};
