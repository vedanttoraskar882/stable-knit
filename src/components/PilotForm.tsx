import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Save, Info, Loader2 } from 'lucide-react';

interface FormState {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
  general?: string;
}

const STORAGE_KEY = 'stableknit_ai_pilot_submissions';

export const PilotForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const generateSubmissionId = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      try {
        return crypto.randomUUID();
      } catch {
        // Fallback below
      }
    }
    return `pilot_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phoneNumber.trim();
    const trimmedEmail = formData.emailAddress.trim();
    const trimmedOrg = formData.organisationName.trim();

    // Full Name
    if (!trimmedName) {
      newErrors.fullName = 'Full Name is required.';
    }

    // Phone Number - realistic international formatting: allows +, digits, spaces, parentheses, hyphens, min 7 chars
    const phonePattern = /^[+]?[\d\s().-]{7,25}$/;
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!phonePattern.test(trimmedPhone) || digitsOnly.length < 6 || digitsOnly.length > 17) {
      newErrors.phoneNumber = 'Please enter a valid phone number (international format accepted).';
    }

    // Email Address - standard browser-compliant pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    // Organisation Name
    if (!trimmedOrg) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    // Clear success message when user edits to allow clean follow-up submission
    if (successMessage) {
      setSuccessMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      // 1. Read current localStorage value
      const rawStored = localStorage.getItem(STORAGE_KEY);
      let submissions: unknown[] = [];

      if (rawStored === null) {
        // 2. If the key does not exist, start with an empty array
        submissions = [];
      } else {
        // 3. If it exists, parse it safely
        try {
          const parsed = JSON.parse(rawStored);
          // 4. Confirm the parsed value is an array
          if (!Array.isArray(parsed)) {
            setErrors({
              general: 'Existing stored submissions data is malformed or invalid. The request could not be saved to browser storage.',
            });
            setIsSubmitting(false);
            return;
          }
          submissions = parsed;
        } catch {
          // Parse error: malformed data
          setErrors({
            general: 'Existing stored submissions data is malformed or invalid. The request could not be saved to browser storage.',
          });
          setIsSubmitting(false);
          return;
        }
      }

      // 5. Append the new submission without deleting or replacing previous entries
      const newEntry = {
        id: generateSubmissionId(),
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        emailAddress: formData.emailAddress.trim(),
        organisationName: formData.organisationName.trim(),
        submittedAt: new Date().toISOString(),
      };

      const updatedSubmissions = [...submissions, newEntry];

      // 6. Save the complete updated array
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));

      // 7. Display success only after localStorage.setItem succeeds
      setSuccessMessage(
        'Your pilot request has been saved in this browser. This demonstration does not send your details to the StableKnit AI team.'
      );

      // 8. Reset form fields only after a successful save
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setErrors({});
    } catch (err: unknown) {
      // Handle unavailable storage, blocked storage and quota errors gracefully
      console.error('Storage error:', err);
      setErrors({
        general:
          'Unable to save your request. Browser storage may be disabled, full, or blocked in your privacy settings.',
      });
      // Preserve the user's entered form values if saving fails (already preserved in formData)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="request-pilot"
      className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-md p-8 sm:p-10 lg:p-12 relative overflow-hidden"
      aria-labelledby="request-pilot-heading"
    >
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-3">
          <span>Pilot Enrolment Interest</span>
        </div>
        <h3
          id="request-pilot-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-2"
        >
          Request a Pilot
        </h3>
        <p className="text-base text-slate-700 leading-relaxed">
          Record your interest in exploring a structured StableKnit AI pilot.
        </p>
      </div>

      {/* Accessible Live Region for Submission Status */}
      <div aria-live="polite" className="mb-6">
        {successMessage && (
          <div
            role="status"
            className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm animate-fadeIn"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-emerald-950">Success</p>
              <p className="mt-0.5 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {successMessage}
              </p>
            </div>
          </div>
        )}

        {errors.general && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 text-sm animate-fadeIn"
          >
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-rose-950">Storage Notice</p>
              <p className="mt-0.5 text-xs sm:text-sm text-rose-900 leading-relaxed">
                {errors.general}
              </p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Full Name <span className="text-rose-600" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance"
              required
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-800 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none transition-colors ${
                errors.fullName
                  ? 'border-rose-400 bg-rose-50/20'
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Phone Number <span className="text-rose-600" aria-label="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="e.g. +44 20 7946 0912 or (555) 123-4567"
              required
              aria-required="true"
              aria-invalid={!!errors.phoneNumber}
              aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-800 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none transition-colors ${
                errors.phoneNumber
                  ? 'border-rose-400 bg-rose-50/20'
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {errors.phoneNumber && (
              <p id="phoneNumber-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Email Address <span className="text-rose-600" aria-label="required">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="e.g. e.vance@textiles.com"
              required
              aria-required="true"
              aria-invalid={!!errors.emailAddress}
              aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-800 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none transition-colors ${
                errors.emailAddress
                  ? 'border-rose-400 bg-rose-50/20'
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {errors.emailAddress && (
              <p id="emailAddress-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.emailAddress}
              </p>
            )}
          </div>

          {/* Organisation Name */}
          <div>
            <label
              htmlFor="organisationName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Organisation Name <span className="text-rose-600" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleChange}
              placeholder="e.g. Apex Knitwear Mills Ltd"
              required
              aria-required="true"
              aria-invalid={!!errors.organisationName}
              aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-800 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none transition-colors ${
                errors.organisationName
                  ? 'border-rose-400 bg-rose-50/20'
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {errors.organisationName && (
              <p id="organisationName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.organisationName}
              </p>
            )}
          </div>

        </div>

        {/* Visible Notice Above Submit Button */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            This demonstration stores your details only in this browser. Your request is not sent to the StableKnit AI team. Stored details may be removed if browser data is cleared.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow transition-all duration-150 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" aria-hidden="true" />
                <span>Save Pilot Request</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
