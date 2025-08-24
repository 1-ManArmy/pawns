import { HeroSection } from "@/components/HeroSection";
import { AIToolSection } from "@/components/AIToolSection";
import { DemoChatSection } from "@/components/DemoChatSection";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { StatsSection } from "@/components/StatsSection";
import { BannerSection } from "@/components/BannerSection";
import { PricingSection } from "@/components/PricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CardSection } from "@/components/CardSection";
import { FAQSection } from "@/components/FAQSection";
import { EnvironmentStatus } from "@/components/EnvironmentStatus";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "@phosphor-icons/react";

export function HomePage() {
  const [showEnvStatus, setShowEnvStatus] = useState(false);

  return (
    <div>
      {/* Environment Status - Show in development or when requested */}
      {(import.meta.env.VITE_APP_ENVIRONMENT === 'development' || showEnvStatus) && (
        <div className="container mx-auto px-4 py-4">
          <EnvironmentStatus 
            showDetails={showEnvStatus} 
            onClose={() => setShowEnvStatus(false)} 
          />
        </div>
      )}

      <HeroSection />
      <AIToolSection />
      <DemoChatSection />
      <TerminalDisplay />
      <StatsSection />
      <BannerSection />
      <PricingSection />
      <PartnersSection />
      <CardSection />
      <FAQSection />

      {/* Environment Status Toggle (Hidden in production) */}
      {import.meta.env.VITE_APP_ENVIRONMENT !== 'production' && !showEnvStatus && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowEnvStatus(true)}
            className="bg-black/50 backdrop-blur border-white/20 text-white hover:bg-white/10"
          >
            <Settings className="h-4 w-4 mr-2" />
            Environment
          </Button>
        </div>
      )}
    </div>
  );
}