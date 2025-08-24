import { FlaskConical } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function AILabPage() {
  return (
    <AgentPageTemplate
      agentName="LabX"
      agentDescription="Cutting-edge AI research laboratory and experimentation platform. Explore advanced AI models, conduct experiments, test hypotheses, and discover breakthrough technologies with state-of-the-art research tools."
      agentIcon={<FlaskConical size={32} className="text-white" />}
      gradientColors="from-fuchsia-400 via-pink-500 to-rose-600"
      borderColor="border-fuchsia-500/30"
      primaryColor="from-fuchsia-500/20 via-pink-500/20 to-rose-500/20"
      welcomeMessage="Hello! I'm LabX, your AI research assistant. I can help you explore advanced AI models, conduct experiments, test theories, and discover breakthrough technologies. What would you like to research today?"
    />
  );
}