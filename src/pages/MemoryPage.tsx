import { Brain } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function MemoryPage() {
  return (
    <AgentPageTemplate
      agentName="Memora"
      agentDescription="Advanced AI memory enhancement and knowledge management system. Store, organize, retrieve, and connect information seamlessly. Boost your cognitive abilities with intelligent memory assistance and context-aware recall."
      agentIcon={<Brain size={32} className="text-white" />}
      gradientColors="from-indigo-400 via-purple-500 to-pink-600"
      borderColor="border-indigo-500/30"
      primaryColor="from-indigo-500/20 via-purple-500/20 to-pink-500/20"
      welcomeMessage="Hello! I'm Memora, your AI memory enhancement assistant. I can help you store, organize, and retrieve information, create knowledge connections, and boost your cognitive abilities. How can I enhance your memory today?"
    />
  );
}