import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Lightning } from "@phosphor-icons/react";

export function PricingSection() {
  const plans = [
    {
      name: "Weekly",
      price: "$3",
      period: "1 week",
      icon: <Lightning size={24} className="text-green-400" />,
      gradient: "from-green-400/20 via-emerald-400/30 to-teal-500/20",
      borderGradient: "from-green-400 via-emerald-400 to-teal-500",
      features: [
        "Basic AI assistance",
        "5 terminal commands per day",
        "Standard response time",
        "Email support"
      ]
    },
    {
      name: "Monthly", 
      price: "$7",
      period: "1 month",
      icon: <Star size={24} className="text-blue-400" />,
      gradient: "from-blue-400/20 via-cyan-400/30 to-indigo-500/20",
      borderGradient: "from-blue-400 via-cyan-400 to-indigo-500",
      popular: true,
      features: [
        "Advanced AI capabilities",
        "50 terminal commands per day", 
        "Priority response time",
        "Live chat support",
        "Custom templates"
      ]
    },
    {
      name: "Yearly",
      price: "$70", 
      period: "1 year",
      icon: <Crown size={24} className="text-purple-400" />,
      gradient: "from-purple-400/20 via-pink-400/30 to-violet-500/20",
      borderGradient: "from-purple-400 via-pink-400 to-violet-500",
      features: [
        "Pro AI features",
        "Unlimited commands",
        "Instant response time",
        "24/7 premium support",
        "Advanced analytics",
        "Custom integrations"
      ]
    },
    {
      name: "Lifetime",
      price: "$149",
      period: "lifetime",
      icon: <Crown size={24} className="text-amber-400" />,
      gradient: "from-amber-400/20 via-orange-400/30 to-yellow-500/20", 
      borderGradient: "from-amber-400 via-orange-400 to-yellow-500",
      features: [
        "Everything in Yearly",
        "Lifetime updates",
        "VIP support priority",
        "Beta feature access",
        "Custom AI training",
        "White-label options"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Subscription
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your development needs. All plans include core AI features with varying limits and support levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-[1.02] group overflow-hidden ${
                plan.popular 
                  ? 'border-blue-400/50 shadow-xl shadow-blue-400/20' 
                  : 'border-border/50 hover:border-border'
              }`}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-lg`}>
                <div className="w-full h-full bg-card rounded-lg"></div>
              </div>
              
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="relative text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {plan.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Pricing */}
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-card-foreground">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground">
                    {plan.period}
                  </div>
                </div>

                {/* Subscribe button */}
                <Button 
                  className={`w-full py-6 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Subscribe
                </Button>

                {/* Features list */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">Your support fuels our dreams — and builds the future of AI, together.</p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span>💳 Secure payment</span>
            <span>🔒 SSL encrypted</span>
            <span>⚡ Instant activation</span>
          </div>
        </div>
      </div>
    </section>
  );
}