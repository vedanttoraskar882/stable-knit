import React from 'react';
import { 
  Cpu, 
  FlaskRound as Flask, 
  CheckSquare, 
  Tag, 
  RotateCcw, 
  BarChart3, 
  AlertCircle 
} from 'lucide-react';

export const Platform: React.FC = () => {
  const modules = [
    {
      num: '01',
      title: 'Pre-physical-testing Stability Prediction',
      icon: Cpu,
      description: 'Assess expected shrinkage, stretch and distortion using fibre composition, fabric structure, yarn characteristics and fabric weight, with planned confidence indicators and supporting case counts.',
      stage: 'Year 1 focus',
      stageBadgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    },
    {
      num: '02',
      title: 'Outcome-matched Treatment Recommendation',
      icon: Flask,
      description: 'Rank existing finishing treatments using measured outcomes from comparable fabric constructions.',
      clarification: 'Designed to compare existing treatments, not formulate new chemicals.',
      stage: 'Year 2 production roadmap',
      stageBadgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    },
    {
      num: '03',
      title: 'Physical-test Validation & Compounding Dataset',
      icon: CheckSquare,
      description: 'Link laboratory results to the original fabric construction and finishing treatment, compare predictions with measured outcomes, and build structured records for future model improvement.',
      stage: 'Year 1 pilot and MVP focus',
      stageBadgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    },
    {
      num: '04',
      title: 'Care-instruction Generation',
      icon: Tag,
      description: 'Develop care guidance using predicted and confirmed fabric behaviour.',
      clarification: 'Guidance does not certify labelling compliance.',
      stage: 'Year 2 development roadmap',
      stageBadgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    },
    {
      num: '05',
      title: 'Shrinkage-return Outcome Correlation',
      icon: RotateCcw,
      description: 'Connect construction and treatment decisions with subsequent shrinkage-related returns where the customer supplies returns data classified by reason.',
      stage: 'Year 3 roadmap',
      stageBadgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    },
    {
      num: '06',
      title: 'Comparative Benchmarking Dashboard',
      icon: BarChart3,
      description: 'Compare candidate fabrics on stability, treatment effectiveness, confirmed results and return trends.',
      clarification: 'Cross-customer anonymised benchmarking is a later ambition.',
      stage: 'Year 4 general release roadmap',
      stageBadgeClass: 'bg-purple-50 text-purple-800 border-purple-200',
    },
  ];

  return (
    <section
      id="platform"
      className="py-20 md:py-28 bg-[#F4F3EE]/80 border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="platform-heading"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-sky-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-900 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Modular Architecture</span>
          </div>
          <h2
            id="platform-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4"
          >
            Six connected modules. One evidence-led workflow.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The planned platform connects fabric construction, finishing decisions, laboratory validation and downstream outcomes.
          </p>
        </div>

        {/* 6 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.num}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs card-hover-lift flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden group"
              >
                <div>
                  {/* Top Bar with Number and Development Stage */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-teal-700 transition-colors">
                      MODULE {mod.num}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${mod.stageBadgeClass}`}
                    >
                      {mod.stage}
                    </span>
                  </div>

                  {/* Module Title with Icon */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5 shadow-xs group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B192C] leading-snug">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Module Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                </div>

                {/* Clarification if present */}
                {mod.clarification && (
                  <div className="mt-2 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                    <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="italic">{mod.clarification}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
