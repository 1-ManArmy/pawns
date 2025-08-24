import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { List, X, CaretDown, Terminal, Sparkle, CaretUp, Microphone, Paperclip, PaperPlaneTilt, Code, Brain, Lightning, Shield, Users, Star, Check } from "@phosphor-icons/react";

// FAQ Data
const faqData = [
  {
    question: 'What is OneLast AI?',
    answer: 'OneLast AI is an advanced AI-powered education and productivity platform designed for youth and professionals in UAE, UK, and USA. It offers smart assistants, memory tools, and creative AI services.'
  },
  {
    question: 'How much does OneLast AI cost?',
    answer: 'Our pricing is $5/month, $3/week, or $50/year. Lifetime offers are available for early adopters.'
  },
  {
    question: 'Which AI services are included?',
    answer: 'You get access to chat assistants, document analysis, emotion AI, astrology insights, PDF tools, and more.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use advanced encryption and follow strict privacy standards. Your data is never sold or shared.'
  },
  {
    question: 'Can I use OneLast AI on mobile?',
    answer: 'Yes, our platform is fully responsive and works on all devices.'
  },
  {
    question: 'How do I sign up?',
    answer: 'Click the Sign Up button on our homepage and follow the registration steps.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit cards, PayPal, and Stripe.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime from your account dashboard.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a free trial for new users. Details are available on the pricing page.'
  },
  {
    question: 'Who is Grand Pa United?',
    answer: 'Grand Pa United is our strategic partner supporting affordable AI education for youth.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach us via the contact form or email support@onelastai.com.'
  },
  {
    question: 'Do you offer team or enterprise plans?',
    answer: 'Yes, we have special plans for schools, teams, and enterprises. Contact us for details.'
  },
  {
    question: 'What languages are supported?',
    answer: 'English is fully supported. More languages are coming soon.'
  },
  {
    question: 'Can I integrate OneLast AI with other tools?',
    answer: 'Yes, API access and integrations are available for developers.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Use the Forgot Password link on the login page to reset your password.'
  }
];

