// import { Database } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function DataDashboardPage() {
  return (
    <AgentPageTemplate
      agentName="DataSphere"
      agentDescription="Comprehensive AI data management and visualization platform. Explore datasets, create interactive dashboards, perform advanced analytics, and discover insights with intelligent data processing and machine learning."
  agentIcon={null}
      gradientColors="from-cyan-400 via-blue-500 to-purple-600"
      borderColor="border-cyan-500/30"
      primaryColor="from-cyan-500/20 via-blue-500/20 to-purple-500/20"
      welcomeMessage="Hello! I'm DataSphere, your AI data management assistant. I can help you explore datasets, create dashboards, perform analytics, and discover insights from your data. What data would you like to analyze?"
    />
  );
}