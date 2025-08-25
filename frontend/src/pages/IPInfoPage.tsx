import { Globe } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function IPInfoPage() {
  return (
    <AgentPageTemplate
      agentName="NetScope"
      agentDescription="Comprehensive network intelligence and IP analysis platform. Get detailed information about IP addresses, domains, network security, geolocation data, and advanced network diagnostics with AI-powered insights."
      agentIcon={<Globe size={32} className="text-white" />}
      gradientColors="from-yellow-400 via-orange-500 to-red-600"
      borderColor="border-yellow-500/30"
      primaryColor="from-yellow-500/20 via-orange-500/20 to-red-500/20"
      welcomeMessage="Hello! I'm NetScope, your network intelligence assistant. I can help you analyze IP addresses, domains, network security, and provide comprehensive network insights. What would you like to investigate?"
    />
  );
}