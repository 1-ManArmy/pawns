import { PaintBrush } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function CreatorToolsPage() {
  return (
    <AgentPageTemplate
      agentName="ContentCrafter"
      agentDescription="Comprehensive AI content creation suite for creators and marketers. Generate blog posts, social media content, marketing copy, creative writing, and multimedia content with advanced AI assistance."
      agentIcon={<PaintBrush size={32} className="text-white" />}
      gradientColors="from-green-400 via-emerald-500 to-teal-600"
      borderColor="border-green-500/30"
      primaryColor="from-green-500/20 via-emerald-500/20 to-teal-500/20"
      welcomeMessage="Hello! I'm ContentCrafter, your AI content creation assistant. I can help you craft engaging blog posts, social media content, marketing copy, and creative writing. What would you like to create today?"
    />
  );
}