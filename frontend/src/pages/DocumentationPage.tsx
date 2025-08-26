import { useLocation } from "react-router-dom";
// import { BookOpen } from "@phosphor-icons/react";
import { PageTemplate } from "@/components/PageTemplate";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function DocumentationPage() {
  const location = useLocation();
  
  // Check if accessed as AI service (documind)
  if (location.pathname === '/documind') {
    return (
      <AgentPageTemplate
        agentName="DocuMind"
        agentDescription="Advanced AI documentation and knowledge management system. Create comprehensive documentation, organize information, generate technical guides, and maintain knowledge bases with intelligent assistance."
        agentIcon={<BookOpen size={32} className="text-white" />}
        gradientColors="from-green-400 via-blue-500 to-purple-600"
        borderColor="border-green-500/30"
        primaryColor="from-green-500/20 via-blue-500/20 to-purple-500/20"
        welcomeMessage="Hello! I'm DocuMind, your AI documentation assistant. I can help you create comprehensive documentation, organize knowledge, generate guides, and maintain information systems. What documentation do you need?"
      />
    );
  }
  
  // Regular documentation page
  return (
    <PageTemplate 
      title="Documentation" 
      subtitle="Complete guides and API documentation for developers"
    />
  );
}