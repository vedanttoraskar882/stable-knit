import React from 'react';
import { 
  FileSpreadsheet, 
  PenTool, 
  Eye, 
  SlidersHorizontal, 
  TestTube, 
  ClipboardCheck, 
  FileText, 
  LineChart,
  Info
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Structure historical records',
      desc: 'Organise previous fabric constructions, finishing routes and measured laboratory results. CSV import/export is planned from launch.',
      icon: FileSpreadsheet,
    },
    {
      num: '02',
      title: 'Enter a proposed construction',
      desc: 'Provide fibre blend, yarn count, knit or weave structure, GSM and relevant finishing parameters.',
      icon: PenTool,
    },
    {
      num: '03',
      title: 'Review the stability profile',
      desc: 'Review planned predictions for dimensional behaviour alongside confidence indicators and supporting historical evidence.',
      icon: Eye,
    },
    {
      num: '04',
      title: 'Assess finishing options',
      desc: 'Compare existing treatments supported by results from similar constructions.',
      icon: SlidersHorizontal,
    },
    {
      num: '05',
      title: 'Run physical tests',
      desc: 'Use laboratory testing to validate decisions, particularly when evidence is limited or confidence is low.',
      icon: TestTube,
    },
    {
      num: '06',
      title: 'Record measured outcomes',
      desc: 'Link laboratory results to the original construction and treatment, then compare predicted and actual performance.',
      icon: ClipboardCheck,
    },
    {
      num: '07',
      title: 'Develop care guidance',
      desc: 'Use confirmed fabric behaviour to inform suitable care instructions.',
      icon: FileText,
    },
    {
      num: '08',
      title: 'Monitor and compare',
      desc: 'Review construction performance and, where appropriate data exists, connect shrinkage-related returns.',
      icon: LineChart,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-[#FAF9F6] border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-sky-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Methodology</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4"
          >
            From fabric construction to measured learning
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The intended workflow creates a continuous feedback loop between early technical specifications and real-world physical wash tests.
          </p>
        </div>

        {/* 8 Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs card-hover-lift p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/80">
                      STEP {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0B192C] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Explanatory Note */}
        <div className="p-4 rounded-xl bg-white/80 border border-slate-200/90 shadow-2xs flex items-center gap-3 text-xs text-slate-600 max-w-2xl mx-auto text-center justify-center backdrop-blur-xs">
          <Info className="w-4 h-4 text-teal-600 flex-shrink-0" />
          <p className="font-medium text-slate-700">
            This illustrates the intended end-to-end workflow. Features will be introduced in stages.
          </p>
        </div>

      </div>
    </section>
  );
};
