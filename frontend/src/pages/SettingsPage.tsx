import { Gear } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function SettingsPage() {
  return (
    <AgentPageTemplate
      agentName="ConfigAI"
      agentDescription="Intelligent AI configuration and settings management center. Customize AI behavior, optimize performance, manage preferences, and fine-tune system parameters with smart configuration assistance."
      agentIcon={<Gear size={32} className="text-white" />}
      gradientColors="from-slate-400 via-gray-500 to-zinc-600"
      borderColor="border-slate-500/30"
      primaryColor="from-slate-500/20 via-gray-500/20 to-zinc-500/20"
      welcomeMessage="Hello! I'm ConfigAI, your AI configuration assistant. I can help you customize settings, optimize performance, manage preferences, and fine-tune system parameters. What would you like to configure?"
    />
  );
}