import React from 'react';
import { Clock, ShieldAlert, Award, FileSpreadsheet, AlertCircle } from 'lucide-react';

export const StructuredPilot: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10 mb-12">
      
      {/* Pilot Heading */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-3">
          <span>Collaboration Framework</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-3">
          Explore an eight-week structured pilot
        </h3>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Evaluate the proposed approach using historical records and fresh laboratory evidence within your fabric production environment.
        </p>
      </div>

      {/* Pilot Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Term 1: Duration */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Duration</span>
            </div>
            <p className="text-2xl font-black text-[#0B192C] mb-1">
              8 Weeks
            </p>
            <p className="text-xs text-slate-600">
              Structured evaluation cycle covering historical data alignment, testing runs, and outcome comparison.
            </p>
          </div>
        </div>

        {/* Term 2: Platform Pilot Fee */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Platform Pilot Fee</span>
            </div>
            <p className="text-2xl font-black text-teal-800 mb-1">
              £0
            </p>
            <p className="text-xs text-slate-600">
              No platform licence charges during the agreed 8-week collaborative pilot period.
            </p>
          </div>
        </div>

        {/* Term 3: Participant Responsibilities */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Participant Commitments</span>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-1">
              Staff Time &amp; 10 Fresh Tests
            </p>
            <p className="text-xs text-slate-600">
              Participants cover their own staff time and commission ten fresh physical tests through their laboratory.
            </p>
          </div>
        </div>

        {/* Term 4: Historical Data Requirement */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <FileSpreadsheet className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Data Requirement</span>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-1">
              At Least 40 Constructions
            </p>
            <p className="text-xs text-slate-600">
              At least 40 historical fabric constructions, including finishing routes and measured dimensional-change results.
            </p>
          </div>
        </div>

      </div>

      {/* Disclaimers & Post-Pilot Terms */}
      <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-800">After the pilot:</span> Successful completion leads to a proposed subscription discussion. It does not automatically start a paid subscription.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-800">Important Cost Notice:</span> The pilot is not described as entirely cost-free because participating organisations incur internal staff time and laboratory testing costs for the ten commissioned physical tests.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-800">Submission Notice:</span> Submitting a pilot request records your interest to explore participation; it does not confirm acceptance or guarantee a pilot place.
          </p>
        </div>
      </div>

    </div>
  );
};
