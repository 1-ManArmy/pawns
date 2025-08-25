import React, { useEffect, useState } from 'react';
import { GithubLogo, ArrowSquareOut, Star, GitBranch, Code, RocketLaunch, Users } from '@phosphor-icons/react';

interface RepoCardData {
  name: string;
  description: string;
  topics?: string[];
  stars?: number;
  branches?: number;
  agent?: boolean;
  loading?: boolean;
}

// Static curated list (can later be fetched dynamically via backend proxy if needed)
const AGENT_REPOS: RepoCardData[] = [
  { name: 'NeoChat', description: 'Conversational core – adaptive multi‑turn emotional AI chat agent.', topics: ['agent', 'chat', 'nlp', 'emotion'], stars: 0, branches: 1, agent: true },
  { name: 'EmotiSense', description: 'Emotion understanding companion for reflective + supportive dialogue.', topics: ['agent', 'sentiment', 'wellness'], stars: 0, branches: 1, agent: true },
  { name: 'CineGen', description: 'Cinematic narrative & storyboard generation pipeline.', topics: ['story', 'script', 'creative'], stars: 0, branches: 1, agent: true },
  { name: 'ContentCrafter', description: 'Content generation & editorial orchestration toolkit.', topics: ['seo', 'content', 'writing'], stars: 0, branches: 1, agent: true },
  { name: 'Memora', description: 'Long‑term memory + contextual recall service.', topics: ['memory', 'context', 'persistence'], stars: 0, branches: 1, agent: true },
  { name: 'NetScope', description: 'Intelligent research & insight synthesis collector.', topics: ['research', 'data', 'analysis'], stars: 0, branches: 1, agent: true },
  { name: 'CodeForge', description: 'Full‑stack code generation & refactor assistant.', topics: ['devtools', 'code', 'refactor'], stars: 0, branches: 1, agent: true },
  { name: 'KiddieAI-Tutor', description: 'Age‑adaptive foundational learning tutor.', topics: ['education', 'learning', 'kids'], stars: 0, branches: 1, agent: true },
  { name: 'IdeaForge', description: 'Ideation & concept expansion engine.', topics: ['ideas', 'brainstorm', 'creativity'], stars: 0, branches: 1, agent: true },
  { name: 'PersonaX', description: 'Persona + identity simulation / testing harness.', topics: ['persona', 'simulation', 'testing'], stars: 0, branches: 1, agent: true },
];

const PLATFORM_REPOS: RepoCardData[] = [
  { name: 'platform-core', description: 'Royal AI™ unified core services, orchestration & gateway layer.', topics: ['core', 'gateway', 'infrastructure'] },
  { name: 'auth-service', description: 'Authentication & session boundary service.', topics: ['auth', 'security', 'identity'] },
  { name: 'memory-service', description: 'Centralized encrypted vector + structured memory store.', topics: ['memory', 'vectors', 'encryption'] },
  { name: 'analytics-service', description: 'Usage, performance & privacy‑respecting metrics pipeline.', topics: ['analytics', 'metrics', 'observability'] },
];

