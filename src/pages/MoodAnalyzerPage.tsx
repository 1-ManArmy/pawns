import { Heart } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function MoodAnalyzerPage() {
  return (
    <AgentPageTemplate
      agentName="EmotiSense"
      agentDescription="Advanced emotion and mood analysis AI powered by cutting-edge sentiment analysis. Understand emotional patterns, track mood changes, and gain insights into psychological well-being with precision accuracy."
      agentIcon={<Heart size={32} className="text-white" />}
      gradientColors="from-pink-400 via-red-500 to-orange-600"
      borderColor="border-pink-500/30"
      primaryColor="from-pink-500/20 via-red-500/20 to-orange-500/20"
      welcomeMessage="Hello! I'm EmotiSense, your emotion analysis AI. I can help you understand emotional patterns, analyze sentiment, and provide insights into mood and psychological well-being. How can I assist you today?"
    />
  );
}