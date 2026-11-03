import React from 'react';
import { 
  Building2, 
  Shirt, 
  Pipette, 
  Microscope, 
  ShoppingBag, 
  ArrowRight, 
  HelpCircle,
  Tag,
  ShieldCheck
} from 'lucide-react';

export const MarketPricing: React.FC = () => {
  const customerSegments = [
    {
      title: 'Knitwear and woven-fabric manufacturers',
      buyer: 'Product Development Director or Head of Product Development',
      desc: 'Screen new constructions before bulk yarn procurement and pilot knitting runs.',
      icon: Shirt,
    },
    {
      title: 'Garment manufacturers supplying UK/EU retail',
      buyer: 'Quality Director or senior Garment Technologist',
      desc: 'Verify that fabric stability parameters align with stringent brand wash and fit specifications.',
      icon: Building2,
    },
    {
      title: 'Fabric-finishing and dye houses',
      buyer: 'Technical Manager',
      desc: 'Compare and select optimal finishing treatments using historical dimensional stability outcomes.',
      icon: Pipette,
    },
    {
      title: 'Textile testing laboratories and QA providers',
      buyer: 'Laboratory or technical leadership',
      desc: 'Integrate physical test verification into compounding client evidence repositories.',
      icon: Microscope,
    },
    {
      title: 'Retailer and brand technical teams',
      buyer: 'Technical and garment-quality teams',
      desc: 'Assess fabric risk earlier in the design cycle and establish consistent care standards.',
      icon: ShoppingBag,
    },
  ];

  const plans = [
    {
      name: 'SCREENING',
      planNum: 'PLAN 1',
      monthly: '£395',
      onboarding: 'None',
      firstYear: '£4,740',
      customer: 'Smaller manufacturers screening new fabric constructions.',
      desc: 'An entry route for teams assessing proposed constructions and building a more structured approach to stability screening.',
      cta: 'Discuss Screening',
    },
    {
      name: 'PROFESSIONAL',
      planNum: 'PLAN 2',
      monthly: '£995',
      onboarding: '£1,200',
      firstYear: '£13,140',
      customer: 'Product-development teams.',
      desc: 'Planned access to prediction, treatment recommendations, care guidance and benchmarking as those capabilities are delivered.',
      cta: 'Discuss Professional',
    },
    {
      name: 'ENTERPRISE',
      planNum: 'PLAN 3',
      monthly: '£2,250',
      onboarding: '£2,500',
      firstYear: '£29,500',
      customer: 'Multi-line manufacturers.',
      desc: 'For organisations requiring broader analysis, including returns analysis and planned PLM integration as delivered.',
      cta: 'Discuss Enterprise',
    },
    {
      name: 'LABORATORY & FINISHING PARTNER LICENCE',
      planNum: 'PLAN 4',
      monthly: '£1,500',
      onboarding: '£750',
      firstYear: '£18,750',
      customer: 'Laboratories and finishing houses offering screening to their own clients.',
      desc: 'Partner licence intended for third-party laboratories and dye/finishing facilities delivering screening services to client networks.',
      cta: 'Discuss Partner Licence',
    },
  ];

  return (
    <section
      id="market-pricing"
      className="py-20 md:py-28 bg-[#F4F3EE] border-t border-slate-200/80 scroll-mt-20"
      aria-labelledby="market-pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customer Segments Section */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-900 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Market Context</span>
          </div>
          <h2
            id="market-pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4"
          >
            Built for textile development and quality teams
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Designed for technical decision-makers across the fabric development, finishing, testing, and brand procurement supply chain.
          </p>
        </div>

        {/* 5 Customer Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {customerSegments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B192C] mb-2 leading-snug">
                    {seg.title}
                  </h3>
                  <div className="mb-3 text-xs bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                    <span className="text-slate-500 font-medium block text-[11px] uppercase tracking-wider mb-0.5">
                      Typical Buyer:
                    </span>
                    <span className="font-semibold text-slate-800">
                      {seg.buyer}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Commercial Models</span>
          </div>
          <h3 className="text-3xl font-extrabold text-[#0B192C] tracking-tight mb-3">
            Proposed subscription pricing
          </h3>
          <p className="text-base text-slate-700 leading-relaxed">
            Prices are per organisation. Subscriptions are proposed on 12-month contracts, billed monthly. Feature availability follows the development roadmap.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between relative hover:border-teal-300 transition-all"
            >
              <div>
                {/* Plan Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500">
                    {p.planNum}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Proposed
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#0B192C] mb-3 leading-snug min-h-[44px]">
                  {p.name}
                </h4>

                {/* Price Display */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0B192C] tracking-tight">
                      {p.monthly}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ month</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-2 space-y-1">
                    <p>
                      One-off onboarding:{' '}
                      <span className="font-semibold text-slate-800">{p.onboarding}</span>
                    </p>
                    <p>
                      First-year total:{' '}
                      <span className="font-semibold text-teal-800">{p.firstYear}</span>
                    </p>
                  </div>
                </div>

                {/* Intended customer */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Intended Customer
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {p.customer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              {/* Action Button: Scrolls to #request-pilot */}
              <div>
                <a
                  href="#request-pilot"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-600 hover:text-white border border-teal-200 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Footnote */}
        <div className="mb-14 text-xs text-slate-500 bg-white/70 p-4 rounded-xl border border-slate-200/80">
          <p>
            * First-year totals include 12 monthly subscription payments plus any one-off onboarding fee, before discounts and additional services.
          </p>
        </div>

        {/* Additional Service & Factual Commercial Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Planned Additional Service */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs uppercase tracking-wider mb-2">
              <Tag className="w-4 h-4" />
              <span>Planned Additional Service</span>
            </div>
            <h4 className="text-xl font-bold text-[#0B192C] mb-2">
              Validation-testing service
            </h4>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-teal-800">£185</span>
              <span className="text-xs text-slate-500 font-medium">per sample</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              A planned physical testing service to commission independent laboratory validation runs for candidate samples when in-house laboratory arrangements are unavailable.
            </p>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                Note: This price is for the planned additional validation service and is not automatically applied to the pilot’s ten fresh laboratory tests.
              </span>
            </div>
          </div>

          {/* Factual Commercial Terms & Discounts Panel */}
          <div className="lg:col-span-7 bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Factual Commercial Terms &amp; Discounts</span>
            </div>
            <h4 className="text-xl font-bold text-[#0B192C] mb-4">
              Proposed Discount Structures
            </h4>

            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Founding-customer discount</span>
                  <span className="font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                    Up to 15%
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  Proposed offer for the first ten customers, subject to a stated offer end date. (Proposed offer with timing to be confirmed).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Data-contribution discount</span>
                  <span className="font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                    10%
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  Applicable for organisations opting into anonymised cross-customer model training.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Annual prepayment discount</span>
                  <span className="font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                    5%
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  Applicable when 12 monthly subscription cycles are prepaid annually.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
              Discount eligibility and any combination of offers must be confirmed. Discounts are not stacked or automatically calculated in advance.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
