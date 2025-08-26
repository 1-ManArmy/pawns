// import { Shield } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function AuthPage() {
  return (
    <AgentPageTemplate
      agentName="AuthWise"
      agentDescription="Intelligent authentication and security management system. Advanced user verification, biometric authentication, security monitoring, and AI-powered threat detection for comprehensive digital protection."
  agentIcon={null}
      gradientColors="from-amber-400 via-yellow-500 to-orange-600"
      borderColor="border-amber-500/30"
      primaryColor="from-amber-500/20 via-yellow-500/20 to-orange-500/20"
      welcomeMessage="Hello! I'm AuthWise, your AI security assistant. I can help you with authentication, security monitoring, threat detection, and digital protection. How can I secure your digital presence today?"
    />
  );
}