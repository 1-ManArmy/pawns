import React, { useEffect, useState } from 'react';

interface CookiePrefs { necessary: boolean; analytics: boolean; marketing: boolean; timestamp: string; version: number; }
const KEY = 'cookieConsent';

export const ConsentScripts: React.FC = () => {
  const [prefs, setPrefs] = useState<CookiePrefs | null>(null);

  // hydrate preferences
  useEffect(() => {
    const load = () => {
      try { const raw = localStorage.getItem(KEY); if (raw) setPrefs(JSON.parse(raw)); } catch { /* ignore */ }
    };
    load();
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail) setPrefs((e as CustomEvent).detail as CookiePrefs);
      else load();
    };
    window.addEventListener('cookie-consent-updated', handler as any);
    return () => window.removeEventListener('cookie-consent-updated', handler as any);
  }, []);

  // Load analytics when consent granted
  useEffect(() => {
    if (!prefs || !prefs.analytics) return;
    // Example placeholder for analytics script; replace with actual vendor script.
    if (document.getElementById('analytics-placeholder')) return;
    const s = document.createElement('script');
    s.id = 'analytics-placeholder';
    s.type = 'text/javascript';
    s.text = 'console.debug("[analytics] loaded respecting consent");';
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, [prefs?.analytics]);

  // Marketing script example
  useEffect(() => {
    if (!prefs || !prefs.marketing) return;
    if (document.getElementById('marketing-placeholder')) return;
    const s = document.createElement('script');
    s.id = 'marketing-placeholder';
    s.type = 'text/javascript';
    s.text = 'console.debug("[marketing] loaded respecting consent");';
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, [prefs?.marketing]);

  return null; // no visual output
};

export default ConsentScripts;