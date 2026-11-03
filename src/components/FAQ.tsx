import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first item by default for clear UX
  });

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      q: 'What is StableKnit AI?',
      a: 'StableKnit AI is a proposed platform being developed to predict fabric dimensional behaviour, compare existing finishing treatments and connect decisions with laboratory evidence.',
    },
    {
      id: 'faq-2',
      q: 'Is the platform available now?',
      a: 'The business plan describes StableKnit AI as a pre-product venture. The website presents planned capabilities and the proposed structured pilot approach.',
    },
    {
      id: 'faq-3',
      q: 'Does it replace laboratory testing?',
      a: 'No. The proposed platform supports testing decisions and learns from measured laboratory outcomes. Physical testing remains necessary.',
    },
    {
      id: 'faq-4',
      q: 'What information would the platform use?',
      a: 'Relevant information includes fibre composition, yarn characteristics, knit or weave structure, GSM, finishing routes and measured dimensional-change results.',
    },
    {
      id: 'faq-5',
      q: 'What happens when evidence or confidence is limited?',
      a: 'The planned approach is to make those limitations visible and recommend physical testing rather than present uncertain predictions as confirmed results.',
    },
    {
      id: 'faq-6',
      q: 'Does StableKnit AI create new finishing chemicals?',
      a: 'No. The treatment-recommendation module is intended to compare existing treatments using outcomes from comparable constructions.',
    },
    {
      id: 'faq-7',
      q: 'Does care guidance certify labelling compliance?',
      a: 'No. Planned care guidance is intended to support decisions using fabric behaviour. It does not certify compliance.',
    },
    {
      id: 'faq-8',
      q: 'Is customer fabric data shared across organisations?',
      a: 'The planned architecture separates customer records. Participation in anonymised cross-customer model training requires a separate opt-in.',
    },
    {
      id: 'faq-9',
      q: 'Can the platform analyse returns without returns data?',
      a: 'No. Returns correlation requires the customer to provide suitable returns data classified by reason.',
    },
    {
      id: 'faq-10',
      q: 'Will it connect with existing systems?',
      a: 'CSV import/export is planned from launch. API, PLM and quality-system integrations are later roadmap items.',
    },
    {
      id: 'faq-11',
      q: 'How does the proposed pilot work?',
      a: 'The proposed pilot lasts eight weeks with no platform pilot fee. Participants provide at least 40 historical constructions, cover their own staff time and commission ten fresh physical tests through their laboratory.',
    },
    {
      id: 'faq-12',
      q: 'Does the pilot automatically become a paid subscription?',
      a: 'No. Successful completion leads to a proposed subscription discussion rather than automatic paid conversion.',
    },
    {
      id: 'faq-13',
      q: 'How are subscriptions billed?',
      a: 'Proposed subscriptions are per organisation on 12-month contracts billed monthly. Some plans include a one-off onboarding fee.',
    },
    {
      id: 'faq-14',
      q: 'What happens when I save the pilot form?',
      a: 'The demonstration saves your details in this browser’s localStorage. It does not transmit the request to the StableKnit AI team.',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#FAF9F6] border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Direct Answers</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Clear, grounded answers explaining the proposed technology, structured pilot commitments, and roadmap expectations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 shadow-2xs overflow-hidden ${
                  isOpen ? 'border-teal-200 shadow-xs' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-[#0B192C] hover:bg-slate-50/70 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 animate-fadeInScale"
                  >
                    <p>{faq.a}</p>
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
