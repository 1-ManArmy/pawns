// Privacy Policy – Production implementation based on provided raw draft.
import React from 'react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-8 w-80 h-80 bg-gradient-to-br from-purple-600/15 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 right-10 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2.5s]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Hero */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Your privacy and data security are our top priorities.
          </p>
          <p className="mt-6 text-sm text-white/50">Effective Date: <strong className="text-white/70 font-semibold">August 18, 2025</strong> · Last Updated: <strong className="text-white/70 font-semibold">August 18, 2025</strong></p>
        </header>

        <PrivacyTOC />

        <PolicySection id="introduction" title="1. Introduction">
          <p>Welcome to <strong>AI Digital Friend</strong>, operated by <strong>Grand Pa United™</strong>. This Privacy Policy explains how we collect, use, process, and protect your personal information when you use our AI-powered digital companion platform and related services.</p>
          <p><strong>AI Digital Friend</strong> is committed to building emotionally intelligent, human‑centric AI systems while maintaining the highest standards of privacy and data protection. This policy covers all our services, including:</p>
          <List items={[
            'AI Digital Friend platform and all AI agents',
            'Royal AI™ ecosystem',
            'Future platforms including OneManArmy.ai and OneLast.ai',
            'All related mobile applications, APIs, and services',
          ]} />
          <Callout variant="highlight"><strong>Our Privacy Commitment:</strong> We believe that powerful AI should come with powerful privacy protections. Your data is yours, and we are transparent about how we use it to enhance your AI experience.</Callout>
        </PolicySection>

        <PolicySection id="information-we-collect" title="2. Information We Collect">
          <p>We collect information to provide you with personalized and intelligent AI services. The types of information we collect include:</p>
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <DataCard title="🔐 Account Information" lines={['Name and email address','Password (encrypted)','Profile preferences','Account settings']} />
            <DataCard title="💬 Interaction Data" lines={['Chat conversations with AI agents','Voice recordings (with consent)','File uploads and attachments','Command history and preferences']} />
            <DataCard title="📊 Usage Analytics" lines={['Platform usage patterns','Feature engagement metrics','Performance data','Error logs and diagnostics']} />
            <DataCard title="🌐 Technical Information" lines={['IP address and general location','Device and browser information','Session data','Security logs']} />
          </div>
          <h3 className="policy-subheading">Special Categories of Data</h3>
          <p>Given the nature of AI companions, you may share sensitive personal information during conversations. We implement special protections for:</p>
          <List items={[
            'Emotional data: Mood, feelings, and emotional states',
            'Health information: Wellness discussions and mental health conversations',
            'Personal relationships: Family, friend, and relationship information',
            'Creative content: Personal stories, ideas, and creative works',
          ]} />
        </PolicySection>

        <PolicySection id="how-we-use-information" title="3. How We Use Your Information">
          <p>We use your information to:</p>
          <h3 className="policy-subheading">Core AI Services</h3>
          <List items={[
            'Personalization: Customize AI responses based on your preferences and history',
            'Memory Systems: Enable AI agents to remember context and build relationships',
            'Learning: Improve AI responses and capabilities over time',
            'Multi-Agent Coordination: Allow different AI agents to work together effectively',
          ]} />
          <h3 className="policy-subheading mt-8">Platform Operations</h3>
          <List items={[
            'Service delivery: Provide, maintain, and improve our AI services',
            'Technical support: Troubleshoot issues and provide assistance',
            'Security: Detect and prevent fraud, abuse, and threats',
            'Compliance: Meet legal obligations and enforce terms',
          ]} />
          <h3 className="policy-subheading mt-8">Research and Development</h3>
          <List items={[
            'AI Improvement: Enhance AI model performance and capabilities',
            'New Features: Develop new AI agents and platform features',
            'Anonymized Research: Conduct research using de‑identified data',
          ]} />
        </PolicySection>

        <PolicySection id="data-sharing" title="4. Data Sharing and Disclosure">
          <p><strong>We do not sell your personal data.</strong> We may share your information only in the following limited circumstances:</p>
          <h3 className="policy-subheading">Service Providers</h3>
          <p>We work with trusted third‑party providers who help us operate the platform:</p>
          <List items={[
            'Cloud Infrastructure: Secure hosting and processing',
            'AI Model Providers: OpenAI, Google AI, and others',
            'Analytics Services: Usage analytics & performance monitoring',
            'Payment Processors: Secure payment processing',
          ]} />
          <h3 className="policy-subheading mt-8">Legal Requirements</h3>
          <p>We may disclose information when required by law or to:</p>
          <List items={[
            'Comply with legal processes and government requests',
            'Protect our rights, privacy, safety, or property',
            'Enforce our terms of service',
            'Investigate potential violations',
          ]} />
          <h3 className="policy-subheading mt-8">Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred subject to equivalent protections.</p>
        </PolicySection>

        <PolicySection id="data-security" title="5. Data Security">
          <p>We implement comprehensive security measures to protect your data:</p>
          <h3 className="policy-subheading">Technical Safeguards</h3>
          <List items={[
            'Encryption: End‑to‑end encryption for sensitive transmission & storage',
            'Access Controls: Strict authentication & authorization',
            'Network Security: Firewalls, intrusion detection, secure protocols',
            'Regular Audits: Assessments & vulnerability testing',
          ]} />
          <h3 className="policy-subheading mt-8">Data Protection Practices</h3>
          <List items={[
            'Data Minimization: Collect only necessary information',
            'Retention Limits: Keep data only as long as needed',
            'Anonymization: Remove identifiers for research & analytics',
            'Secure Deletion: Proper disposal when no longer needed',
          ]} />
        </PolicySection>

        <PolicySection id="ai-specific-privacy" title="6. AI-Specific Privacy Practices">
          <p>Given our focus on AI technology, we implement special privacy considerations:</p>
          <h3 className="policy-subheading">AI Training & Model Development</h3>
          <List items={[
            'Aggregated, anonymized data improves models',
            'Personal conversations not used to train public models',
            'Opt-out options for AI improvement programs',
            'Sensitive content filtered & protected',
          ]} />
          <h3 className="policy-subheading mt-8">Memory & Context Systems</h3>
          <List items={[
            'Agents maintain context for better experiences',
            'Memory data encrypted and stored securely',
            'Users can view, edit, or delete memory data',
            'Memory respects privacy preferences',
          ]} />
          <h3 className="policy-subheading mt-8">Voice & Audio Processing</h3>
          <List items={[
            'Voice data not stored permanently unless requested',
            'Audio processing requires explicit consent',
            'No biometric identification from voice',
            'Voice features can be disabled at any time',
          ]} />
        </PolicySection>

        <PolicySection id="your-rights" title="7. Your Privacy Rights">
          <p>You have comprehensive rights regarding your personal data:</p>
          <h3 className="policy-subheading">Access & Control</h3>
          <List items={[
            'Data Access: Request copies of personal data',
            'Correction: Update inaccurate information',
            'Deletion: Request removal of personal data',
            'Portability: Export in machine‑readable format',
          ]} />
          <h3 className="policy-subheading mt-8">Privacy Controls</h3>
          <List items={[
            'Opt-out: Withdraw consent for processing',
            'Restrict Processing: Limit how we use data',
            'Object: Challenge specific processing activities',
            'Automated Decision-Making: Opt out of profiling',
          ]} />
          <h3 className="policy-subheading mt-8">How to Exercise Rights</h3>
          <p>To exercise rights you can:</p>
          <List items={[
            'Use privacy controls in account settings',
            'Email privacy@aidigitalfriend.com',
            'Submit a request via privacy portal',
            'Contact Data Protection Officer',
          ]} />
        </PolicySection>

        <PolicySection id="international-transfers" title="8. International Data Transfers">
          <p>As a global platform (UAE, UK, USA), your data may be transferred internationally. We ensure adequate protection via:</p>
          <List items={[
            'Standard Contractual Clauses (SCCs)',
            'Adequacy decisions',
            'Binding Corporate Rules',
            'Explicit consent where required',
          ]} />
        </PolicySection>

        <PolicySection id="children-privacy" title="9. Children\'s Privacy">
          <p>Services are for users 13+; we do not knowingly collect data from children under 13. If discovered, data is deleted promptly.</p>
          <p>For the <strong>Red Teaming Academy</strong>, additional protections apply:</p>
          <List items={[
            'Enhanced verification for users under 18',
            'Parental consent where applicable',
            'Special moderation & safety measures',
            'Educational focus on ethical practices',
          ]} />
        </PolicySection>

        <PolicySection id="changes" title="10. Changes to This Policy">
          <p>We may update this Privacy Policy to reflect changes in practices, technology, or legal requirements. When significant changes occur:</p>
          <List items={[
            'Notification via email or platform notice',
            'At least 30 days advance notice',
            'Previous versions retained for reference',
            'Change history available on site',
          ]} />
        </PolicySection>

        <PolicySection id="contact" title="11. Contact Information">
          <p>For privacy questions, concerns, or requests contact:</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong>Privacy Team:</strong> privacy@aidigitalfriend.com<br />
                <strong>Data Protection Officer:</strong> dpo@aidigitalfriend.com<br />
                <strong>General Inquiries:</strong> support@aidigitalfriend.com
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Postal Address</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Grand Pa United™ – AI Digital Friend<br />Privacy Office<br />[Address will be updated with official business address]
              </p>
            </div>
          </div>
          <Callout variant="highlight" className="mt-10"><strong>Remember:</strong> Your privacy is fundamental to our mission. We are committed to transparency, security, and giving you control.</Callout>
        </PolicySection>

        <div className="mt-24 text-center">
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.04]">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

