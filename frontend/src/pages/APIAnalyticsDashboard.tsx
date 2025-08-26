// import { ChartBarIcon } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function APIAnalyticsDashboard() {
  return (
    <AgentPageTemplate
      agentName="DataVision"
      agentDescription="Advanced AI-powered analytics and data visualization platform. Transform complex data into actionable insights with intelligent charts, real-time monitoring, predictive analytics, and comprehensive reporting dashboards."
  agentIcon={null}
      gradientColors="from-teal-400 via-blue-500 to-indigo-600"
      borderColor="border-teal-500/30"
      primaryColor="from-teal-500/20 via-blue-500/20 to-indigo-500/20"
      welcomeMessage="Hello! I'm DataVision, your AI analytics assistant. I can help you visualize data, create reports, analyze trends, and generate actionable insights from your information. What data would you like to explore?"
    />
  );
}