// Terms & Conditions (Terms of Service) – Production page
// Source: User-provided raw HTML draft (sanitized & structured)

import React from 'react';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden">
      {/* Background ambient visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-32 left-10 w-80 h-80 bg-gradient-to-br from-purple-600/15 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2.5s]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Hero */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Legal terms and conditions for using AI Digital Friend.
          </p>
          <p className="mt-6 text-sm text-white/50">Effective Date: <strong className="text-white/70 font-semibold">August 18, 2025</strong> · Last Updated: <strong className="text-white/70 font-semibold">August 18, 2025</strong></p>
        </header>

        <TableOfContents />

        <LegalSection id="acceptance" title="1. Acceptance of Terms">
          <p>Welcome to <strong>AI Digital Friend</strong>, operated by <strong>Grand Pa United™</strong>. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Grand Pa United™ ("we," "us," or "our") regarding your use of the AI Digital Friend platform and all related services.</p>
          <p>By accessing, downloading, installing, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use our services.</p>
          <Callout variant="highlight">Important: These Terms include provisions that limit our liability and require individual arbitration of disputes rather than class action lawsuits. Please read carefully.</Callout>
        </LegalSection>

        <LegalSection id="service-description" title="2. Service Description">
          <p><strong>AI Digital Friend</strong> is an advanced AI companion platform that provides:</p>
          <div className="grid sm:grid-cols-2 gap-5 my-6">
            <FeatureCard title="🤖 AI Companions" body="Emotionally intelligent AI agents designed to understand, remember, and engage in meaningful conversations." />
            <FeatureCard title="🌌 Memory Systems" body="Advanced AI memory capabilities to remember context, preferences, and build ongoing relationships." />
            <FeatureCard title="🔗 Multi-Agent Coordination" body="Seamless integration between multiple specialized AI agents for comprehensive assistance." />
            <FeatureCard title="🎓 Educational Platforms" body="Access to specialized learning environments including ethical hacking education and creative AI tools." />
          </div>
          <h3 className="legal-subheading">Royal AI™ Ecosystem</h3>
          <p>Our services are part of the broader <strong>Royal AI™ ecosystem</strong>, which includes:</p>
          <Unordered items={[
            'OneManArmy.ai: Ethical hacking education and cybersecurity training',
            'OneLast.ai: Cinematic AI multiverse with specialized creative agents',
            'Future platforms: Additional AI-powered services and tools',
          ]} />
        </LegalSection>

        <LegalSection id="account-registration" title="3. Account Registration and Security">
          <h3 className="legal-subheading">Eligibility</h3>
          <p>To use our services, you must:</p>
          <Unordered items={[
            'Be at least 13 years of age (or the legal age in your jurisdiction)',
            'Provide accurate and complete information during registration',
            'Have legal capacity to enter into this agreement',
            'Comply with all applicable laws and regulations',
          ]} />
          <h3 className="legal-subheading mt-8">Account Security</h3>
          <p>You are responsible for:</p>
          <Unordered items={[
            'Maintaining the confidentiality of your account credentials',
            'All activities that occur under your account',
            'Immediately notifying us of any unauthorized use',
            'Using strong passwords and enabling two-factor authentication when available',
          ]} />
        </LegalSection>

        <LegalSection id="acceptable-use" title="4. Acceptable Use Policy">
          <p>You agree to use our services responsibly and in accordance with these guidelines.</p>
          <h3 className="legal-subheading">Permitted Uses</h3>
          <Unordered items={[
            'Personal and educational use of AI companions',
            'Creative projects and content development',
            'Learning and skill development',
            'Research and experimentation within ethical boundaries',
          ]} />
          <div className="mt-8">
            <h3 className="legal-subheading">Prohibited Activities</h3>
            <p>You may <strong>NOT</strong> use our services to:</p>
            <Unordered items={[
              'Illegal Activities: Engage in or promote illegal activities',
              'Harmful Content: Generate harmful, abusive, or dangerous content',
              'Privacy Violations: Attempt to extract personal information from AI systems',
              'System Abuse: Overwhelm or disrupt our systems',
              'Misinformation: Deliberately spread false or misleading information',
              'Intellectual Property Violations: Infringe on copyrights, trademarks, or other IP rights',
              'Malicious Activities: Distribute malware, viruses, or harmful code',
              'Hate Speech: Promote hatred, discrimination, or violence',
            ]} />
          </div>
        </LegalSection>

        <LegalSection id="ai-interaction-guidelines" title="5. AI Interaction Guidelines">
          <h3 className="legal-subheading">Understanding AI Limitations</h3>
          <p>You acknowledge that:</p>
          <Unordered items={[
            'AI responses are generated based on training data and algorithms',
            'AI systems may occasionally provide inaccurate or inappropriate responses',
            'AI companions are not substitutes for professional medical, legal, or mental health advice',
            'AI memory systems enhance experience but may have limitations',
          ]} />
          <h3 className="legal-subheading mt-8">Responsible AI Usage</h3>
          <Unordered items={[
            'Verification: Verify important information from authoritative sources',
            'Professional Advice: Consult qualified professionals for specialized advice',
            'Appropriate Boundaries: Maintain appropriate boundaries in AI interactions',
            'Feedback: Report concerning AI behavior to our support team',
          ]} />
          <h3 className="legal-subheading mt-8">Educational Content</h3>
          <p>For educational platforms like the <strong>Red Teaming Academy</strong>:</p>
          <Unordered items={[
            'Content is provided for educational purposes only',
            'Ethical use principles must be followed at all times',
            'Practical application requires appropriate authorization and legal compliance',
            'Misuse of educational content for malicious purposes is strictly prohibited',
          ]} />
        </LegalSection>

        <LegalSection id="intellectual-property" title="6. Intellectual Property Rights">
          <h3 className="legal-subheading">Our Intellectual Property</h3>
            <p>All rights, title, and interest in and to the AI Digital Friend platform (including software, algorithms, models, user interfaces, designs, trademarks, logos, branding, documentation, training materials) remain the exclusive property of Grand Pa United™ and licensors.</p>
          <h3 className="legal-subheading mt-8">User License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable license to use our services for personal, educational, or commercial purposes as permitted by your subscription plan.</p>
          <h3 className="legal-subheading mt-8">AI-Generated Content</h3>
          <p>Content generated through our AI systems:</p>
          <Unordered items={[
            'May be used by you according to your subscription terms',
            'Should be reviewed for accuracy and appropriateness',
            'May incorporate elements from training data',
            'Is subject to copyright and applicable fair use principles',
          ]} />
        </LegalSection>

        <LegalSection id="user-content" title="7. User Content and Data">
          <h3 className="legal-subheading">Your Content</h3>
          <p>You retain ownership of content you provide, including:</p>
          <Unordered items={[
            'Messages and conversations with AI agents',
            'Files, documents, and media uploads',
            'Personal information and preferences',
            'Creative works and projects',
          ]} />
          <h3 className="legal-subheading mt-8">Content License to Us</h3>
          <p>By using our services, you grant us a limited license to:</p>
          <Unordered items={[
            'Process your content to provide services',
            'Use aggregated, anonymized data to improve AI systems',
            'Store and backup data for service delivery',
            'Analyze usage patterns for optimization',
          ]} />
          <h3 className="legal-subheading mt-8">Content Standards</h3>
          <p>All user content must:</p>
          <Unordered items={[
            'Comply with applicable laws and regulations',
            'Respect intellectual property rights',
            'Be appropriate and non-harmful',
            'Not violate our Acceptable Use Policy',
          ]} />
        </LegalSection>

        <LegalSection id="subscription-billing" title="8. Subscription and Billing">
          <h3 className="legal-subheading">Subscription Plans</h3>
          <p>We offer various subscription tiers with different features and usage limits. Subscription details include:</p>
          <Unordered items={[
            'Feature access and usage allowances',
            'Billing cycles and payment terms',
            'Upgrade and downgrade options',
            'Cancellation and refund policies',
          ]} />
          <h3 className="legal-subheading mt-8">Payment and Billing</h3>
          <Unordered items={[
            'Automatic Renewal: Subscriptions renew unless cancelled',
            'Payment Methods: Major credit cards and other methods accepted',
            'Price Changes: Adjustments with 30 days notice',
            'Taxes: You are responsible for applicable taxes',
          ]} />
          <h3 className="legal-subheading mt-8">Cancellation and Refunds</h3>
          <Unordered items={[
            'Cancel anytime; effective end of current billing period',
            'Refunds per refund policy',
            'Free trial cancellations effective immediately',
            'Prorated refunds may apply where mandated',
          ]} />
        </LegalSection>

        <LegalSection id="service-availability" title="9. Service Availability and Modifications">
          <h3 className="legal-subheading">Service Availability</h3>
          <p>We strive for high availability but cannot guarantee:</p>
          <Unordered items={[
            'Uninterrupted access',
            'Error-free operation',
            'Compatibility with all devices/software',
            'Immediate response to all requests',
          ]} />
          <h3 className="legal-subheading mt-8">Service Modifications</h3>
          <p>We reserve the right to:</p>
          <Unordered items={[
            'Modify, suspend, or discontinue services',
            'Update AI models and capabilities',
            'Change features and functionality',
            'Implement security and performance improvements',
          ]} />
        </LegalSection>

        <LegalSection id="disclaimers" title="10. Disclaimers and Warranties">
          <Callout variant="warning">
            <p className="font-semibold">IMPORTANT DISCLAIMERS:</p>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-sm md:text-base">
              <li>Services provided "AS IS" without warranties of any kind</li>
              <li>No warranty that services will be uninterrupted or error-free</li>
              <li>AI-generated content may contain inaccuracies or biases</li>
              <li>All warranties (express, implied, statutory) disclaimed</li>
            </ul>
          </Callout>
          <h3 className="legal-subheading mt-8">Professional Advice Disclaimer</h3>
          <p>AI Digital Friend is not a substitute for professional advice. AI companions:</p>
          <Unordered items={[
            'Cannot provide medical, legal, financial, or therapeutic advice',
            'Should not be relied upon for critical decisions',
            'Are designed for general information and companionship',
            'Cannot replace human professional consultation',
          ]} />
        </LegalSection>

        <LegalSection id="limitation-liability" title="11. Limitation of Liability">
          <Callout variant="warning">
            <p className="font-semibold">LIMITATION OF LIABILITY:</p>
            <p className="mt-3 text-sm md:text-base">TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRAND PA UNITED™ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES.</p>
            <p className="mt-3 text-sm md:text-base">TOTAL LIABILITY SHALL NOT EXCEED AMOUNTS PAID IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
          </Callout>
        </LegalSection>

        <LegalSection id="indemnification" title="12. Indemnification">
          <p>You agree to indemnify, defend, and hold harmless Grand Pa United™ and its affiliates, officers, directors, employees, and agents from claims arising from:</p>
          <Unordered items={[
            'Your use of services',
            'Violation of these Terms',
            'Violation of laws or regulations',
            'Infringement of third-party rights',
          ]} />
        </LegalSection>

        <LegalSection id="termination" title="13. Termination">
          <h3 className="legal-subheading">Termination by You</h3>
          <p>You may terminate your account by:</p>
          <Unordered items={[
            'Cancelling your subscription',
            'Contacting support',
            'Following account deletion procedures',
          ]} />
          <h3 className="legal-subheading mt-8">Termination by Us</h3>
          <p>We may suspend or terminate access if:</p>
          <Unordered items={[
            'You violate these Terms',
            'You engage in prohibited activities',
            'Account remains inactive for an extended period',
            'Required by law',
          ]} />
          <h3 className="legal-subheading mt-8">Effect of Termination</h3>
          <p>Upon termination:</p>
          <Unordered items={[
            'Access ceases',
            'Data may be deleted per retention policy',
            'Survival clauses remain effective',
            'Prorated refunds may apply where applicable',
          ]} />
        </LegalSection>

        <LegalSection id="governing-law" title="14. Governing Law and Jurisdiction">
          <p>These Terms are governed by the laws of [Jurisdiction TBD based on primary business operations]. Disputes will be resolved through:</p>
          <Unordered items={[
            'Good faith negotiations',
            'Binding arbitration if negotiations fail',
            'Individual arbitration (no class actions)',
            'Specified courts for certain matters',
          ]} />
        </LegalSection>

        <LegalSection id="changes-terms" title="15. Changes to Terms">
          <p>We may update these Terms to reflect:</p>
          <Unordered items={[
            'Changes in services',
            'Legal or regulatory requirements',
            'Industry best practices',
            'User feedback and needs',
          ]} />
          <p className="mt-4">Significant changes communicated via email or platform notification at least 30 days before taking effect.</p>
        </LegalSection>

        <LegalSection id="contact-information" title="16. Contact Information">
          <p>For questions about these Terms or our services contact:</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong>Legal:</strong> legal@aidigitalfriend.com<br />
                <strong>Support:</strong> support@aidigitalfriend.com<br />
                <strong>Business:</strong> business@aidigitalfriend.com
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Postal Address</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Grand Pa United™ – AI Digital Friend<br />Legal Department<br />[Address will be updated with official business address]
              </p>
            </div>
          </div>
          <Callout variant="highlight" className="mt-10">Thank you for choosing AI Digital Friend! These Terms help ensure a safe, productive, and innovative environment for all users.</Callout>
        </LegalSection>

        <div className="mt-24 text-center">
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.04]">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------------- Helper Components ---------------- //

