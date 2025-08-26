// import { MagnifyingGlass } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function SearchPage() {
  return (
    <AgentPageTemplate
      agentName="InfoSeek"
      agentDescription="Revolutionary AI-powered search and information discovery platform. Find precise answers, explore topics deeply, get contextual insights, and discover relevant information with intelligent search algorithms."
  agentIcon={null}
      gradientColors="from-pink-400 via-rose-500 to-purple-600"
      borderColor="border-pink-500/30"
      primaryColor="from-pink-500/20 via-rose-500/20 to-purple-500/20"
      welcomeMessage="Hello! I'm InfoSeek, your AI search assistant. I can help you find precise information, explore topics in depth, and discover relevant insights. What would you like to search for today?"
    />
  );
}