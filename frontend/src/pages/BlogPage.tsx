import { useLocation } from "react-router-dom";
// import { Article } from "@phosphor-icons/react";
import { PageTemplate } from "@/components/PageTemplate";
import { AgentPageTemplate } from "@/components/AgentPageTemplate";

export function BlogPage() {
  const location = useLocation();
  
  // Check if accessed as AI service (aiblogster)
  if (location.pathname === '/aiblogster') {
    return (
      <AgentPageTemplate
        agentName="AIBlogster"
        agentDescription="Intelligent AI-powered blogging and content creation platform. Generate engaging blog posts, optimize content for SEO, create compelling narratives, and manage your content strategy with advanced AI assistance."
  // agentIcon={<Article size={32} className="text-white" />}
        gradientColors="from-blue-400 via-indigo-500 to-purple-600"
        borderColor="border-blue-500/30"
        primaryColor="from-blue-500/20 via-indigo-500/20 to-purple-500/20"
        welcomeMessage="Hello! I'm AIBlogster, your AI blogging assistant. I can help you create engaging blog posts, optimize content, develop content strategies, and manage your blog. What would you like to write about today?"
      />
    );
  }
  
  // Regular blog page
  return (
    <PageTemplate 
      title="Blog" 
      subtitle="Latest insights, tutorials, and updates from OneLast AI"
    />
  );
}