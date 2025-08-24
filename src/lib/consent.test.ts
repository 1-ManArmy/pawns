import { describe, it, expect, beforeEach, vi } from 'vitest';
import { buildConsent, saveConsent, loadConsent, CONSENT_STORAGE_KEY } from './consent';

describe('consent helpers', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-01-01T00:00:00Z'));
  });

  it('builds default consent object', () => {
    const c = buildConsent(1, {});
    expect(c.necessary).toBe(true);
    expect(c.analytics).toBe(false);
    expect(c.marketing).toBe(false);
    expect(c.version).toBe(1);
  });

  it('saves and loads consent with matching version', () => {
    const saved = saveConsent({ necessary: true, analytics: true, marketing: false, version: 2 });
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    expect(raw).toBeTruthy();
    const loaded = loadConsent(2);
    expect(loaded).not.toBeNull();
    expect(loaded?.analytics).toBe(true);
    expect(loaded?.version).toBe(2);
    // mismatched version should return null
    const mismatch = loadConsent(3);
    expect(mismatch).toBeNull();
  });
});
