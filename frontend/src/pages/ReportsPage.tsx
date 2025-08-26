// import { FileText } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function ReportsPage() {
  return (
    <AgentPageTemplate
      agentName="Reportly"
      agentDescription="Advanced AI report generation and documentation suite. Create comprehensive reports, analyze data trends, generate insights, and produce professional documents with intelligent automation and customizable templates."
      agentIcon={<FileText size={32} className="text-white" />}
      gradientColors="from-orange-400 via-red-500 to-pink-600"
      borderColor="border-orange-500/30"
      primaryColor="from-orange-500/20 via-red-500/20 to-pink-500/20"
      welcomeMessage="Hello! I'm Reportly, your AI report generation assistant. I can help you create comprehensive reports, analyze data, generate insights, and produce professional documents. What report would you like to create?"
    />
  );
}