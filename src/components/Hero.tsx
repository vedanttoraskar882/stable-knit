import React, { useState } from 'react';
import { ArrowRight, Layers, FileCheck, Sliders, FlaskConical, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'construction' | 'stability' | 'finishing' | 'validation'>('construction');

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden modern-mesh-bg scroll-mt-20"
      aria-labelledby="hero-heading"
    >
      {/* Decorative animated glowing ambient orbs */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none animate-ambient-drift" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-10 left-10 w-[28rem] h-[28rem] bg-sky-400/10 rounded-full blur-3xl pointer-events-none animate-ambient-drift" 
        style={{ animationDelay: '-5s' }}
        aria-hidden="true" 
      />

      {/* Subtle woven thread grid lines */}
      <div className="absolute inset-0 bg-woven-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 text-teal-900 text-xs font-semibold tracking-wide uppercase mb-6 w-fit shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" aria-hidden="true" />
              <span>Fabric intelligence • In development</span>
            </div>

            {/* Main headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-[#0B192C] tracking-tight leading-[1.12] mb-6"
            >
              Predict fabric stability.{' '}
              <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 bg-clip-text text-transparent">
                Make better finishing decisions.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              StableKnit AI is being developed to help textile teams assess shrinkage, stretch and distortion, compare finishing options, and connect every decision with physical test evidence.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href="#request-pilot"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#platform"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-[#0B192C] bg-white hover:bg-slate-50 border border-slate-300/90 shadow-2xs hover:shadow-xs transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                Explore the Platform
              </a>
            </div>

            {/* Supporting note */}
            <div className="flex items-center gap-2.5 text-sm text-slate-600">
              <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 flex-shrink-0">
                <Info className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <p className="font-medium text-slate-700">
                Designed to support laboratory testing—not replace it.
              </p>
            </div>
          </div>

          {/* Right Column: Illustrative Platform Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-sky-500/10 rounded-3xl blur-md pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-200">
                
                {/* Header with Mandatory Disclaimer Label */}
                <div className="bg-[#0B192C] px-5 py-4 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 ml-2">Workflow Preview</span>
                  </div>
                  
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Illustrative platform preview — not live software
                  </span>
                </div>

                {/* Workflow step tabs */}
                <div className="bg-slate-50/95 border-b border-slate-200 px-3 py-2 flex items-center gap-1 overflow-x-auto text-xs font-medium text-slate-600">
                  <button
                    type="button"
                    onClick={() => setActiveTab('construction')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'construction'
                        ? 'bg-white text-teal-800 shadow-2xs font-bold border border-slate-200'
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>1. Construction</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('stability')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'stability'
                        ? 'bg-white text-teal-800 shadow-2xs font-bold border border-slate-200'
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>2. Stability</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('finishing')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'finishing'
                        ? 'bg-white text-teal-800 shadow-2xs font-bold border border-slate-200'
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>3. Finishing</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('validation')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'validation'
                        ? 'bg-white text-teal-800 shadow-2xs font-bold border border-slate-200'
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>4. Validation</span>
                  </button>
                </div>

                {/* Tab Content Display - Strictly Qualitative, Zero False Metrics */}
                <div className="p-5 sm:p-6 space-y-4">
                  {activeTab === 'construction' && (
                    <div className="space-y-3.5 animate-fadeInScale">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Candidate Specification</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Construction details entered
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                          <span className="text-slate-500 block text-[11px]">Fibre Composition</span>
                          <span className="font-semibold text-slate-800 text-sm">100% Combed Cotton</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                          <span className="text-slate-500 block text-[11px]">Fabric Structure</span>
                          <span className="font-semibold text-slate-800 text-sm">Single Jersey Knit</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                          <span className="text-slate-500 block text-[11px]">Yarn Count</span>
                          <span className="font-semibold text-slate-800 text-sm">30s / 1 Ne Ring Spun</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                          <span className="text-slate-500 block text-[11px]">Fabric Weight</span>
                          <span className="font-semibold text-slate-800 text-sm">160 GSM (Nominal)</span>
                        </div>
                      </div>

                      <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-slate-700 flex items-start gap-2.5">
                        <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-teal-950">Workflow Note</p>
                          <p className="text-slate-600 text-[11px] mt-0.5">
                            Construction attributes form the baseline for comparison against historical database records.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stability' && (
                    <div className="space-y-3.5 animate-fadeInScale">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Dimensional Stability Profile</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                          <AlertCircle className="w-3 h-3 text-amber-600" />
                          Evidence review
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="p-3 rounded-xl border border-slate-200 bg-white">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-slate-800">Lengthwise Behaviour (Wale)</span>
                            <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                              Relaxation Shrinkage Expected
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            Historical records for comparable single jersey show relaxation tendencies during standard wash cycles.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl border border-slate-200 bg-white">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-slate-800">Widthwise Behaviour (Course)</span>
                            <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                              Lateral Distortion Sensitivity
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            Loop distortion tendencies indicate that tension control during finishing is critical.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                        <span>Supporting Case Base:</span>
                        <span className="font-semibold text-slate-800">Identified in historical cohort</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'finishing' && (
                    <div className="space-y-3.5 animate-fadeInScale">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Finishing Treatment Evaluation</span>
                        <span className="text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                          Comparative Match
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-teal-950">Option A: Compacting & Relax Drying</span>
                            <span className="text-[10px] font-semibold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
                              Recommended Route
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            Ranked highest based on measured dimensional stability in historical cotton single jersey tests.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-slate-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-800">Option B: Standard Stenter Setting</span>
                            <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                              Alternative
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            Higher residual shrinkage risk noted in historical records without mechanical compacting.
                          </p>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 italic">
                        Note: Designed to compare existing finishing routes, not formulate new chemicals.
                      </p>
                    </div>
                  )}

                  {activeTab === 'validation' && (
                    <div className="space-y-3.5 animate-fadeInScale">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Laboratory Integration</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                          <AlertCircle className="w-3 h-3 text-rose-600" />
                          Physical validation required
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="font-medium">Testing Method:</span>
                          <span className="font-semibold text-slate-900">ISO 6330 / Dimensional Stability</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="font-medium">Evidence Status:</span>
                          <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium text-[11px]">
                            Awaiting Laboratory Batch Test
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="font-medium">Compounding Dataset:</span>
                          <span className="text-slate-600 text-[11px]">Ready to record actual outcome</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
                        <p className="font-semibold">Core Principle:</p>
                        <p className="text-[11px] text-amber-800 mt-0.5">
                          Physical validation confirms real-world results and compounds dataset accuracy for future fabric development.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Footer status bar of the card */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Planned Workflow Demonstration
                    </span>
                    <span className="text-slate-400">Pre-product concept</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
