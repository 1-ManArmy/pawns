import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIToolSection } from "@/components/AIToolSection";
import { DemoChatSection } from "@/components/DemoChatSection";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { BannerSection } from "@/components/BannerSection";
import { PricingSection } from "@/components/PricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CardSection } from "@/components/CardSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export function Homepage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated Background Grid */}
            <div 
                className="fixed inset-0 opacity-[0.03] z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 30s linear infinite'
                }}
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20 z-0" />
            
            {/* Floating Gradient Orbs */}
            <div className="fixed top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse z-0" />
            <div className="fixed bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-green-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/8 via-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '4s' }} />
            
            {/* Content */}
            <div className="relative z-10">
                <Header />
                <HeroSection />
                <AIToolSection />
                <DemoChatSection />
                <TerminalDisplay />
                <BannerSection />
                <PricingSection />
                <PartnersSection />
                <CardSection />
                <FAQSection />
                <Footer />
            </div>
        </div>
    );
}