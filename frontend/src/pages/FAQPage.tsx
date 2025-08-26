import React, { useState, useMemo } from 'react';
// import { CaretDown, CaretUp, MagnifyingGlass } from '@phosphor-icons/react';

type Category = 'all' | 'platform' | 'agents' | 'community' | 'creators' | 'education' | 'philosophy';

interface FAQItem { id: string; question: string; answer: string; category: Category; }

// Consolidated + expanded FAQ dataset (from homepage + provided extended FAQ content)
const FAQ_ITEMS: FAQItem[] = [
  { id: 'royal-what', category: 'platform', question: 'What is Royal AI™?', answer: 'Royal AI™ is a community-first ecosystem where every user becomes a co-creator, fusing modular AI agents with cinematic design for creators, learners, and dreamers.' },
  { id: 'royal-for-whom', category: 'community', question: 'Who is Royal AI™ built for?', answer: 'Indie devs, poetic hackers, visionary founders, curious learners—anyone wanting to build something legendary with AI.' },
  { id: 'agents-different', category: 'agents', question: 'How are Royal AI™ agents different?', answer: 'They are collaborative characters with emotional resonance and cinematic UI—not faceless tools.' },
  { id: 'customize-experience', category: 'creators', question: 'Can I customize my AI experience?', answer: 'Yes. Use modular agents, voice-triggered workflows, workspace theming, custom prompts, and personality scripting.' },
  { id: 'transparency', category: 'platform', question: 'What makes Royal AI™ transparent?', answer: 'Remixable modules, open philosophy, integrity-focused architecture, and ethical empowerment tooling.' },
  { id: 'tools-offered', category: 'creators', question: 'What tools does Royal AI™ offer?', answer: 'Terminal-native scripting, voice-to-code, story-driven UX builders, cinematic campaign launchers.' },
  { id: 'learning-journey', category: 'community', question: 'How does the learning journey work?', answer: 'Guided, adaptive, narrative-driven progression—Royal AI™ listens, evolves, and aligns with your growth.' },
  { id: 'alliance', category: 'platform', question: "What's the Grand Pa United™ alliance?", answer: 'A strategic alliance uniting OneManArmy.ai & OneLast.ai to build the most empowering AI learning & creation ecosystem.' },
  { id: 'agents-count', category: 'agents', question: 'How many AI agents are available?', answer: '24+ specialized agents (NeoChat, EmotiSense, CineGen, ContentCrafter, Memora, NetScope, and more)—each with unique personality.' },
  { id: 'cinematic-campaigns', category: 'creators', question: 'Can I create cinematic campaigns?', answer: 'Yes. Visual-first AI workflows power immersive campaign creation with minimal friction.' },
  { id: 'community-first', category: 'community', question: 'What does “community-first” mean?', answer: 'Users co-create direction, features, and cultural narrative—participatory evolution over top-down product control.' },
  { id: 'get-started', category: 'platform', question: 'How do I get started?', answer: 'Start a conversation with any agent—your first prompt begins your adaptive multiverse journey.' },
  { id: 'voice-workflows', category: 'creators', question: 'What about voice-triggered workflows?', answer: 'Voice-to-code turns spoken intent into structured tasks, scripts, or creative actions.' },
  { id: 'secure', category: 'platform', question: 'Is Royal AI™ secure?', answer: 'Yes. Protected integrity model, encryption, consent boundaries, and privacy-centered data minimization.' },
  { id: 'scale-solo-team', category: 'community', question: 'Can I scale from solo to team?', answer: 'The platform grows from individual workflows to collaborative, multi-agent orchestration.' },
  { id: 'onelast', category: 'platform', question: 'What is OneLast.ai platform?', answer: 'An ethical hacker academy-level environment for advanced, responsible AI experimentation & learning.' },
  { id: 'onemanarmy', category: 'platform', question: 'What is OneManArmy.ai platform?', answer: 'A companion platform empowering solo creators with deployable AI toolchains & creative autonomy.' },
  { id: 'founders-drive', category: 'philosophy', question: 'Who are the founders and what drives them?', answer: 'Purpose-driven visionaries prioritizing public AI literacy, empathy, and generational uplift over profit extraction.' },
  { id: 'main-mission', category: 'education', question: 'What is the main mission of Royal AI™?', answer: 'Introduce AI to younger generations—“Kiddie AI”—to co-grow foundational curiosity & ethical literacy.' },
  { id: 'approach-different', category: 'philosophy', question: 'Why is your approach different from other AI companies?', answer: 'We reject commodified, hype-driven AI; we cultivate relational, human-aligned augmentation.' },
  { id: 'teach-kids', category: 'education', question: 'How do you teach AI to kids?', answer: 'Age-appropriate companions—playful interaction seeds intuitive lifelong conceptual fluency.' },
  { id: 'ethical-hacker-academy', category: 'philosophy', question: 'What does “ethical hacker academy” mean?', answer: 'Training deep technical understanding + moral accountability for responsible AI innovation.' },
  { id: 'early-ai-education', category: 'education', question: 'Why is early AI education important?', answer: 'Early co-evolution fosters healthy cognitive models & adaptive responsibility in tech usage.' },
  { id: 'public-knowledge', category: 'community', question: 'How do you spread AI knowledge publicly?', answer: 'Workshops, open-source modules, creative labs, accessible curricula, and collaborative projects.' },
  { id: 'industry-critique', category: 'philosophy', question: "What's wrong with current AI industry practices?", answer: 'Extraction and opacity overshadow education & shared empowerment—Royal AI™ counters that.' },
  { id: 'ai-children-grow', category: 'education', question: 'How can AI and children grow together?', answer: 'Reciprocal adaptation—children learn structured thinking; AI refines supportive behaviors.' },
  { id: 'contribute', category: 'community', question: 'How can I contribute to this mission?', answer: 'Join community channels, propose modules, mentor learners, co-author educational assets.' },
  { id: 'platforms-together', category: 'platform', question: 'How do both platforms work together?', answer: 'OneLast.ai deepens competence; OneManArmy.ai accelerates creation—forming a full-spectrum growth loop.' },
  // Additional baseline operational FAQs (pulling from existing FAQSection style)
  { id: 'pricing', category: 'platform', question: 'What are your pricing options?', answer: '$5/mo, $3/week, $50/year, and early adopter lifetime tiers (see pricing page).' },
  { id: 'trial', category: 'platform', question: 'Do you offer a free trial?', answer: 'Yes—limited trial access lets you explore core agents before subscribing.' },
  { id: 'data-security', category: 'platform', question: 'How is my data protected?', answer: 'Encryption in transit & at rest, minimized retention, transparent privacy controls.' },
  { id: 'integrations', category: 'creators', question: 'Are there developer integrations?', answer: 'API + modular SDK endpoints for orchestrating agents programmatically.' },
  { id: 'cancel', category: 'platform', question: 'Can I cancel anytime?', answer: 'Yes—self‑service cancellation via account dashboard.' },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'platform', label: 'Platform' },
  { key: 'agents', label: 'AI Agents' },
  { key: 'community', label: 'Community' },
  { key: 'creators', label: 'Creators' },
  { key: 'education', label: 'AI Education' },
  { key: 'philosophy', label: 'Philosophy' },
];

