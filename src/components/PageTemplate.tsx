interface PageTemplateProps {
  title: string;
  subtitle: string;
}

export function PageTemplate({ title, subtitle }: PageTemplateProps) {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        
        {/* Coming Soon Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/50 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v18m9-9H3" 
              />
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          
          <p className="text-white/70 mb-8 text-lg">
            We're working hard to bring you this page. Stay tuned for updates!
          </p>
          
          {/* Progress Animation */}
          <div className="w-full bg-white/10 rounded-full h-2 mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          
          {/* Back to Home Button */}
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            ← Back to Home
          </a>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-20">
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}