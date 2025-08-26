// import { UserCircle } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function ProfilePage() {
  return (
    <AgentPageTemplate
      agentName="PersonaX"
      agentDescription="Advanced AI personality profile and identity management system. Create detailed profiles, analyze personality traits, manage digital identities, and optimize personal branding with intelligent insights."
      agentIcon={<UserCircle size={32} className="text-white" />}
      gradientColors="from-violet-400 via-purple-500 to-indigo-600"
      borderColor="border-violet-500/30"
      primaryColor="from-violet-500/20 via-purple-500/20 to-indigo-500/20"
      welcomeMessage="Hello! I'm PersonaX, your AI profile assistant. I can help you create detailed profiles, analyze personality traits, manage digital identities, and optimize your personal brand. How can I assist with your profile today?"
    />
  );
}