import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, Trash2 } from 'lucide-react';

interface StorageNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StorageNoticeModal: React.FC<StorageNoticeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="storage-notice-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="storage-notice-modal-title" className="text-lg font-bold text-[#0B192C]">
              Browser Storage Notice
            </h3>
            <p className="text-xs text-slate-500">
              Demonstration Environment
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
          <p>
            This website operates entirely as a browser-side static demonstration. It does not connect to an external server, database, or analytics tracking service.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Database className="w-4 h-4 text-teal-700" />
              <span>LocalStorage Key: stableknit_ai_pilot_submissions</span>
            </div>
            <p className="text-slate-600">
              When you submit a pilot interest enquiry, the entered fields (Full Name, Phone Number, Email Address, and Organisation Name) together with a timestamp are saved exclusively into your own browser’s local storage.
            </p>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-500">
            <Trash2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p>
              Your data is never transmitted to the StableKnit AI team or third parties. Stored entries can be removed at any time by clearing your browser cache or site data.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
