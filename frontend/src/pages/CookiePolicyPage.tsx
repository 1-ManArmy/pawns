import React from 'react';

const sections: { id: string; title: string; }[] = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'what-are-cookies', title: '2. What Are Cookies?' },
  { id: 'types-we-use', title: '3. Types of Cookies We Use' },
  { id: 'cookies-we-set', title: '4. Cookies We Set' },
  { id: 'third-party', title: '5. Third-Party Technologies' },
  { id: 'managing', title: '6. Managing & Controlling Cookies' },
  { id: 'consent', title: '7. Consent & Preference Management' },
  { id: 'changes', title: '8. Changes to This Cookie Policy' },
  { id: 'contact', title: '9. Contact' },
  { id: 'glossary', title: '10. Glossary' }
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-10 w-72 h-72 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-8 w-[26rem] h-[26rem] bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">Cookie Policy</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">How AI Digital Friend (Grand Pa United™) uses cookies & similar technologies to deliver secure, personalized AI experiences.</p>
          <p className="mt-6 text-sm text-white/50">Effective Date: <strong className="text-white/70 font-semibold">August 18, 2025</strong> · Last Updated: <strong className="text-white/70 font-semibold">August 18, 2025</strong></p>
        </header>

        <TOC />

        <Section id="introduction" title="1. Introduction">
          <p>This Cookie Policy explains how we use cookies, local storage, and related tracking technologies across AI Digital Friend, Royal AI™, and future ecosystem platforms (including OneManArmy.ai & OneLast.ai). It should be read with our <a href="/privacy" className="text-pink-300 hover:underline">Privacy Policy</a>.</p>
          <p>We focus on <strong>privacy-preserving personalization</strong>: only strictly necessary and purposeful data signals are stored, many anonymized or aggregated.</p>
        </Section>

        <Section id="what-are-cookies" title="2. What Are Cookies?">
          <p>Cookies are small text files placed on your device when you visit a website. They can store session identifiers, preferences, security tokens, or analytics signals. Related technologies we may use include <strong>localStorage</strong>, <strong>sessionStorage</strong>, and in limited cases secure <strong>IndexedDB</strong>.</p>
        </Section>

        <Section id="types-we-use" title="3. Types of Cookies We Use">
          <List items={[
            'Essential / Strictly Necessary – Core platform & authentication',
            'Security & Integrity – Fraud prevention, abuse mitigation',
            'Performance & Diagnostics – Latency, error, and availability metrics',
            'Functionality – UI state (e.g., sidebar open/closed)',
            'Personalization – Remembering safe, consented preferences',
            'Analytics (Privacy-Focused) – Pseudonymous usage trends',
            'AI Optimization Signals – User-approved tuning context (non-identifying)',
          ]} />
        </Section>

        <Section id="cookies-we-set" title="4. Cookies We Set">
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <CookieCard name="session_id" purpose="Maintains secure user session" type="Essential" retention="Session" />
            <CookieCard name="auth_token" purpose="Auth continuity (httpOnly)" type="Essential/Security" retention="Session / <= 24h" />
            <CookieCard name="sidebar_state" purpose="UI layout preference" type="Functionality" retention="7 days" />
            <CookieCard name="consent_prefs" purpose="Stores cookie consent selections" type="Essential" retention="6 months" />
            <CookieCard name="ai_persona_pref" purpose="Preferred agent style (if enabled)" type="Personalization" retention="30 days" />
            <CookieCard name="metrics_id" purpose="Anonymous performance analytics" type="Performance" retention="30 days" />
          </div>
          <Callout><strong>No sale of data:</strong> We do not monetize personal cookie data or use invasive cross-site tracking.</Callout>
        </Section>

        <Section id="third-party" title="5. Third-Party Technologies">
            <p>We minimize external trackers. Limited vetted providers may include:</p>
            <List items={[
              'Cloud hosting & edge delivery (infrastructure performance)',
              'AI model APIs (contextual processing only)',
              'Payment processors (compliance & fraud checks)',
              'Privacy‑respecting analytics (aggregated trends)',
            ]} />
            <p>Any third-party cookie usage is scoped, monitored, and periodically reviewed.</p>
        </Section>

        <Section id="managing" title="6. Managing & Controlling Cookies">
          <p>You can manage preferences via an upcoming in‑app <strong>Privacy & Cookies Center</strong>. Meanwhile you may:</p>
          <List items={[
            'Use browser settings to block or delete cookies',
            'Clear site data (localStorage / application storage)',
            'Use private browsing for non-persistent sessions',
            'Disable personalization in account settings',
          ]} />
          <Callout variant="warning">Blocking essential cookies will disable authentication, secure areas, and AI continuity features.</Callout>
        </Section>

        <Section id="consent" title="7. Consent & Preference Management">
          <p>Where required (e.g., EU/EEA/UK), non-essential cookies load only after explicit opt‑in. Your selections are stored in <code className="px-1 py-0.5 rounded bg-white/10">consent_prefs</code>. You may revisit choices anytime (toggle will be added to footer soon).</p>
        </Section>

        <Section id="changes" title="8. Changes to This Cookie Policy">
          <p>We may update this policy for platform evolution, regulatory changes, or technical improvements. Material updates: advance notice + change log reference for transparency.</p>
        </Section>

        <Section id="contact" title="9. Contact">
          <p>Questions or requests:</p>
          <List items={[
            'privacy@aidigitalfriend.com (Privacy Team)',
            'dpo@aidigitalfriend.com (Data Protection Officer)',
            'support@aidigitalfriend.com (General Support)',
          ]} />
        </Section>

        <Section id="glossary" title="10. Glossary">
          <Definition term="Essential Cookie" desc="Required for core operation such as login, security, routing." />
          <Definition term="Local Storage" desc="Persistent browser key-value store used (sparingly) for low-risk preferences." />
          <Definition term="Pseudonymous Analytics" desc="Collected without direct identifiers; used for aggregate performance insight." />
          <Definition term="Personalization Signal" desc="Non-sensitive preference used to tailor AI tone or interface." />
        </Section>

        <div className="mt-24 text-center">
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.04]">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

