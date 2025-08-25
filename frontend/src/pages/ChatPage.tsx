import { ChatCircle } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

function ChatPage() {
  return (
    <AgentPageTemplate
      agentName="NeoChat"
      agentDescription="Advanced AI conversation platform with file sharing, voice messages, and intelligent responses. Experience next-generation chat capabilities powered by cutting-edge natural language processing."
      agentIcon={<ChatCircle size={32} className="text-white" />}
      gradientColors="from-purple-400 via-pink-500 to-blue-600"
      borderColor="border-purple-500/30"
      primaryColor="from-purple-500/20 via-pink-500/20 to-blue-500/20"
      welcomeMessage="Hello! I'm NeoChat, your advanced AI conversation assistant. I can help with complex discussions, file analysis, and provide intelligent responses. How can I assist you today?"
    />
  );
}

export default ChatPage;