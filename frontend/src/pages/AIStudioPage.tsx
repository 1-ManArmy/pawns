// import { LightbulbIcon } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function AIStudioPage() {
  return (
    <AgentPageTemplate
      agentName="IdeaForge"
      agentDescription="Revolutionary AI creative studio and innovation platform. Generate breakthrough ideas, develop concepts, create prototypes, and bring your vision to life with advanced AI-powered creative tools and inspiration."
      agentIcon={<LightbulbIcon size={32} className="text-white" />}
      gradientColors="from-lime-400 via-green-500 to-emerald-600"
      borderColor="border-lime-500/30"
      primaryColor="from-lime-500/20 via-green-500/20 to-emerald-500/20"
      welcomeMessage="Hello! I'm IdeaForge, your AI creative assistant. I can help you generate innovative ideas, develop concepts, create prototypes, and bring your creative vision to life. What would you like to create today?"
    />
  );
}