function TOC() {
  return (
    <nav className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl shadow-black/40">
      <h2 className="text-xl font-semibold text-white mb-5">Table of Contents</h2>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-[15px]">
        {sections.map(s => (
          <li key={s.id} className="text-white/70 hover:text-white transition-colors"><a href={`#${s.id}`}>{s.title}</a></li>
        ))}
      </ol>
    </nav>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight"><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span></h2>
      <div className="space-y-5 text-white/80 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="list-disc ml-6 space-y-2">{items.map(i => <li key={i}>{i}</li>)}</ul>;
}

function CookieCard({ name, purpose, type, retention }: { name: string; purpose: string; type: string; retention: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-white text-sm md:text-base">{name}</h4>
        <span className="px-2 py-0.5 rounded-full text-[11px] bg-purple-500/20 text-purple-200 border border-purple-400/30">{type}</span>
      </div>
      <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-2">{purpose}</p>
      <p className="text-white/50 text-[11px]">Retention: {retention}</p>
    </div>
  );
}

function Definition({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="mb-4">
      <dt className="font-semibold text-white text-sm md:text-base">{term}</dt>
      <dd className="text-white/70 text-xs md:text-sm leading-relaxed mt-1">{desc}</dd>
    </div>
  );
}

function Callout({ children, variant = 'highlight' }: { children: React.ReactNode; variant?: 'highlight' | 'warning'; }) {
  const styles = variant === 'warning' ? 'bg-red-500/10 border-red-400/30' : 'bg-purple-500/10 border-purple-400/30';
  return <div className={`mt-8 p-5 rounded-xl border ${styles} text-white/80 text-sm md:text-base leading-relaxed backdrop-blur-sm`}>{children}</div>;
}
