import React from 'react';
import { Database, GitCompare, Compass, GraduationCap, Briefcase, BookOpen, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FAF9F5] border-t border-slate-200/80 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Origins & Grounded Approach</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-6"
          >
            Connecting textile experience with structured evidence
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Manufacturers often need to produce, finish, wash and test fabrics before understanding their dimensional behaviour. Decisions rely heavily on experienced technologists, while previous construction details and test outcomes may be scattered across spreadsheets and paper records.
          </p>
          <p className="text-base text-slate-600 leading-relaxed">
            StableKnit AI aims to connect construction, treatment and testing records so that previous outcomes can inform future fabric-development decisions.
          </p>
        </div>

        {/* 3 Concise Benefit Themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-teal-200 transition-all">
            <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">
              Better-informed construction screening
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Evaluate fibre composition, yarn characteristics, and structure early, drawing upon structured historical knowledge before manufacturing initial trial yards.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-teal-200 transition-all">
            <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <Database className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">
              Evidence-based finishing decisions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compare proven finishing routes using recorded physical outcomes from comparable fabric constructions to standardise finishing guidance.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-teal-200 transition-all">
            <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <GitCompare className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">
              Traceable comparison of predicted and measured outcomes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Link laboratory verification directly to original specifications, creating an evolving institutional dataset that turns every wash test into structured learning.
            </p>
          </div>

        </div>

        {/* Founder Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Monogram Visual (No fake photograph) */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#1E3A8A] flex items-center justify-center shadow-md border-4 border-slate-100">
                  {/* Subtle weave pattern inside monogram */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
                  <span className="text-3xl sm:text-4xl font-black text-teal-400 tracking-wider font-mono">
                    GNZ
                  </span>
                </div>

                <div className="mt-4 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#0B192C]">Ghazi Nouman Zahid</h3>
                  <p className="text-sm font-semibold text-teal-700 mt-0.5">
                    Founder &amp; proposed Chief Executive
                  </p>
                  <span className="inline-block mt-2 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Textile Engineer &amp; International Business
                  </span>
                </div>
              </div>

              {/* Biography and Qualifications Details */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                    Professional Background
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Ghazi Nouman Zahid brings approximately five years of experience across textile production planning, quality control and technical sales. His background combines textile engineering with international business management and research into knitwear dimensional stability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Qualifications */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      <span>Qualifications</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-2 pl-6 list-disc marker:text-teal-600">
                      <li>
                        <span className="font-medium text-slate-800">Bachelor’s degree in Textile Engineering</span>, University of Faisalabad, 2014–2018.
                      </li>
                      <li>
                        <span className="font-medium text-slate-800">MSc International Business Management</span>, University of Sunderland, London Campus, 2023–2024.
                      </li>
                    </ul>
                  </div>

                  {/* Industry Experience */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-teal-600" />
                      <span>Relevant Industry Experience</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1.5 pl-6 list-disc marker:text-teal-600">
                      <li>Masood Textile Mills</li>
                      <li>M.K. Sons</li>
                      <li>ABE Atlantic Business Enterprise</li>
                    </ul>
                  </div>

                </div>

                {/* Academic Research Distinction */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>Academic Research</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">“Dimensional Stability of Knit Wear”</span>, November 2017–March 2018, involving more than 50 fabric samples.
                  </p>
                  
                  {/* Required Academic Research Disclaimer */}
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200/80 text-xs text-slate-600">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="italic">
                      The founder’s research informs the proposed approach; it is not evidence of results achieved by the planned software.
                    </p>
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
