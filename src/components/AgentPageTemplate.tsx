import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  PaperPlaneTilt, 
  Paperclip, 
  User,
  Image as ImageIcon,
  Microphone, 
  Robot,
  FileText,
  Stop
} from "@phosphor-icons/react";

interface AgentMessage {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  attachments?: {
    type: 'image' | 'file' | 'voice';
    name: string;
    size?: string;
  }[];
}

interface AgentPageTemplateProps {
  agentName: string;
  agentDescription: string;
  agentIcon: React.ReactNode;
  gradientColors: string;
  borderColor: string;
  primaryColor: string;
  welcomeMessage?: string;
}

export function AgentPageTemplate({
  agentName,
  agentDescription,
  agentIcon,
  gradientColors,
  borderColor,
  primaryColor,
  welcomeMessage
}: AgentPageTemplateProps) {
  const [messages, setMessages] = useState<AgentMessage[]>([
    {
      id: "1",
      content: welcomeMessage || `Hello! I'm ${agentName}, your specialized AI assistant. How can I help you today?`,
      type: "ai",
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: AgentMessage = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date()
    };

    setMessages(current => [...current, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `I understand your request. As ${agentName}, I'm designed to provide specialized assistance in this area.`,
        `That's an interesting question! Let me process that with my ${agentName} capabilities.`,
        `I'm analyzing your input using advanced ${agentName} algorithms. Here's what I found...`,
        `Great question! My ${agentName} intelligence can help you with that.`
      ];
      
      const aiMessage: AgentMessage = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
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
    const files = e.target.files;
    if (!files) return;

    const fileMessage: AgentMessage = {
      id: Date.now().toString(),
      content: `File received! ${agentName} is processing your upload...`,
      type: "ai",
      timestamp: new Date()
    };

    setMessages(current => [...current, fileMessage]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage: AgentMessage = {
          id: Date.now().toString(),
          content: `Voice message received! ${agentName} is analyzing your audio...`,
          type: "ai",
          timestamp: new Date()
        };
        setMessages(current => [...current, voiceMessage]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradientColors}`}>
              {agentIcon}
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
              {agentName}
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {agentDescription}
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Chat with{" "}
              <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
                {agentName}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience specialized AI assistance with file uploads, voice messages, and intelligent responses
            </p>
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto">
            <Card className={`border-2 ${borderColor} bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl`}>
              {/* Chat Header */}
              <div className={`p-4 border-b ${borderColor} bg-gradient-to-r ${primaryColor}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${primaryColor.includes('purple') ? 'bg-purple-400' : primaryColor.includes('blue') ? 'bg-blue-400' : primaryColor.includes('green') ? 'bg-green-400' : 'bg-pink-400'} rounded-full animate-pulse`}></div>
                    <span className="font-medium text-white">{agentName}</span>
                    <Badge variant="secondary" className="text-xs bg-black/50 text-gray-200 border-gray-600">
                      Active
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
                          ? `bg-gradient-to-br ${gradientColors}` 
                          : `bg-gradient-to-br ${gradientColors.replace('from-', 'from-').replace('to-', 'to-')}`
                      }`}>
                        {message.type === 'user' ? <User size={16} /> : <Robot size={16} />}
                      </div>

                      {/* Message Content */}
                      <div className={`flex-1 max-w-xs lg:max-w-md ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`rounded-2xl p-3 ${
                          message.type === 'user'
                            ? `bg-gradient-to-br ${gradientColors} text-white`
                            : `bg-gray-900/80 text-gray-100 border ${borderColor.replace('border-2', 'border')}`
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
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradientColors} flex items-center justify-center text-white`}>
                        <Robot size={16} />
                      </div>
                      <div className={`bg-gray-900/80 border ${borderColor.replace('border-2', 'border')} rounded-2xl p-3`}>
                        <div className="flex gap-1">
                          <div className={`w-2 h-2 ${primaryColor.includes('purple') ? 'bg-purple-400' : primaryColor.includes('blue') ? 'bg-blue-400' : primaryColor.includes('green') ? 'bg-green-400' : 'bg-pink-400'} rounded-full animate-bounce`}></div>
                          <div className={`w-2 h-2 ${primaryColor.includes('purple') ? 'bg-purple-400' : primaryColor.includes('blue') ? 'bg-blue-400' : primaryColor.includes('green') ? 'bg-green-400' : 'bg-pink-400'} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
                          <div className={`w-2 h-2 ${primaryColor.includes('purple') ? 'bg-purple-400' : primaryColor.includes('blue') ? 'bg-blue-400' : primaryColor.includes('green') ? 'bg-green-400' : 'bg-pink-400'} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className={`p-4 border-t ${borderColor} bg-black/95`}>
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
                    className={`aspect-square p-2 border-2 ${borderColor.replace('border-2', 'border')} bg-black/80 text-gray-300 hover:bg-gray-900/30`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip size={16} />
                  </Button>

                  {/* Text Input */}
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className={`pr-12 border-2 ${borderColor.replace('border-2', 'border')} rounded-xl bg-black/80 text-gray-100 placeholder-gray-500`}
                    />
                  </div>

                  {/* Voice Recording Button */}
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    className={`aspect-square p-2 border-2 transition-all duration-200 ${
                      isRecording 
                        ? `border-red-400 bg-red-500/30 text-red-300 animate-pulse` 
                        : `${borderColor.replace('border-2', 'border')} bg-black/80 text-gray-300 hover:bg-gray-900/30`
                    }`}
                    onClick={toggleRecording}
                  >
                    {isRecording ? <Stop size={16} /> : <Microphone size={16} />}
                  </Button>

                  {/* Send Button */}
                  <Button
                    size="sm"
                    className={`aspect-square p-2 bg-gradient-to-br ${gradientColors} border-0`}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                  >
                    <PaperPlaneTilt size={16} />
                  </Button>
                </div>

                {/* Recording Indicator */}
                {isRecording && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    Recording... Click stop to finish
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