export function IndependentHomepage() {
  // State for header
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for FAQ
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // State for chat
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setMessages(prev => [...prev, 
        { type: 'user', content: chatInput },
        { type: 'ai', content: 'Thanks for your message! I\'m processing your request...' }
      ]);
      setChatInput('');
    }
  };

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
        
        {/* Header Section */}
        <header className="sticky top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 relative transition-all duration-300">
          {/* Animated bottom border - hidden when scrolled */}
          <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 animate-gradient-spin transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-white tracking-tight">
                  Leonardo.Ai
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Features Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                    <span>Features</span>
                    <CaretDown size={14} className="transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                    align="start"
                  >
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      AI Image Generation
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Real-time Canvas
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      3D Texture Generation
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Motion Generation
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Solutions Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                    <span>Solutions</span>
                    <CaretDown size={14} className="transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                    align="start"
                  >
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Marketing & Advertising
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Game Development
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Architecture & Design
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Fashion & Product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Learn Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                    <span>Learn</span>
                    <CaretDown size={14} className="transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                    align="start"
                  >
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Documentation
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Tutorials
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Community
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                      Blog
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Regular Navigation Items */}
                <a href="#teams" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                  For Teams
                </a>
                <a href="#developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                  For Developers
                </a>
                <a href="#pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                  Pricing
                </a>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                  Contact
                </a>
              </nav>

              {/* Desktop Button */}
              <div className="hidden lg:flex items-center">
                <Button 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20"
                >
                  Launch App
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white/90 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
                <nav className="flex flex-col space-y-4 pt-4">
                  <a href="#features" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    Features
                  </a>
                  <a href="#solutions" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    Solutions
                  </a>
                  <a href="#learn" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    Learn
                  </a>
                  <a href="#teams" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    For Teams
                  </a>
                  <a href="#developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    For Developers
                  </a>
                  <a href="#pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    Pricing
                  </a>
                  <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                    Contact
                  </a>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium rounded-full"
                    >
                      Launch App
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
        
        {/* Hero Section */}
        <div className="min-h-screen bg-transparent flex items-center justify-center p-6 relative pt-28">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkle size={24} className="text-purple-400" />
                  <span className="text-purple-400 font-medium">AI-Powered Terminal</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  Code with style using{" "}
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Terminal Design
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Build and design with terminal commands. Watch as your code comes to life 
                  through animated command sequences and real-time AI responses.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg font-medium border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Terminal Preview */}
            <div className="relative w-full">
              {/* Backdrop blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl backdrop-blur-sm" />
              
              {/* Main container */}
              <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <Terminal className="text-purple-400" size={20} />
                    <span className="text-sm font-medium text-gray-300">OneLast AI Preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Terminal Content Preview */}
                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">npm install onelast-ai</span>
                  </div>
                  <div className="text-purple-400 ml-4">✓ AI Revolution installed successfully</div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">ai --democratize</span>
                  </div>
                  <div className="text-cyan-400 ml-4">🚀 Changing the generation...</div>
                  
                  <div className="mt-6 p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                    <div className="text-xs text-purple-300 mb-1">// MISSION</div>
                    <div className="text-xs text-gray-400">
                      Making AI accessible to everyone
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>
                <div className="absolute top-8 -left-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
                </div>
                <div className="absolute bottom-4 -right-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              </div>
              
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Explore Phoenix AI Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the next generation of AI-powered development tools designed to transform how you build, create, and innovate.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Real-time Collaboration
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Smart Code Generation
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-500/20 text-green-300 border-green-500/30">
                    AI-Powered Insights
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Section */}
        <div className="py-24 px-6 relative">
          {/* Dark needle cones background pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.6) 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.4) 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.5) 1.5px, transparent 1.5px),
                radial-gradient(circle at 60% 20%, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px, 180px 180px, 150px 150px, 200px 200px',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Chat Assistant</h2>
              <p className="text-xl text-gray-300">Interact with our advanced AI assistant for personalized help and guidance</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Brain size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">AI Assistant</h3>
                        <p className="text-gray-400 text-sm">Online • Ready to help</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-700/50 text-gray-200'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Chat Input */}
                <div className="p-6 border-t border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                    >
                      <Paperclip size={18} />
                    </Button>
                    <div className="flex-1">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message here..."
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                    >
                      <Microphone size={18} />
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <PaperPlaneTilt size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Mission Section */}
        <div className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">UNITED MISSION</h2>
                <div className="prose prose-lg text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Empowering Youth Through AI - We believe the future belongs to those who understand it. 
                    That's why we're introducing young minds to the world of Artificial Intelligence in a way 
                    that's creative, engaging, and practical.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our mission is to inspire curiosity, spark innovation, and provide the tools needed for 
                    a smarter, faster, and more adaptable tomorrow.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With interactive modules, real-world projects, and fresh perspectives, we're building 
                    a generation ready to shape the future — not just live in it.
                  </p>
                </div>
              </div>

              {/* Right Content - Terminal */}
              <div className="relative">
                <div className="bg-gray-900/80 backdrop-blur-md border-4 border-purple-500/30 rounded-2xl p-6 shadow-2xl animate-pulse">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <Terminal className="text-purple-400" size={20} />
                      <span className="text-sm font-medium text-gray-300">Mission Terminal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="font-mono text-sm space-y-3 min-h-[300px]">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="text-gray-300">init --youth-empowerment</span>
                    </div>
                    <div className="text-cyan-400 ml-4">🚀 Initializing AI education platform...</div>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-green-400">$</span>
                      <span className="text-gray-300">deploy --mission=global</span>
                    </div>
                    <div className="text-purple-400 ml-4">✓ Mission deployed successfully</div>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-green-400">$</span>
                      <span className="text-gray-300">status --impact</span>
                    </div>
                    <div className="text-green-400 ml-4">📊 Transforming education worldwide</div>
                    
                    <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                      <div className="text-xs text-purple-300 mb-2">// IMPACT METRICS</div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Students reached: 10,000+</div>
                        <div>Countries active: 15</div>
                        <div>AI projects completed: 2,500+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Cards Section */}
        <div className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-300">Discover the capabilities that make OneLast AI exceptional</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Code size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">Smart Code Generation</CardTitle>
                  <CardDescription className="text-gray-400">
                    Generate high-quality code instantly with our advanced AI algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Multi-language support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Real-time suggestions
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Best practices included
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Brain size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">Intelligent Analysis</CardTitle>
                  <CardDescription className="text-gray-400">
                    Deep insights and analysis powered by machine learning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Pattern recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Predictive modeling
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Data visualization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Lightning size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">Lightning Fast</CardTitle>
                  <CardDescription className="text-gray-400">
                    Experience blazing fast performance with optimized AI processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Sub-second responses
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Parallel processing
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Cloud optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that works best for you</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Weekly Plan */}
              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Weekly</CardTitle>
                  <div className="text-3xl font-bold text-white">$3</div>
                  <CardDescription className="text-gray-400">Perfect for trying out</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                    Subscribe
                  </Button>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Basic AI features
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Monthly Plan */}
              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Monthly</CardTitle>
                  <div className="text-3xl font-bold text-white">$7</div>
                  <CardDescription className="text-gray-400">Most popular choice</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                    Subscribe
                  </Button>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      All AI features
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Advanced tools
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Yearly Plan */}
              <Card className="bg-gray-900/50 border-purple-500/50 backdrop-blur-sm relative border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white">Best Value</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Yearly</CardTitle>
                  <div className="text-3xl font-bold text-white">$70</div>
                  <CardDescription className="text-gray-400">Save $14 per year</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                    Subscribe
                  </Button>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      All features included
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      24/7 support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Premium tools
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      API access
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Lifetime Plan */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-400/50 backdrop-blur-sm relative border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Limited Time</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Lifetime</CardTitle>
                  <div className="text-3xl font-bold text-white">$149</div>
                  <CardDescription className="text-gray-400">One-time payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mb-4">
                    Subscribe
                  </Button>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Everything included
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Lifetime updates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      VIP support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-400" />
                      Early access
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 px-6 relative">
          {/* Purple/Pink background pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.6) 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.4) 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.5) 1.5px, transparent 1.5px),
                radial-gradient(circle at 60% 20%, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px, 180px 180px, 150px 150px, 200px 200px',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions about OneLast AI</p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <CaretUp size={20} className="text-purple-400" />
                    ) : (
                      <CaretDown size={20} className="text-purple-400" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-950/80 backdrop-blur-sm border-t border-gray-800/50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://avatars.githubusercontent.com/u/173241551?v=4" 
                    alt="OneLast AI" 
                    className="w-8 h-8 rounded-full"
                  />
                  <h3 className="text-xl font-bold text-white">OneLast AI</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering the next generation with AI-powered education and creativity tools.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-400">𝕏</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-400">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-400">@</span>
                  </div>
                </div>
              </div>

              {/* Product */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 OneLast AI. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}