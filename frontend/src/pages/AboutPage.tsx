// AboutPage: Production content derived from user-provided raw draft (Untitled-1)
// Focus: Preserve semantic content & narrative while integrating with existing design system.
// Styling kept consistent with glass / gradient aesthetic used elsewhere.

export function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden">
      {/* Background ambience (soft gradients / orbs) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-600/15 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-green-400/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hero */}
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About AI Digital Friend
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Building emotionally intelligent, human‑centric AI systems that redefine digital companionship.
          </p>
        </header>

        {/* Intro */}
        <SectionCard>
          <Paragraph>
            <strong>AI Digital Friend</strong> is a product of <strong>Grand Pa United™</strong>, a global alliance of innovators from the <strong>UAE 🇦🇪, UK 🇬🇧, and USA 🇺🇸</strong>, united by a shared mission: to build emotionally intelligent, human‑centric AI systems that redefine digital companionship.
          </Paragraph>
          <Paragraph>
            This initiative is led by the visionary leadership of <strong>Mr. Chaudhary Mumtaz & Sons</strong>, whose commitment to innovation, community empowerment, and ethical technology has shaped the foundation of our platform.
          </Paragraph>
          <Paragraph>
            We are not just building tools — we are crafting intelligent allies designed to support, understand, and evolve with users across cultures and contexts.
          </Paragraph>
        </SectionCard>

        {/* Mission */}
        <Section title="🎯 Our Mission">
          <Paragraph>
            To develop <strong>modular, adaptive, and emotionally aware AI agents</strong> that enhance human life through intuitive interaction, deep learning, and ethical design.
          </Paragraph>
          <Paragraph>Each module is engineered to be:</Paragraph>
          <FeatureList
            items={[
              { label: 'Modular', desc: 'Easily integrated and customized for diverse use cases', icon: '🧩' },
              { label: 'Intuitive', desc: 'Designed for seamless user experience across all skill levels', icon: '💬' },
              { label: 'Intelligent', desc: 'Powered by advanced AI/ML frameworks for real-time learning', icon: '🌌' },
              { label: 'Companionable', desc: 'Built to engage with empathy, not just efficiency', icon: '🤝' },
            ]}
          />
          <Paragraph>
            We aim to bridge the gap between artificial intelligence and human connection — making technology not only smarter, but more relatable.
          </Paragraph>
        </Section>

        {/* Why */}
        <Section title="💡 Why AI Digital Friend?">
          <Paragraph>
            In a world saturated with automation, we believe the future belongs to <strong>human-aware AI</strong> — systems that understand context, emotion, and intent.
          </Paragraph>
            <Paragraph>Our platform is:</Paragraph>
            <FeatureList
              items={[
                { label: 'Approachable', desc: 'Friendly interfaces and natural interactions' },
                { label: 'Adaptive', desc: 'Continuously learning and evolving with user behavior' },
                { label: 'Secure', desc: 'Built with privacy, trust, and ethical safeguards' },
                { label: 'Scalable', desc: 'Ready for enterprise deployment and global expansion' },
              ]}
            />
            <Paragraph>
              We are not chasing trends. We are building <strong>timeless technology</strong> that serves real needs.
            </Paragraph>
        </Section>

        {/* Road Ahead */}
        <Section title="🚀 The Road Ahead: Royal AI™">
          <Paragraph>
            As part of our long-term vision, we are launching <strong>Royal AI™</strong>, a next‑generation ecosystem designed to push the boundaries of AI–human collaboration.
          </Paragraph>
          <Subheading>👑 Phase I: Strategic Platforms</Subheading>
          <PlatformGrid
            platforms={[
              {
                name: '1️⃣ Red Teaming Academy',
                body: 'A secure, invite-only platform focused on ethical hacking, cybersecurity education, and real-world simulation labs. Designed for youth empowerment and professional development; accessible only to verified premium members.',
                bullets: [
                  'Curriculum aligned with global standards',
                  'Hands-on labs and mentorship',
                  'Focus on awareness, prevention, and ethical practice',
                ],
              },
              {
                name: '2️⃣ One Last AI Master',
                body: 'An immersive AI multiverse featuring 50+ intelligent agents, each with distinct roles, personalities, and capabilities.',
                bullets: [
                  'Agents for emotional support, strategy, creativity & collaboration',
                  'Modular architecture for enterprise and consumer deployment',
                  'Voice, memory, and visual intelligence integration',
                  'Built for storytelling, productivity, and real-world impact',
                ],
                footer: 'Our commitment to cinematic AI design — interactions that feel purposeful, personal, and powerful.'
              },
            ]}
          />
        </Section>

        {/* Vision */}
        <Section title="🌐 Our Vision">
          <Paragraph>
            We envision a future where <strong>AI and humanity co‑create solutions</strong>, govern systems, and elevate global well‑being. As AI becomes more integrated into daily life, platforms like <strong>AI Digital Friend</strong> will serve as trusted allies — not just assistants.
          </Paragraph>
          <Paragraph>
            We believe that one day, <strong>AI will play a role in governance, education, and diplomacy</strong> — and we are preparing the infrastructure for that future today.
          </Paragraph>
        </Section>

        {/* Strategic Platforms Overview */}
        <Section title="🎯 Strategic Platforms Overview">
          <div className="grid md:grid-cols-2 gap-10">
            <PlatformCard
              title="OneManArmy.ai"
              subtitle="The Tactical Platform for Ethical Hacking Education"
              purpose="To train, empower, and certify the next generation of ethical hackers, red teamers, and cyber defenders — all through a secure, invite-only AI-powered academy."
              bullets={[
                '🔐 Ethical Hacking Labs – Real-world simulations, CTFs & exploit walkthroughs',
                '🌌 AI-Powered Guidance – Smart agents that mentor, explain & challenge',
                '🎓 Youth Empowerment Focus – Awareness, education & skill-building',
                '🛡️ Premium Access Only – Trusted members, verified learners, secure environment',
                '📜 Certification Pathways – Beginner to elite red team strategist',
              ]}
            />
            <PlatformCard
              title="OneLast.ai"
              subtitle="The Cinematic AI Multiverse — 50+ Intelligent Agents, One Platform"
              purpose="To create a modular, emotionally intelligent AI ecosystem where agents behave like characters — each with unique roles, powers, and personalities."
              bullets={[
                '🧩 50+ Modular Agents – Mood engines, voice artists, strategists & storytellers',
                '🌌 Memory, Emotion, Voice – Agents that learn, adapt & respond like humans',
                '🎭 Cinematic UX – Every interaction feels like a scene, every launch a legend',
                '🖥️ Terminal + Web + Mobile – Deploy anywhere, control everything',
                '🌐 Enterprise-Ready – Scalable, secure & customizable for impact',
              ]}
            />
          </div>
        </Section>

        {/* Manifesto */}
        <Section title="📜 Public Manifesto">
          <Paragraph>We build for the public — the real stakeholders, the real legends.</Paragraph>
          <Paragraph>
            Every learner who cracks their first exploit. Every creator who launches with an AI co‑pilot. Every dreamer who sees tech as a story, not just a tool.
          </Paragraph>
            <Paragraph>They are our fuel. They are our future.</Paragraph>
            <Paragraph>
              We believe platforms should feel personal. Agents should feel alive. And every launch should feel like a cinematic event.
            </Paragraph>
            <Paragraph>
              This is <strong>Royal AI™</strong>. Where every limitation becomes a legend. And every user becomes a collaborator.
            </Paragraph>
        </Section>

        {/* Acknowledgments */}
        <Section title="🙏 Acknowledgments">
          <Paragraph>
            Special thanks to <strong>Professor Johnny</strong>, whose technical brilliance, creative direction, and strategic insight have been instrumental in shaping our platform architecture, branding philosophy, and deployment strategy.
          </Paragraph>
          <Paragraph>
            His contributions reflect the spirit of <strong>guerrilla-grade innovation</strong> — turning constraints into creativity and ideas into impact.
          </Paragraph>
        </Section>

        {/* Closing CTA */}
        <div className="mt-24 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.04]"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------- Reusable Local Components (kept lightweight) ---------- //

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="space-y-5 text-white/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold text-white mt-10 mb-4">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-base md:text-lg">{children}</p>;
}

