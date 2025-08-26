// Removed phosphor-icons imports as per instructions

export function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Active Users",
      description: "Growing community of AI enthusiasts"
    },
    {
      value: "95%",
      label: "Success Rate",
      description: "AI model accuracy and performance"
    },
    {
      value: "50+",
      label: "AI Tools",
      description: "Comprehensive suite of AI solutions"
    },
    {
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-950/30 via-transparent to-blue-950/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the growing community of innovators who trust OneLast AI to power their future
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                {/* Value */}
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                {/* Label */}
                <div className="text-lg font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div className="pt-8">
            <p className="text-base text-muted-foreground">
              Empowering the next generation with cutting-edge AI technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}