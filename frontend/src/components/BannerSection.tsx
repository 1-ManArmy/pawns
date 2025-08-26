import { Button } from "@/components/ui/button";
// import { Download, Star, Users } from "@phosphor-icons/react";

export function BannerSection() {
  return (
    <div className="py-24 bg-gradient-to-r from-purple-900/30 via-pink-800/20 to-blue-900/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-blue-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-8">
          {/* Main banner content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              {/* icon removed */}
              <span className="text-sm font-medium text-foreground">Premium Apps Available</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Discover Amazing{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Apps & Tools
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our collection of powerful applications designed to enhance your productivity 
              and streamline your workflow. Built with modern technology and sleek design.
            </p>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-muted-foreground">Apps Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-200 hover:scale-105 border-0"
            >
              {/* icon removed */}
              Download Apps
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-medium bg-transparent border-2 border-purple-500/50 text-foreground hover:bg-purple-500/10 rounded-full transition-all duration-200 hover:scale-105"
            >
              {/* icon removed */}
              Join Community
            </Button>
          </div>
          
          {/* Promotional line */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
            <p className="text-lg font-medium">
              🎉 Limited Time: Get{" "}
              <span className="text-purple-400 font-bold">30% OFF</span>{" "}
              on all premium apps this month!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}