function TableOfContents() {
  const items = [
    ['acceptance', '1. Acceptance of Terms'],
    ['service-description', '2. Service Description'],
    ['account-registration', '3. Account Registration & Security'],
    ['acceptable-use', '4. Acceptable Use Policy'],
    ['ai-interaction-guidelines', '5. AI Interaction Guidelines'],
    ['intellectual-property', '6. Intellectual Property Rights'],
    ['user-content', '7. User Content & Data'],
    ['subscription-billing', '8. Subscription & Billing'],
    ['service-availability', '9. Service Availability & Modifications'],
    ['disclaimers', '10. Disclaimers & Warranties'],
    ['limitation-liability', '11. Limitation of Liability'],
    ['indemnification', '12. Indemnification'],
    ['termination', '13. Termination'],
    ['governing-law', '14. Governing Law & Jurisdiction'],
    ['changes-terms', '15. Changes to Terms'],
    ['contact-information', '16. Contact Information'],
  ];
  return (
    <nav className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl shadow-black/40">
      <h2 className="text-xl font-semibold text-white mb-5">Table of Contents</h2>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-[15px]">
        {items.map(([id, label]) => (
          <li key={id} className="text-white/70 hover:text-white transition-colors">
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
      </h2>
      <div className="space-y-5 text-white/80 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

function Unordered({ items }: { items: string[] }) {
  return (
    <ul className="list-disc ml-6 space-y-2">
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <h4 className="font-semibold text-white mb-2 text-sm md:text-base">{title}</h4>
      <p className="text-white/70 text-xs md:text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Callout({ children, variant = 'highlight', className = '' }: { children: React.ReactNode; variant?: 'highlight' | 'warning'; className?: string }) {
  const styles = variant === 'warning'
    ? 'bg-red-500/10 border-red-400/30'
    : 'bg-purple-500/10 border-purple-400/30';
  return (
    <div className={`mt-8 p-5 rounded-xl border ${styles} text-white/80 text-sm md:text-base leading-relaxed backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
