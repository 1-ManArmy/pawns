import React, { useState, useMemo } from 'react';
import {
  MagnifyingGlass,
  CaretDown,
  CaretRight,
  BookOpen,
  Lightning,
  ListChecks,
  Info,
  Warning,
  Terminal,
  Code,
  Brain
// } from '@phosphor-icons/react';

type AgentCategory =
  | 'Content Creation'
  | 'AI Companions'
  | 'Development Tools'
  | 'Data & Analytics'
  | 'Creative Arts'
  | 'Business & Productivity'
  | 'Learning & Education';

interface AgentTutorial {
  key: string;
  name: string;
  emoji: string;
  category: AgentCategory;
  description: string;
  features: string[];
  howTo: string[];
  examples: string[];
}

const AGENTS: AgentTutorial[] = [
  {
    key: 'neochat',
    name: 'NeoChat',
    emoji: '💬',
    category: 'Content Creation',
    description: 'Advanced conversational AI with emotional intelligence and natural dialogue capabilities.',
    features: [
      'Natural conversation flow',
      'Context awareness',
      'Emotional understanding',
      'Multi-language support',
      'Voice interaction'
    ],
    howTo: [
      'Start with a simple greeting',
      'Ask questions naturally',
      'Provide context for better responses',
      'Use voice commands when enabled',
      'Save important conversations'
    ],
    examples: [
      'Hello NeoChat, how are you today?',
      'Can you help me write a blog post about AI?',
      "I'm feeling stressed, can we talk?",
      'Switch to Spanish conversation mode'
    ]
  },
  {
    key: 'contentcrafter',
    name: 'ContentCrafter',
    emoji: '✍️',
    category: 'Content Creation',
    description: 'Expert content creator for blogs, articles, marketing material & creative writing.',
    features: [
      'SEO optimized output',
      'Multiple content formats',
      'Brand voice adaptation',
      'Research integration',
      'Editorial planning'
    ],
    howTo: [
      'Define your content goal',
      'Specify target audience & tone',
      'Provide topic or keywords',
      'Choose format (post, email, script)',
      'Iterate & refine draft'
    ],
    examples: [
      'Write a blog post about sustainable living',
      'Create social captions for a tech startup',
      'Generate newsletter copy for fitness enthusiasts',
      'Draft product descriptions for e‑commerce'
    ]
  },
  {
    key: 'emotisense',
    name: 'EmotiSense',
    emoji: '❤️',
    category: 'AI Companions',
    description: 'Emotional AI companion that understands and responds to feelings empathetically.',
    features: [
      'Emotion detection',
      'Empathetic responses',
      'Mood tracking',
      'Calming prompts',
      'Stress guidance'
    ],
    howTo: [
      'Share how you feel honestly',
      'Describe recent events for context',
      'Ask for emotional reframing help',
      'Track mood over multiple sessions',
      'Use guided breathing suggestions'
    ],
    examples: [
      "I'm feeling overwhelmed with work",
      'Can you help me process my emotions?',
      'I had a great day, let me share!',
      'Guide me through a breathing exercise'
    ]
  },
  {
    key: 'memora',
    name: 'Memora',
    emoji: '🌌',
    category: 'AI Companions',
    description: 'Memory companion that organizes and recalls personal context & knowledge.',
    features: [
      'Structured memory storage',
      'Smart retrieval',
      'Memory associations',
      'Progress reflection',
      'Knowledge mapping'
    ],
    howTo: [
      'Store key facts explicitly',
      'Tag related concepts',
      'Ask retrieval questions',
      'Review weekly summary',
      'Prune outdated memories'
    ],
    examples: [
      "Remember that John's birthday is March 15th",
      'What did I learn about Python yesterday?',
      'Create a study plan for exams',
      'Help organize my research notes'
    ]
  },
  {
    key: 'codeforge',
    name: 'CodeForge',
    emoji: '⚡',
    category: 'Development Tools',
    description: 'Advanced coding assistant for generation, refactor, debugging & best practices.',
    features: [
      'Code generation',
      'Bug diagnostics',
      'Optimization suggestions',
      'Inline documentation',
      'Multi-language support'
    ],
    howTo: [
      'Describe the problem clearly',
      'Specify target language/runtime',
      'Request examples or patterns',
      'Iterate with constraints (perf, memory)',
      'Ask for tests or docstrings'
    ],
    examples: [
      'Write a Python function to sort arrays',
      'Debug this JavaScript error stack',
      'Optimize my SQL query performance',
      'Generate API documentation comments'
    ]
  },
  {
    key: 'netscope',
    name: 'NetScope',
    emoji: '🌐',
    category: 'Data & Analytics',
    description: 'Web research & data synthesis agent for trends, markets & intelligence.',
    features: [
      'Market scanning',
      'Trend clustering',
      'Competitor signals',
      'Report assembly',
      'Structured exports'
    ],
    howTo: [
      'Define research objective',
      'Specify data scope & timeframe',
      'List sources or industries',
      'Refine metrics of interest',
      'Export summary for stakeholders'
    ],
    examples: [
      'Research AI trends in 2025',
      'Analyze competitor pricing tiers',
      'Find industry adoption statistics',
      'Monitor brand mentions summary'
    ]
  },
  {
    key: 'cinegen',
    name: 'CineGen',
    emoji: '🎬',
    category: 'Creative Arts',
    description: 'Cinematic narrative & visual sequence generator (scripts, scenes, beats).',
    features: [
      'Script scaffolding',
      'Scene breakdown',
      'Character arcs',
      'Genre templates',
      'Storyboard prompts'
    ],
    howTo: [
      'Outline concept & genre',
      'Define primary characters',
      'Iterate on scene pacing',
      'Request alternate endings',
      'Export production notes'
    ],
    examples: [
      'Create a short film about friendship',
      'Write a dramatic confrontation scene',
      'Develop a documentary outline',
      'Generate a marketing teaser script'
    ]
  },
  {
    key: 'tutor',
    name: 'KiddieAI Tutor',
    emoji: '👨‍🏫',
    category: 'Learning & Education',
    description: 'Friendly age‑adaptive tutor for foundational STEM & curiosity building.',
    features: [
      'Age‑aware explanations',
      'Interactive quizzes',
      'Progress tracking',
      'Encouraging feedback',
      'Safe moderation'
    ],
    howTo: [
      'Introduce age & learning goals',
      'Ask simple “why” questions',
      'Practice with mini challenges',
      'Review session recap',
      'Unlock next difficulty layer'
    ],
    examples: [
      'Teach me about volcanoes',
      'Help me practice multiplication',
      'Why is the sky blue?',
      'Let’s play a spelling game'
    ]
  }
];

const CATEGORY_ORDER: AgentCategory[] = [
  'Content Creation',
  'AI Companions',
  'Development Tools',
  'Data & Analytics',
  'Creative Arts',
  'Business & Productivity',
  'Learning & Education'
];

export function TutorialsPage() {
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<AgentCategory[]>([...CATEGORY_ORDER]);
  const [activeAgentKey, setActiveAgentKey] = useState<string | null>(null);

  const activeAgent = useMemo(() => AGENTS.find(a => a.key === activeAgentKey) || null, [activeAgentKey]);

  const grouped = useMemo(() => {
    const filter = search.trim().toLowerCase();
    return CATEGORY_ORDER.reduce<Record<string, AgentTutorial[]>>((acc, cat) => {
      acc[cat] = AGENTS.filter(a => a.category === cat && (
        !filter || a.name.toLowerCase().includes(filter) || a.description.toLowerCase().includes(filter)
      ));
      return acc;
    }, {});
  }, [search]);

  const toggleCategory = (cat: AgentCategory) => {
    setOpenCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  return (
    <div className="min-h-screen pt-24 pb-10 px-0 md:px-6 flex flex-col">
      <div className="flex flex-1 min-h-[70vh] rounded-none md:rounded-2xl overflow-hidden border-y md:border border-white/10 bg-[#1e1e1e] shadow-2xl shadow-black/40">
        {/* Sidebar */}
        <aside className="w-[300px] md:w-[340px] flex flex-col border-r border-white/10 bg-[#252526]">
          <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2 bg-[#2d2d30]">
            <BookOpen size={18} className="text-teal-300" />
            <span className="text-[13px] font-semibold tracking-wide text-gray-300 uppercase">Royal AI™ Agents</span>
          </div>
          <div className="px-4 py-3 border-b border-white/10 bg-[#2d2d30]">
            <div className="relative">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search agents..."
                className="w-full pl-9 pr-3 py-2 rounded-md text-[13px] bg-[#3c3c3c] border border-[#464647] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scroll thin-scroll py-2">
            {CATEGORY_ORDER.map(cat => (
              <div key={cat} className="mb-1">
                <button
                  onClick={() => toggleCategory(cat)}
                  className="w-full flex items-center gap-2 px-4 py-1 text-[11px] tracking-wide font-semibold text-gray-400 uppercase hover:text-gray-200"
                >
                  {openCategories.includes(cat) ? <CaretDown size={12} className="transition-transform" /> : <CaretRight size={12} className="transition-transform" />}
                  {cat}
                </button>
                <div className={`${openCategories.includes(cat) ? 'block' : 'hidden'} ml-2`}>
                  {grouped[cat] && grouped[cat].map(agent => (
                    <button
                      key={agent.key}
                      onClick={() => setActiveAgentKey(agent.key)}
                      className={`w-full text-left flex items-center gap-2 px-6 py-2 text-[13px] hover:bg-[#2a2d2e] transition-colors ${activeAgentKey === agent.key ? 'bg-[#094771] border-l-2 border-sky-500 text-white' : 'text-gray-300'}`}
                    >
                      <span className="text-base leading-none">{agent.emoji}</span>
                      <span>{agent.name}</span>
                    </button>
                  ))}
                  {grouped[cat] && grouped[cat].length === 0 && (
                    <div className="px-6 py-2 text-[11px] text-gray-500">No matches</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col bg-[#1e1e1e]">
          <div className="px-6 py-4 border-b border-white/10 bg-[#2d2d30] flex flex-col sm:flex-row sm:items-center gap-1">
            <h1 className="text-[15px] font-semibold text-gray-200 flex items-center gap-2">
              <Lightning size={16} className="text-sky-400" />
              {activeAgent ? `${activeAgent.emoji} ${activeAgent.name}` : 'Royal AI™ Tutorials & Guides'}
            </h1>
            <span className="text-[12px] text-gray-500 sm:ml-4">
              {activeAgent ? `Tutorials > ${activeAgent.category} > ${activeAgent.name}` : 'Select an agent to view tutorials'}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-8 space-y-10">
            {!activeAgent && (
              <div className="flex flex-col items-center justify-center text-center py-24 max-w-lg mx-auto">
                <Brain size={72} className="text-sky-500/40 mb-8" />
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Welcome to Royal AI™ Tutorials</h2>
                <p className="text-gray-400 text-sm leading-relaxed">Browse agents on the left to explore detailed guides, feature breakdowns, workflow steps, and practical usage examples designed to accelerate learning & mastery.</p>
              </div>
            )}
            {activeAgent && activeAgent && (
              <div className="max-w-3xl">
                <section className="mb-10">
                  <h2 className="flex items-center gap-3 text-2xl font-bold text-sky-400 mb-3">
                    <BookOpen size={24} /> Overview
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{activeAgent.description}</p>
                </section>
                <section className="mb-10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-4"><Lightning size={18} className="text-pink-400" /> Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeAgent.features.map(f => (
                      <li key={f} className="flex items-start gap-2 p-3 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300">
                        <span className="mt-0.5"><Code size={14} className="text-sky-400" /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="mb-10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-4"><ListChecks size={18} className="text-green-400" /> Getting Started</h3>
                  <ol className="space-y-3 list-decimal ml-5 text-sm text-gray-300">
                    {activeAgent.howTo.map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </section>
                <section className="mb-10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-4"><Terminal size={18} className="text-violet-400" /> Prompt Examples</h3>
                  <div className="space-y-3">
                    {activeAgent.examples.map(ex => (
                      <div key={ex} className="rounded-md bg-[#2d2d30] border border-white/10 px-4 py-3 text-[13px] font-mono text-gray-200 flex items-start gap-3">
                        <span className="text-sky-400 select-none">›</span>
                        <span className="whitespace-pre-line leading-relaxed">{ex}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="mb-10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-4"><Info size={18} className="text-sky-300" /> Tips</h3>
                  <div className="p-4 rounded-md bg-sky-500/10 border border-sky-400/30 text-sm text-sky-100 space-y-2">
                    <p>Be explicit with goals to reduce iterations & improve result alignment.</p>
                    <p>Use follow‑up prompts to refine style, tone, structure, and constraints.</p>
                  </div>
                </section>
                <section className="mb-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-4"><Warning size={18} className="text-amber-400" /> Cautions</h3>
                  <div className="p-4 rounded-md bg-amber-500/10 border border-amber-400/30 text-sm text-amber-100 space-y-2">
                    <p>Verify critical factual outputs especially for research, legal, or health topics.</p>
                    <p>Do not share sensitive personal data unless necessary & covered by privacy controls.</p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TutorialsPage;