export default function FAQPage() {
  const [category, setCategory] = useState<Category>('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return FAQ_ITEMS.filter(item => (
      (category === 'all' || item.category === category) &&
      (query.trim() === '' || item.question.toLowerCase().includes(query.toLowerCase()) || item.answer.toLowerCase().includes(query.toLowerCase()))
    ));
  }, [category, query]);

  return (
    <div className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-12 w-80 h-80 bg-gradient-to-br from-purple-600/15 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 right-10 w-[26rem] h-[26rem] bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2.5s]" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <header className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">FAQ</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">Royal AI™ Knowledge Hub – explore philosophy, platform mechanics, agent design, education, and creator workflows.</p>
        </header>

        <div className="mb-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border backdrop-blur-sm ${category === c.key ? 'bg-purple-600/30 border-purple-400/40 text-white shadow-lg shadow-purple-600/20' : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'}`}
              >{c.label}</button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full md:w-80">
            {/* icon removed */}
            <input
              type="text"
              placeholder="Search FAQ..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map(item => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="group relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-black/60 rounded-xl" />
                </div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenId(open ? null : item.id)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200">
                    <div>
                      <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                      <p className="text-[11px] uppercase tracking-wide text-purple-300/60 mt-1 font-medium">{item.category}</p>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 text-purple-400">{open ? null : null}</div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-6 pb-5 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />
                      <p className="text-gray-300 leading-relaxed text-sm md:text-[15px]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5">
              <p className="text-white/70 mb-2">No results found for “{query}”.</p>
              <p className="text-white/40 text-sm">Try a different keyword or switch category.</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6 text-sm">Still stuck? We can help you directly.</p>
          <a href="/support" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.04]">Open Support</a>
        </div>
      </div>
    </div>
  );
}