export function DevelopersPage() {
  const [agentRepos, setAgentRepos] = useState<RepoCardData[]>(AGENT_REPOS);
  const [platformRepos, setPlatformRepos] = useState<RepoCardData[]>(PLATFORM_REPOS);
  const [rateLimited, setRateLimited] = useState(false);

  useEffect(() => {
    // Attempt to enrich with live GitHub metadata (unauthenticated – subject to low rate limits)
    const controller = new AbortController();
    const fetchRepo = async (repo: RepoCardData, org: string): Promise<RepoCardData> => {
      const slug = repo.name;
      try {
        const res = await fetch(`https://api.github.com/repos/${org}/${slug}`, { signal: controller.signal });
        if (res.status === 403) { setRateLimited(true); throw new Error('rate limited'); }
        if (!res.ok) throw new Error('not found');
        const json: any = await res.json();
        const topicsRes = await fetch(`https://api.github.com/repos/${org}/${slug}/topics`, { headers: { Accept: 'application/vnd.github.mercy-preview+json' } });
        let topics: string[] | undefined = repo.topics;
        if (topicsRes.ok) {
          const tj: any = await topicsRes.json();
          if (Array.isArray(tj.names) && tj.names.length) topics = tj.names.slice(0, 6);
        }
        return { ...repo, stars: json.stargazers_count ?? repo.stars, branches: json.forks_count ?? repo.branches, topics };
      } catch {
        return repo; // fall back silently
      }
    };

    (async () => {
      const cacheKey = 'devhub_meta_v1';
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed?.agents && parsed?.platform) {
            setAgentRepos(parsed.agents);
            setPlatformRepos(parsed.platform);
            return; // skip fetch, use cache
          }
        }
      } catch { /* ignore */ }
      const org = 'onelastai';
      const enrichedAgents = await Promise.all(agentRepos.map(r => fetchRepo(r, org)));
      const enrichedPlatform = await Promise.all(platformRepos.map(r => fetchRepo(r, org)));
      setAgentRepos(enrichedAgents);
      setPlatformRepos(enrichedPlatform);
      try { sessionStorage.setItem(cacheKey, JSON.stringify({ agents: enrichedAgents, platform: enrichedPlatform })); } catch { /* ignore */ }
    })();

    return () => controller.abort();
    // intentionally run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2.8s]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/70 text-sm mb-6">
            <GithubLogo size={18} className="text-white" /> open source initiative
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">Developer Hub</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">Explore Royal AI™ agent repositories, platform service modules, and integration starter kits. Contribute, fork, extend—help shape community‑first AI infrastructure.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://github.com/onelastai" target="_blank" rel="noopener" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all">
              <GithubLogo size={20} /> Org Profile <ArrowSquareOut size={18} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://github.com/orgs/onelastai/repositories" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-all border border-white/10">All Repos <ArrowSquareOut size={18} /></a>
          </div>
        </header>

        {/* Agents Section */}
        <SectionHeading icon={<RocketLaunch size={22} className="text-pink-400" />} title="AI Agent Repositories" subtitle="Each agent is isolated for modular evolution & community contribution." />
        <RepoGrid repos={agentRepos} baseUrl="https://github.com/onelastai" loadingLabel={rateLimited ? 'Rate limit hit – showing cached list' : undefined} />

        {/* Platform Section */}
        <SectionHeading className="mt-24" icon={<Code size={22} className="text-sky-400" />} title="Platform & Core Services" subtitle="Foundational building blocks powering orchestration, memory, auth & analytics." />
        <RepoGrid repos={platformRepos} baseUrl="https://github.com/onelastai" minimal loadingLabel={rateLimited ? 'Rate limit hit – showing cached list' : undefined} />

        {/* Contribute CTA */}
        <div className="mt-28 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-6">Contribute & Extend</h2>
          <p className="text-white/70 leading-relaxed mb-10">Have ideas for new agents, optimization, or educational scaffolding? Open a discussion or submit a PR. We value clarity, privacy‑first design, and human‑centric intent.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/onelastai/.github/issues" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-colors">Open Discussion</a>
            <a href="https://github.com/onelastai" target="_blank" rel="noopener" className="group px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 flex items-center gap-2">
              Start Contributing <ArrowSquareOut size={18} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ icon, title, subtitle, className = '' }: { icon: React.ReactNode; title: string; subtitle: string; className?: string }) {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
          <p className="text-white/50 text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function RepoGrid({ repos, baseUrl, minimal = false, loadingLabel }: { repos: RepoCardData[]; baseUrl: string; minimal?: boolean; loadingLabel?: string }) {
  return (
    <div>
      {loadingLabel && (
        <div className="text-xs text-white/40 mb-2 px-1">{loadingLabel}</div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => <RepoCard key={repo.name} data={repo} baseUrl={baseUrl} minimal={minimal} />)}
      </div>
    </div>
  );
}

function RepoCard({ data, baseUrl, minimal }: { data: RepoCardData; baseUrl: string; minimal?: boolean }) {
  const url = `${baseUrl}/${data.name}`;
  return (
    <a href={url} target="_blank" rel="noopener" className="group block rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 hover:bg-white/10 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-white text-lg flex items-center gap-2">
          {data.agent && <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />}
          {data.name}
        </h3>
        <ArrowSquareOut size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[48px]">{data.description}</p>
      {!minimal && (
        <div className="flex flex-wrap gap-2 mb-4">
          {data.topics?.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[11px] uppercase tracking-wide text-white/60">{t}</span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 text-[12px] text-white/50">
        <span className="flex items-center gap-1"><Star size={14} /> {data.stars ?? 0}</span>
        <span className="flex items-center gap-1"><GitBranch size={14} /> {data.branches ?? 1}</span>
        <span className="flex items-center gap-1"><Users size={14} /> community</span>
      </div>
    </a>
  );
}

export default DevelopersPage;
