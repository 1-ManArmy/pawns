// Centralized helpers for cookie consent persistence & versioning.

export const CONSENT_STORAGE_KEY = 'cookieConsent';

export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
}

export function loadConsent(expectedVersion: number): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: ConsentPreferences = JSON.parse(raw);
    if (!parsed.version || parsed.version < expectedVersion) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(prefs: Omit<ConsentPreferences, 'timestamp'>): ConsentPreferences {
  const withTs: ConsentPreferences = { ...prefs, timestamp: new Date().toISOString() };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(withTs));
  return withTs;
}

export function buildConsent(version: number, partial: { necessary?: boolean; analytics?: boolean; marketing?: boolean }): ConsentPreferences {
  return {
    necessary: partial.necessary ?? true,
    analytics: partial.analytics ?? false,
    marketing: partial.marketing ?? false,
    version,
    timestamp: new Date().toISOString(),
  };
}
