// import { Microphone } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function VoiceAssistantPage() {
  return (
    <AgentPageTemplate
      agentName="VocaMind"
      agentDescription="Advanced voice AI assistant with natural language processing and speech recognition. Experience hands-free interaction, voice commands, real-time transcription, and intelligent voice-powered assistance."
      agentIcon={<Microphone size={32} className="text-white" />}
      gradientColors="from-sky-400 via-blue-500 to-indigo-600"
      borderColor="border-sky-500/30"
      primaryColor="from-sky-500/20 via-blue-500/20 to-indigo-500/20"
      welcomeMessage="Hello! I'm VocaMind, your voice AI assistant. I can help you with voice commands, transcription, natural speech interaction, and hands-free assistance. Just speak and I'll listen!"
    />
  );
}