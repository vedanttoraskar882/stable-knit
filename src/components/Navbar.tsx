import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] py-3'
          : 'bg-[#FAF9F6]/70 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Clean typography, NO logo icon) */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex flex-col group focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md py-1 px-1 transition-opacity hover:opacity-90"
              aria-label="StableKnit AI homepage"
            >
              <div className="flex items-baseline">
                <span className="text-xl sm:text-[1.375rem] font-extrabold tracking-tight text-[#0B192C]">
                  StableKnit<span className="text-teal-600 font-bold ml-0.5">AI</span>
                </span>
              </div>
              <span className="text-[9.5px] uppercase tracking-widest text-slate-500 font-semibold -mt-0.5">
                Fabric Intelligence
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#0B192C] hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#request-pilot"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:scale-[0.98] shadow-xs hover:shadow-md transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span>Request a Pilot</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-[#0B192C] hover:bg-slate-100/90 focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-slate-200 bg-[#FAF9F6]/95 backdrop-blur-lg shadow-xl animate-fadeInScale"
        >
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3.5 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-[#0B192C] hover:bg-teal-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#request-pilot"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-xs"
              >
                <span>Request a Pilot</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
