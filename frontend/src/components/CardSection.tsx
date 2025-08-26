import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { ArrowRight, Code, Brain, Rocket } from "@phosphor-icons/react";

export function CardSection() {
  const cards = [
    {
      title: "Stay ahead with Phoenix AI's latest innovations",
      description: "See how our recent and upcoming releases can help your organization drive efficiency, security, and innovation.",
      buttonText: "See what's new",
      gradient: "from-green-400/20 via-blue-400/30 to-purple-600/20",
  icon: null,
      decorativeElements: (
        <>
          <div className="absolute top-4 right-4 w-8 h-8 bg-green-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-12 left-12 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce"></div>
        </>
      )
    },
    {
      title: "Measuring the impact of Phoenix AI Copilot",
      description: "Many enterprises quite reasonably ask, \"How do I know Copilot is conferring these benefits for my team?\" To answer that question, this guide will walk you through a framework for evaluating impact across four stages.",
      buttonText: "Learn more",
      gradient: "from-blue-500/20 via-purple-500/30 to-pink-500/20",
  icon: null,
      decorativeElements: (
        <>
          <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500/10 rounded-full"></div>
          <div className="absolute bottom-6 right-12 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-6 w-3 h-3 bg-pink-400/30 rounded-full animate-ping"></div>
        </>
      )
    },
    {
      title: "How developers spend the time they save thanks to AI coding tools",
      description: "Developers tell us how Phoenix AI Copilot and other AI coding tools are transforming their work and changing how they spend their days.",
      buttonText: "Learn more",
      gradient: "from-purple-500/20 via-pink-500/30 to-orange-500/20",
  icon: null,
      decorativeElements: (
        <>
          <div className="absolute top-8 right-8 w-10 h-10 bg-purple-500/15 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-5 h-5 bg-pink-400/25 rounded-full animate-bounce"></div>
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400/40 rounded-full animate-pulse"></div>
        </>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Explore Phoenix AI{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered tools are revolutionizing development workflows and enhancing productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              className="relative bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-border transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`} />
              <CardContent className="relative p-8 space-y-6 h-full flex flex-col">
                {card.decorativeElements}
                
                <div className="flex items-center gap-3">
                  {card.icon}
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center opacity-80">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-semibold leading-tight text-card-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="self-start p-0 h-auto text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200"
                >
                  {card.buttonText}
                  {/* icon removed */}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}