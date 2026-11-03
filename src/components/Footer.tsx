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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Description (Typographic Wordmark, NO logo icon) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex flex-col text-white group focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md w-fit"
              aria-label="StableKnit AI homepage"
            >
              <span className="text-2xl font-extrabold tracking-tight text-white">
                StableKnit<span className="text-teal-400 font-bold ml-0.5">AI</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-0.5">
                Fabric Intelligence
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Fabric stability intelligence grounded in construction and testing evidence.
            </p>

            {/* Development-Stage Note */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-400 max-w-md shadow-inner">
              <span className="font-semibold text-slate-200 block mb-1">Development Status:</span>
              <p className="leading-relaxed">
                StableKnit AI is in development. Platform visuals are illustrative and capabilities follow the proposed roadmap.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition-all shadow-xs"
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
