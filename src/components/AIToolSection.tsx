import { Sparkle, Brain, Lightning, Robot } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export const AIToolSection = () => {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    
    const phrases = [
        "AI REVOLUTION",
        "FUTURE STARTS NOW",
        "INTELLIGENCE EVOLVED",
        "BEYOND IMAGINATION",
        "DIGITAL TRANSFORMATION"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated Circuit Background */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, transparent 98%, rgba(147, 51, 234, 0.3) 100%),
                            linear-gradient(0deg, transparent 98%, rgba(147, 51, 234, 0.3) 100%)
                        `,
                        backgroundSize: '40px 40px',
                        animation: 'circuit-flow 8s linear infinite'
                    }}
                />
                {/* Neural Network Pattern */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>
            
            {/* Floating 3D Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 3D Cubes */}
                <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg transform -rotate-45 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg transform -rotate-12 animate-float" style={{ animationDelay: '3s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Main 3D Display */}
                <div className="flex items-center justify-center min-h-[600px]">
                    {/* Central 3D Container */}
                    <div className="relative perspective-1000">
                        {/* 3D Stage */}
                        <div className="relative w-[600px] h-[400px] transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
                            {/* Main Display Screen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-950/80 to-slate-800/90 backdrop-blur-xl rounded-3xl border-2 border-purple-500/40 shadow-2xl transform rotateY-5 rotateX-5">
                                {/* Screen Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                
                                {/* Screen Border Animation */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-pink-500/50 p-[2px]">
                                    <div className="w-full h-full bg-slate-900/95 rounded-3xl" />
                                </div>
                                
                                {/* Screen Content */}
                                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                                    {/* AI Icon Cluster */}
                                    <div className="relative mb-8">
                                        <div className="flex items-center justify-center space-x-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 animate-pulse">
                                                <Brain size={32} className="text-white" />
                                            </div>
                                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center transform -rotate-6 animate-pulse" style={{ animationDelay: '0.5s' }}>
                                                <Robot size={40} className="text-white" />
                                            </div>
                                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}>
                                                <Lightning size={32} className="text-white" />
                                            </div>
                                        </div>
                                        
                                        {/* Connecting Lines */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-pink-500/50 rounded-full animate-pulse" />
                                    </div>
                                    
                                    {/* Dynamic Text Display */}
                                    <div className="text-center space-y-6">
                                        <div className="relative h-16 flex items-center justify-center">
                                            <h3 
                                                key={currentPhrase}
                                                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn"
                                            >
                                                {phrases[currentPhrase]}
                                            </h3>
                                            <Sparkle 
                                                size={24} 
                                                className="absolute -top-2 -right-8 text-yellow-400 animate-pulse" 
                                            />
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <p className="text-xl text-purple-300 font-medium tracking-wide">
                                                "Where Dreams Meet Reality"
                                            </p>
                                            <p className="text-lg text-cyan-300/80 max-w-md mx-auto leading-relaxed">
                                                Experience the future of AI-powered creativity and innovation
                                            </p>
                                        </div>
                                        
                                        {/* Interactive Elements */}
                                        <div className="flex items-center justify-center space-x-4 mt-8">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                                            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 3D Side Panels */}
                            <div className="absolute top-0 -right-8 w-16 h-full bg-gradient-to-b from-purple-600/30 to-slate-800/30 backdrop-blur-sm rounded-r-2xl border-r border-purple-500/30 transform rotateY-90 origin-left" />
                            <div className="absolute -bottom-8 left-0 w-full h-16 bg-gradient-to-r from-purple-600/30 to-slate-800/30 backdrop-blur-sm rounded-b-2xl border-b border-purple-500/30 transform rotateX-90 origin-top" />
                        </div>
                    </div>
                </div>
                
                {/* Special Quote Section */}
                <div className="text-center mt-16">
                    <div className="max-w-4xl mx-auto">
                        <blockquote className="text-2xl lg:text-3xl font-light text-cyan-300 italic leading-relaxed">
                            "The future belongs to those who understand that artificial intelligence 
                            is not about replacing human creativity, but amplifying it beyond limits."
                        </blockquote>
                        <div className="mt-6 flex items-center justify-center space-x-3">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                            <Sparkle size={20} className="text-yellow-400" />
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};