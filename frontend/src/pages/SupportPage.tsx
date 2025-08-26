import { useLocation } from "react-router-dom";
// import { Headset } from "@phosphor-icons/react";
import { PageTemplate } from "@/components/PageTemplate";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function SupportPage() {
  const location = useLocation();
  
  // Check if accessed as AI service (carebot)
  if (location.pathname === '/carebot') {
    return (
      <AgentPageTemplate
        agentName="CareBot"
        agentDescription="Intelligent AI customer support and assistance platform. Provide instant help, answer questions, resolve issues, and deliver exceptional customer service with advanced AI-powered support automation."
        agentIcon={<Headset size={32} className="text-white" />}
        gradientColors="from-teal-400 via-green-500 to-blue-600"
        borderColor="border-teal-500/30"
        primaryColor="from-teal-500/20 via-green-500/20 to-blue-500/20"
        welcomeMessage="Hello! I'm CareBot, your AI support assistant. I can help you resolve issues, answer questions, and provide assistance with any concerns. How can I help you today?"
      />
    );
  }
  
  // Regular support page
  return (
    <PageTemplate 
      title="Support" 
      subtitle="Get help and find answers to your questions"
    />
  );
}