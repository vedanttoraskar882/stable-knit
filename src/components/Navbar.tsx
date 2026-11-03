import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-[#FAF9F5] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md py-1 px-1.5"
              aria-label="StableKnit AI homepage"
            >
              {/* Minimal SVG Weave Icon */}
              <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-800 transition-colors">
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
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#0B192C]">
                  StableKnit<span className="text-teal-600 font-semibold ml-1">AI</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium -mt-1">
                  Fabric Intelligence
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#0B192C] hover:bg-slate-100/70 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#request-pilot"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-xs hover:shadow transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
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
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-700 hover:text-[#0B192C] hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors"
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
          className="lg:hidden border-b border-slate-200 bg-[#FAF9F5] shadow-lg animate-fadeIn"
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-xs"
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
