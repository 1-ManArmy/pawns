export function BrandSection() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden min-h-screen">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
      
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large geometric patterns - no text/emoji/title as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[600px]">
          
          {/* Left Geometric Shape - Larger and more visible */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Main circle with enhanced gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 backdrop-blur-sm border-4 border-blue-400/60 shadow-2xl shadow-blue-500/30">
                <div className="absolute inset-6 rounded-full bg-black/60 backdrop-blur-lg border-2 border-cyan-400/40"></div>
              </div>
              
              {/* Inner rotating elements - more prominent */}
              <div className="absolute inset-12 rounded-full border-4 border-blue-400/60 animate-spin shadow-lg shadow-blue-400/30" style={{ animationDuration: '8s' }}>
                <div className="absolute -top-3 left-1/2 w-6 h-6 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-400/50"></div>
                <div className="absolute -left-3 top-1/2 w-5 h-5 bg-green-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-green-400/50"></div>
                <div className="absolute -right-3 top-1/2 w-5 h-5 bg-pink-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-pink-400/50"></div>
              </div>
              
              {/* Center glow - enhanced */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-r from-cyan-400/40 to-purple-400/40 blur-xl animate-pulse"></div>
              
              {/* Additional glow layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Center Geometric Shape - Enhanced hexagon */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              {/* Outer hexagonal pattern */}
              <div className="absolute inset-0 transform rotate-12">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/35 via-blue-500/35 to-cyan-500/35 backdrop-blur-sm border-4 border-purple-400/60 shadow-2xl shadow-purple-500/30" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                </div>
              </div>
              
              {/* Middle hexagon */}
              <div className="absolute inset-12 transform -rotate-6">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-lg border-3 border-cyan-400/60 shadow-xl shadow-cyan-400/20" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                </div>
              </div>
              
              {/* Inner hexagon */}
              <div className="absolute inset-24 transform rotate-3">
                <div className="w-full h-full bg-gradient-to-br from-green-500/25 via-blue-500/25 to-purple-500/25 backdrop-blur-lg border-2 border-green-400/50" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute top-6 left-6 w-4 h-4 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
              <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 left-6 w-5 h-5 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-6 right-6 w-4 h-4 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Center core */}
              <div className="absolute inset-36 rounded-full bg-gradient-to-r from-white/20 to-cyan-300/20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Right Geometric Shape - Enhanced triangle */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer triangle pattern */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-green-500/30 via-blue-500/30 to-purple-500/30 backdrop-blur-sm border-4 border-green-400/60 shadow-2xl shadow-green-500/30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                </div>
              </div>
              
              {/* Middle triangle */}
              <div className="absolute inset-16">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/35 via-purple-500/35 to-green-500/35 backdrop-blur-lg border-3 border-blue-400/60 shadow-xl shadow-blue-400/20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                </div>
              </div>
              
              {/* Inner triangle */}
              <div className="absolute inset-32">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-pink-500/30 backdrop-blur-lg border-2 border-purple-400/50" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                </div>
              </div>
              
              {/* Enhanced orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
                <div className="absolute -top-2 left-1/2 w-5 h-5 bg-green-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-green-400/50"></div>
                <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
              </div>
              
              {/* Additional glow */}
              <div className="absolute inset-8 bg-gradient-to-br from-green-400/20 via-transparent to-purple-400/20 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 border-2 border-blue-400/50 rounded-full animate-pulse shadow-lg shadow-blue-400/30"></div>
          <div className="absolute bottom-1/4 right-1/6 w-32 h-32 border-2 border-cyan-400/50 rounded-full animate-pulse shadow-lg shadow-cyan-400/30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-purple-400/50 transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-lg shadow-purple-400/30" style={{ animationDelay: '1s' }}></div>
          
          {/* Additional scattered elements */}
          <div className="absolute top-20 right-1/3 w-6 h-6 bg-cyan-400/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-2/3 right-20 w-5 h-5 bg-green-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}