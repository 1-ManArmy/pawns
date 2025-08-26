// import { VideoCamera } from "@phosphor-icons/react";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function CinematicPage() {
  return (
    <AgentPageTemplate
      agentName="CineGen"
      agentDescription="Revolutionary AI-powered video and cinematic content generator. Create stunning visuals, edit videos, generate scripts, and produce professional-quality cinematic content with advanced artificial intelligence."
      agentIcon={<VideoCamera size={32} className="text-white" />}
      gradientColors="from-red-400 via-orange-500 to-yellow-600"
      borderColor="border-red-500/30"
      primaryColor="from-red-500/20 via-orange-500/20 to-yellow-500/20"
      welcomeMessage="Hello! I'm CineGen, your AI cinematic assistant. I can help you create videos, generate scripts, edit content, and produce professional-quality visuals. Let's bring your creative vision to life!"
    />
  );
}