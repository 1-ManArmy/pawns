import { CheckSquare } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function TaskManagerPage() {
  return (
    <AgentPageTemplate
      agentName="TaskMaster"
      agentDescription="Intelligent AI-powered task management and productivity optimization platform. Organize tasks, set priorities, track progress, automate workflows, and boost productivity with smart scheduling and reminders."
      agentIcon={<CheckSquare size={32} className="text-white" />}
      gradientColors="from-emerald-400 via-teal-500 to-cyan-600"
      borderColor="border-emerald-500/30"
      primaryColor="from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
      welcomeMessage="Hello! I'm TaskMaster, your AI productivity assistant. I can help you organize tasks, set priorities, track progress, and optimize your productivity. What tasks would you like to manage today?"
    />
  );
}