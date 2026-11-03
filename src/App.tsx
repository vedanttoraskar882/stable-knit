import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketPricing } from './components/MarketPricing';
import { StructuredPilot } from './components/StructuredPilot';
import { PilotForm } from './components/PilotForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 antialiased">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-grow">
        {/* 1. Home Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Platform Section */}
        <Platform />

        {/* 4. How It Works Section */}
        <HowItWorks />

        {/* 5. Market & Pricing Section */}
        <MarketPricing />

        {/* Structured Pilot Information & Request a Pilot Form */}
        <section
          aria-label="Structured Pilot & Request Form"
          className="py-16 md:py-24 bg-[#FAF9F5] border-t border-slate-200/80 relative"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Panel placed immediately before the Request a Pilot form */}
            <StructuredPilot />
            
            {/* Request a Pilot Form with id="request-pilot" */}
            <PilotForm />
          </div>
        </section>

        {/* 6. FAQ Section */}
        <FAQ />
      </main>

      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
