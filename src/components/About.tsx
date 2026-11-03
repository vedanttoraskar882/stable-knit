import React from 'react';
import { Database, GitCompare, Compass, GraduationCap, Briefcase, BookOpen, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FAF9F6] border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-sky-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5 shadow-xs">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">
              Better-informed construction screening
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Evaluate fibre composition, yarn characteristics, and structure early, drawing upon structured historical knowledge before manufacturing initial trial yards.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5 shadow-xs">
              <Database className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">
              Evidence-based finishing decisions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compare proven finishing routes using recorded physical outcomes from comparable fabric constructions to standardise finishing guidance.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5 shadow-xs">
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

        {/* Founder Card: Clean executive layout with NO photo or avatar placeholder */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-8 sm:p-10 lg:p-12">
          
          {/* Header Row: Founder Name, Title, and Credentials */}
          <div className="border-b border-slate-100 pb-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-2">
                Founder Profile
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
                Ghazi Nouman Zahid
              </h3>
              <p className="text-sm sm:text-base font-semibold text-teal-700 mt-1">
                Founder &amp; proposed Chief Executive
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                Textile Engineering
              </span>
              <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                International Business Management
              </span>
            </div>
          </div>

          {/* Biography and Qualifications Details */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2.5">
                Professional Background
              </h4>
              <p className="text-base text-slate-700 leading-relaxed max-w-4xl">
                Ghazi Nouman Zahid brings approximately five years of experience across textile production planning, quality control and technical sales. His background combines textile engineering with international business management and research into knitwear dimensional stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              
              {/* Qualifications */}
              <div className="bg-slate-50/70 p-6 rounded-xl border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-teal-600" />
                  <span>Qualifications</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-2.5 pl-5 list-disc marker:text-teal-600">
                  <li>
                    <span className="font-semibold text-slate-800">Bachelor’s degree in Textile Engineering</span>, University of Faisalabad, 2014–2018.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">MSc International Business Management</span>, University of Sunderland, London Campus, 2023–2024.
                  </li>
                </ul>
              </div>

              {/* Industry Experience */}
              <div className="bg-slate-50/70 p-6 rounded-xl border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-teal-600" />
                  <span>Relevant Industry Experience</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 pl-5 list-disc marker:text-teal-600">
                  <li className="font-medium text-slate-700">Masood Textile Mills</li>
                  <li className="font-medium text-slate-700">M.K. Sons</li>
                  <li className="font-medium text-slate-700">ABE Atlantic Business Enterprise</li>
                </ul>
              </div>

            </div>

            {/* Academic Research Distinction */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Academic Research</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">“Dimensional Stability of Knit Wear”</span>, November 2017–March 2018, involving more than 50 fabric samples.
              </p>
              
              {/* Required Academic Research Disclaimer */}
              <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200 text-xs text-slate-600">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="italic">
                  The founder’s research informs the proposed approach; it is not evidence of results achieved by the planned software.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
