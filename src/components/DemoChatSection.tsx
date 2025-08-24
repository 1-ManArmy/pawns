import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  PaperPlaneRight, 
  Microphone, 
  Paperclip, 
  Robot,
  User,
  FileText,
  Image as ImageIcon,
  Stop
} from "@phosphor-icons/react";

interface DemoMessage {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  attachments?: Array<{
    name: string;
    type: 'file' | 'image' | 'voice';
    size?: string;
  }>;
}

export function DemoChatSection() {
  const [messages, setMessages] = useState<DemoMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. This is a demo chat to showcase our features. How can I help you today?",
      type: "ai",
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Limit to 4 demo requests for new users
    if (requestCount >= 4) {
      const limitMessage: DemoMessage = {
        id: Date.now().toString(),
        content: "Demo limit reached! To continue unlimited conversations, please sign up for our full service at /neochat",
        type: "ai",
        timestamp: new Date()
      };
      setMessages(current => [...current, limitMessage]);
      return;
    }

    const userMessage: DemoMessage = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date()
    };

    setMessages(current => [...current, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setRequestCount(prev => prev + 1);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! In our full version, I can provide detailed analysis and comprehensive assistance.",
        "I understand your request. The complete AI service offers advanced features and unlimited conversations.",
        "This demo shows just a glimpse of our capabilities. For full functionality, visit our complete platform.",
        "Interesting! Our AI can handle complex queries with file uploads and voice messages in the full version."
      ];
      
      const aiMessage: DemoMessage = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)] + 
          (requestCount >= 3 ? " (Demo: " + (4 - requestCount) + " request remaining)" : ""),
        type: "ai",
        timestamp: new Date()
      };
      
      setMessages(current => [...current, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (requestCount >= 4) return;
    
    const files = e.target.files;
    if (!files) return;

    const demoMessage: DemoMessage = {
      id: Date.now().toString(),
      content: "File upload demo - Full functionality available in complete version!",
      type: "ai",
      timestamp: new Date()
    };

    setMessages(current => [...current, demoMessage]);
    setRequestCount(prev => prev + 1);
  };

  const toggleRecording = () => {
    if (requestCount >= 4) return;
    
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage: DemoMessage = {
          id: Date.now().toString(),
          content: "Voice recording demo completed - Enhanced voice features available in full version!",
          type: "ai",
          timestamp: new Date()
        };
        setMessages(current => [...current, voiceMessage]);
        setRequestCount(prev => prev + 1);
      }, 2000);
    }
  };

  return (
    <section className="py-16 px-6 relative bg-black overflow-hidden">
      {/* Red Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle, #dc2626 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #ef4444 0.8px, transparent 0.8px)`,
          backgroundSize: '45px 45px',
          backgroundPosition: '7px 7px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #dc2626 0.6px, transparent 0.6px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Chat with{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience natural conversations with file uploads, voice messages, and intelligent responses
          </p>
          <div className="mt-4 text-sm text-yellow-400">
            Demo Version - 4 free requests • <a href="/neochat" className="underline hover:text-yellow-300">Get Full Access</a>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-500/30 bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
            {/* Chat Header */}
            <div className="p-4 border-b border-red-500/30 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-700/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-white">AI Assistant (Demo)</span>
                  <Badge variant="secondary" className="text-xs bg-red-900/50 text-red-200 border-red-500/30">
                    {4 - requestCount} requests left
                  </Badge>
                </div>
                <div className="text-sm text-gray-400">
                  {messages.length} messages
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="h-96 p-4 bg-black/95">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-br from-red-500 to-red-600' 
                        : 'bg-gradient-to-br from-red-600 to-red-700'
                    }`}>
                      {message.type === 'user' ? <User size={16} /> : <Robot size={16} />}
                    </div>

                    {/* Message Content */}
                    <div className={`flex-1 max-w-xs lg:max-w-md ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`rounded-2xl p-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                          : 'bg-gray-900/80 text-gray-100 border border-red-500/20'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        
                        {/* Attachments */}
                        {message.attachments && (
                          <div className="mt-2 space-y-1">
                            {message.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center gap-2 text-xs opacity-80">
                                {attachment.type === 'image' && <ImageIcon size={12} />}
                                {attachment.type === 'file' && <FileText size={12} />}
                                {attachment.type === 'voice' && <Microphone size={12} />}
                                <span>{attachment.name}</span>
                                {attachment.size && <span>({attachment.size})</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white">
                      <Robot size={16} />
                    </div>
                    <div className="bg-gray-900/80 border border-red-500/20 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-red-500/30 bg-black/95">
              <div className="flex gap-2 items-end">
                {/* File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
                
                {/* File Upload Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="aspect-square p-2 border-2 border-red-500/50 bg-black/80 text-red-300 hover:bg-red-900/30 hover:border-red-400 disabled:opacity-50"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={requestCount >= 4}
                >
                  <Paperclip size={16} />
                </Button>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={requestCount >= 4 ? "Demo limit reached - Sign up for unlimited access" : "Type your message..."}
                    className="pr-12 border-2 border-red-500/50 rounded-xl bg-black/80 text-gray-100 placeholder-gray-500 focus:border-red-400 disabled:opacity-50"
                    disabled={requestCount >= 4}
                  />
                </div>

                {/* Voice Recording Button */}
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="sm"
                  className={`aspect-square p-2 border-2 transition-all duration-200 disabled:opacity-50 ${
                    isRecording 
                      ? 'border-red-400 bg-red-500/30 text-red-300 animate-pulse' 
                      : 'border-red-500/50 bg-black/80 text-red-300 hover:bg-red-900/30 hover:border-red-400'
                  }`}
                  onClick={toggleRecording}
                  disabled={requestCount >= 4}
                >
                  {isRecording ? <Stop size={16} /> : <Microphone size={16} />}
                </Button>

                {/* Send Button */}
                <Button
                  size="sm"
                  className="aspect-square p-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0 disabled:opacity-50"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || requestCount >= 4}
                >
                  <PaperPlaneRight size={16} />
                </Button>
              </div>

              {/* Recording Indicator */}
              {isRecording && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  Recording... Click stop to finish
                </div>
              )}

              {/* Demo Limit Warning */}
              {requestCount >= 4 && (
                <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-400 text-center">
                    Demo limit reached! <a href="/neochat" className="underline font-medium hover:text-yellow-300">Visit NeoChat</a> for unlimited conversations and advanced features.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}