// ---------- Helper Components ---------- //

function PrivacyTOC() {
  const items: [string,string][] = [
    ['introduction','1. Introduction'],
    ['information-we-collect','2. Information We Collect'],
    ['how-we-use-information','3. How We Use Your Information'],
    ['data-sharing','4. Data Sharing & Disclosure'],
    ['data-security','5. Data Security'],
    ['ai-specific-privacy','6. AI-Specific Privacy Practices'],
    ['your-rights','7. Your Privacy Rights'],
    ['international-transfers','8. International Data Transfers'],
    ['children-privacy','9. Children\'s Privacy'],
    ['changes','10. Changes to This Policy'],
    ['contact','11. Contact Information'],
  ];
  return (
    <nav className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl shadow-black/40">
      <h2 className="text-xl font-semibold text-white mb-5">Table of Contents</h2>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-[15px]">
        {items.map(([id,label]) => (
          <li key={id} className="text-white/70 hover:text-white transition-colors"><a href={`#${id}`}>{label}</a></li>
        ))}
      </ol>
    </nav>
  );
}

function PolicySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
      </h2>
      <div className="space-y-5 text-white/80 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="list-disc ml-6 space-y-2">{items.map(i => <li key={i}>{i}</li>)}</ul>;
}

function DataCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <h4 className="font-semibold text-white mb-2 text-sm md:text-base">{title}</h4>
      <ul className="space-y-1 text-white/70 text-xs md:text-sm leading-relaxed">
        {lines.map(l => <li key={l}>{l}</li>)}
      </ul>
    </div>
  );
}

function Callout({ children, variant = 'highlight', className = '' }: { children: React.ReactNode; variant?: 'highlight' | 'warning'; className?: string }) {
  const styles = variant === 'warning' ? 'bg-red-500/10 border-red-400/30' : 'bg-purple-500/10 border-purple-400/30';
  return <div className={`mt-8 p-5 rounded-xl border ${styles} text-white/80 text-sm md:text-base leading-relaxed backdrop-blur-sm ${className}`}>{children}</div>;
}