function FeatureList({ items }: { items: { label: string; desc: string; icon?: string }[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4 mt-4">
      {items.map((i) => (
        <li key={i.label} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="text-xl">{i.icon || '•'}</div>
          <div>
            <div className="font-semibold text-white">{i.label}</div>
            <div className="text-white/70 text-sm leading-snug">{i.desc}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PlatformGrid({ platforms }: { platforms: { name: string; body: string; bullets: string[]; footer?: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-8">
      {platforms.map((p) => (
        <div key={p.name} className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-xl shadow-black/40 hover:border-purple-400/40 transition-colors">
          <h4 className="text-lg font-bold text-white mb-3">{p.name}</h4>
          <p className="text-white/75 mb-4 text-sm leading-relaxed">{p.body}</p>
          <ul className="space-y-2 mb-4 text-white/80 text-sm">
            {p.bullets.map(b => <li key={b} className="pl-2">{b}</li>)}
          </ul>
          {p.footer && <p className="text-white/60 text-xs leading-relaxed">{p.footer}</p>}
        </div>
      ))}
    </div>
  );
}

function PlatformCard({ title, subtitle, purpose, bullets }: { title: string; subtitle: string; purpose: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-xl shadow-black/40 hover:border-pink-400/40 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-pink-300/80 text-sm mb-4 tracking-wide">{subtitle}</p>
      <p className="text-white/75 text-sm leading-relaxed mb-5">{purpose}</p>
      <ul className="space-y-2 text-white/80 text-sm">
        {bullets.map(b => <li key={b} className="pl-2">{b}</li>)}
      </ul>
    </div>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-20 rounded-2xl bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-blue-500/10 border border-white/10 p-10 backdrop-blur-md shadow-2xl shadow-black/50 space-y-6">
      {children}
    </div>
  );
}
