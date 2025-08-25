import React, { useEffect, useState } from 'react';
import { loadConsent, saveConsent as persistConsent } from '@/lib/consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
}

const STORAGE_KEY = 'cookieConsent';
const POLICY_VERSION = 1; // bump when policy text changes

export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences | null>(null);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
      const init = () => {
        const existing = loadConsent(POLICY_VERSION) as CookiePreferences | null;
        if (existing) { setPrefs(existing); return; }
        setOpen(true);
      };
      init();
      const handler = () => { setOpen(true); setPrefs(null); };
      window.addEventListener('open-cookie-consent', handler as any);
      return () => window.removeEventListener('open-cookie-consent', handler as any);
    }, []);

  function save(p: Omit<CookiePreferences, 'timestamp' | 'version'>) {
    const full: CookiePreferences = persistConsent({ ...p, version: POLICY_VERSION });
    setPrefs(full);
    setOpen(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: full }));
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, marketing: true });
  }
  function rejectNonEssential() {
    save({ necessary: true, analytics: false, marketing: false });
  }

  if (!open || prefs) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] px-4 sm:px-6 pb-4">
      <div className="max-w-5xl mx-auto bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 p-5 md:p-6">
          <div>
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
              Privacy & Cookies
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 uppercase tracking-wide text-white/60">v{POLICY_VERSION}</span>
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              We use essential cookies to make this site work. With your consent we also use analytics & experience cookies to improve content, and minimal marketing cookies to understand reach. You can update choices anytime.
              Read our <a href="/privacy" className="underline decoration-dotted underline-offset-2 hover:text-white">Privacy Policy</a> & <a href="/cookie-policy" className="underline decoration-dotted underline-offset-2 hover:text-white">Cookie Policy</a>.
            </p>
            {showCustomize && (
              <CustomizePanel onSave={(a,m) => save({ necessary: true, analytics: a, marketing: m })} />
            )}
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 md:items-end min-w-[240px]">
            {!showCustomize && (
              <button onClick={() => setShowCustomize(true)} className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 font-medium border border-white/10 transition-colors">Customize</button>
            )}
            <button onClick={rejectNonEssential} className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-colors">Essential Only</button>
            <button onClick={acceptAll} className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-purple-800/40 transition-all">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomizePanel: React.FC<{ onSave: (analytics: boolean, marketing: boolean) => void; }> = ({ onSave }) => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 space-y-3 animate-fade-in">
      <ToggleRow label="Necessary" description="Core functionality, security, preferences persistence." locked checked />
      <ToggleRow label="Analytics" description="Privacy‑respecting usage metrics to improve performance & UX." checked={analytics} onChange={v => setAnalytics(v)} />
      <ToggleRow label="Marketing" description="Very limited reach awareness & launch announcements." checked={marketing} onChange={v => setMarketing(v)} />
      <div className="flex flex-wrap gap-3 pt-2">
        <button onClick={() => onSave(analytics, marketing)} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors">Save Choices</button>
        <button onClick={() => onSave(true, true)} className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold shadow-md shadow-purple-900/40">Accept Selected</button>
      </div>
    </div>
  );
};

const ToggleRow: React.FC<{ label: string; description: string; checked?: boolean; onChange?: (v:boolean)=>void; locked?: boolean; }> = ({ label, description, checked, onChange, locked }) => {
  return (
    <label className="flex items-start gap-3 group cursor-pointer">
      <input type="checkbox" disabled={locked} checked={checked} onChange={e => onChange?.(e.target.checked)} className="mt-1.5 h-4 w-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500 cursor-pointer disabled:opacity-50" />
      <span className="text-white/70 text-xs leading-relaxed">
        <span className="text-white font-medium mr-1">{label}</span>
        {locked && <span className="text-[10px] px-1 py-0.5 rounded bg-white/10 border border-white/10 ml-1">required</span>}
        {description}
      </span>
    </label>
  );
};

export default CookieConsent;
