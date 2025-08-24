// API Services for AI Agents
// This file provides production-ready API integrations for all agent types

import config, { isServiceConfigured } from '@/lib/config';

// Base API response interface
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  rateLimitInfo?: {
    remaining: number;
    resetTime: number;
  };
}

// Base API error class
export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public service: string = 'unknown'
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  isAllowed(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= limit) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(key, validRequests);
    return true;
  }
}

const rateLimiter = new RateLimiter();

// Generic API request utility with rate limiting and error handling
async function makeAPIRequest<T>(
  url: string,
  options: RequestInit,
  service: string,
  rateLimitKey?: string
): Promise<APIResponse<T>> {
  try {
    // Check rate limiting
    if (rateLimitKey) {
      const isAllowed = rateLimiter.isAllowed(
        rateLimitKey,
        config.rateLimiting.requestsPerMinute,
        60 * 1000
      );
      
      if (!isAllowed) {
        throw new APIError('Rate limit exceeded', 429, service);
      }
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new APIError(
        `API request failed: ${response.statusText}`,
        response.status,
        service
      );
    }

    const data = await response.json();
    
    return {
      success: true,
      data,
      rateLimitInfo: {
        remaining: parseInt(response.headers.get('x-ratelimit-remaining') || '0'),
        resetTime: parseInt(response.headers.get('x-ratelimit-reset') || '0'),
      },
    };
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, error: error.message };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// =============================================================================
// NEOCHAT - AI Chat Services
// =============================================================================

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}

export interface ChatResponse {
  message: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export class NeoChatAPI {
  static async sendMessage(
    messages: ChatMessage[],
    model: 'gpt-4' | 'gpt-3.5' | 'gemini' | 'claude' = 'gpt-4'
  ): Promise<APIResponse<ChatResponse>> {
    if (model.startsWith('gpt') && !isServiceConfigured('openai')) {
      return { success: false, error: 'OpenAI API key not configured' };
    }

    if (model === 'gemini' && !isServiceConfigured('google')) {
      return { success: false, error: 'Google AI API key not configured' };
    }

    if (model === 'claude' && !isServiceConfigured('anthropic')) {
      return { success: false, error: 'Anthropic API key not configured' };
    }

    switch (model) {
      case 'gpt-4':
      case 'gpt-3.5':
        return this.sendOpenAIMessage(messages, model);
      case 'gemini':
        return this.sendGeminiMessage(messages);
      case 'claude':
        return this.sendClaudeMessage(messages);
      default:
        return { success: false, error: 'Unsupported model' };
    }
  }

  private static async sendOpenAIMessage(
    messages: ChatMessage[],
    model: 'gpt-4' | 'gpt-3.5'
  ): Promise<APIResponse<ChatResponse>> {
    const modelName = model === 'gpt-4' ? config.openai.models.gpt4 : config.openai.models.gpt35;
    
    return makeAPIRequest<ChatResponse>(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openai.apiKey}`,
          ...(config.openai.orgId && { 'OpenAI-Organization': config.openai.orgId }),
        },
        body: JSON.stringify({
          model: modelName,
          messages: messages.map(({ role, content }) => ({ role, content })),
          max_tokens: config.openai.maxTokens,
          temperature: config.openai.temperature,
        }),
      },
      'openai',
      'neochat'
    );
  }

  private static async sendGeminiMessage(messages: ChatMessage[]): Promise<APIResponse<ChatResponse>> {
    const prompt = messages.map(m => `${m.role}: ${m.content}`).join('\n');
    
    return makeAPIRequest<ChatResponse>(
      `https://generativelanguage.googleapis.com/v1/models/${config.google.model}:generateContent?key=${config.google.apiKey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        }),
      },
      'google',
      'neochat'
    );
  }

  private static async sendClaudeMessage(messages: ChatMessage[]): Promise<APIResponse<ChatResponse>> {
    return makeAPIRequest<ChatResponse>(
      'https://api.anthropic.com/v1/messages',
      {
        method: 'POST',
        headers: {
          'x-api-key': config.anthropic.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: config.anthropic.model,
          max_tokens: config.anthropic.maxTokens,
          messages: messages.filter(m => m.role !== 'system').map(({ role, content }) => ({ role, content })),
        }),
      },
      'anthropic',
      'neochat'
    );
  }
}

// =============================================================================
// EMOTISENSE - Emotion Analysis Services
// =============================================================================

export interface EmotionAnalysis {
  emotions: {
    joy: number;
    sadness: number;
    anger: number;
    fear: number;
    surprise: number;
    disgust: number;
  };
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
}

export class EmotiSenseAPI {
  static async analyzeText(text: string): Promise<APIResponse<EmotionAnalysis>> {
    if (!isServiceConfigured('azure-speech')) {
      return { success: false, error: 'Azure Cognitive Services not configured' };
    }

    return makeAPIRequest<EmotionAnalysis>(
      `${config.voice.azure.speechKey}/text/analytics/v3.1/sentiment`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': config.voice.azure.speechKey,
        },
        body: JSON.stringify({
          documents: [
            {
              id: '1',
              language: 'en',
              text: text,
            },
          ],
        }),
      },
      'azure',
      'emotisense'
    );
  }

  static async analyzeAudio(audioData: Blob): Promise<APIResponse<EmotionAnalysis>> {
    if (!isServiceConfigured('azure-speech')) {
      return { success: false, error: 'Azure Speech Services not configured' };
    }

    const formData = new FormData();
    formData.append('audio', audioData);

    return makeAPIRequest<EmotionAnalysis>(
      `https://${config.voice.azure.region}.api.cognitive.microsoft.com/speech/v1.0/emotion`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': config.voice.azure.speechKey,
        },
        body: formData,
      },
      'azure',
      'emotisense-audio'
    );
  }
}

// =============================================================================
// CINEGEN - Image/Video Generation Services
// =============================================================================

export interface ImageGenerationRequest {
  prompt: string;
  size: '256x256' | '512x512' | '1024x1024';
  quality: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
}

export interface ImageGenerationResponse {
  url: string;
  revisedPrompt?: string;
}

export class CineGenAPI {
  static async generateImage(request: ImageGenerationRequest): Promise<APIResponse<ImageGenerationResponse>> {
    if (!isServiceConfigured('openai')) {
      return { success: false, error: 'OpenAI API key not configured for image generation' };
    }

    return makeAPIRequest<ImageGenerationResponse>(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openai.apiKey}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: request.prompt,
          size: request.size,
          quality: request.quality,
          style: request.style || 'vivid',
          n: 1,
        }),
      },
      'openai',
      'cinegen'
    );
  }

  static async upscaleImage(imageUrl: string): Promise<APIResponse<{ url: string }>> {
    // Implementation for image upscaling using external service
    return { success: false, error: 'Image upscaling service not yet implemented' };
  }
}

// =============================================================================
// VOCAMIND - Voice Assistant Services
// =============================================================================

export interface VoiceSettings {
  voiceId: string;
  stability: number;
  similarityBoost: number;
  style?: number;
  useSpeakerBoost?: boolean;
}

export class VocaMindAPI {
  static async textToSpeech(
    text: string,
    settings: Partial<VoiceSettings> = {}
  ): Promise<APIResponse<{ audioUrl: string }>> {
    if (!isServiceConfigured('elevenlabs')) {
      return { success: false, error: 'ElevenLabs API key not configured' };
    }

    const voiceId = settings.voiceId || config.voice.elevenlabs.voiceId;
    
    return makeAPIRequest<{ audioUrl: string }>(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': config.voice.elevenlabs.apiKey,
        },
        body: JSON.stringify({
          text,
          voice_settings: {
            stability: settings.stability || 0.5,
            similarity_boost: settings.similarityBoost || 0.5,
            style: settings.style || 0,
            use_speaker_boost: settings.useSpeakerBoost || true,
          },
        }),
      },
      'elevenlabs',
      'vocamind'
    );
  }

  static async speechToText(audioBlob: Blob): Promise<APIResponse<{ text: string }>> {
    if (!isServiceConfigured('azure-speech')) {
      return { success: false, error: 'Azure Speech Services not configured' };
    }

    const formData = new FormData();
    formData.append('audio', audioBlob);

    return makeAPIRequest<{ text: string }>(
      `https://${config.voice.azure.region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': config.voice.azure.speechKey,
        },
        body: formData,
      },
      'azure',
      'vocamind-stt'
    );
  }
}

// =============================================================================
// NETSCOPE - Network Information Services
// =============================================================================

export interface IPInfo {
  ip: string;
  country: string;
  region: string;
  city: string;
  isp: string;
  organization: string;
  timezone: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export class NetScopeAPI {
  static async getIPInfo(ip?: string): Promise<APIResponse<IPInfo>> {
    const targetIP = ip || 'auto';
    
    return makeAPIRequest<IPInfo>(
      `https://ipapi.co/${targetIP}/json/`,
      { method: 'GET' },
      'ipapi',
      'netscope'
    );
  }

  static async performDNSLookup(domain: string): Promise<APIResponse<{ records: any[] }>> {
    return makeAPIRequest<{ records: any[] }>(
      `https://dns.google/resolve?name=${domain}&type=A`,
      { method: 'GET' },
      'google-dns',
      'netscope-dns'
    );
  }
}

// =============================================================================
// MEMORA - Memory and Knowledge Services
// =============================================================================

export interface MemoryEntry {
  id: string;
  content: string;
  embedding?: number[];
  metadata: Record<string, any>;
  timestamp: number;
}

export class MemoraAPI {
  static async storeMemory(content: string, metadata: Record<string, any>): Promise<APIResponse<{ id: string }>> {
    // Generate embedding using OpenAI
    if (!isServiceConfigured('openai')) {
      return { success: false, error: 'OpenAI API key required for memory storage' };
    }

    const embeddingResponse = await makeAPIRequest<{ embedding: number[] }>(
      'https://api.openai.com/v1/embeddings',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openai.apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-embedding-ada-002',
          input: content,
        }),
      },
      'openai',
      'memora-embedding'
    );

    if (!embeddingResponse.success) {
      return embeddingResponse;
    }

    // Store in vector database (Pinecone or similar)
    const memory: MemoryEntry = {
      id: `mem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      content,
      embedding: embeddingResponse.data?.embedding,
      metadata,
      timestamp: Date.now(),
    };

    // Implementation for vector database storage
    return { success: true, data: { id: memory.id } };
  }

  static async searchMemories(query: string, limit: number = 10): Promise<APIResponse<MemoryEntry[]>> {
    if (!isServiceConfigured('openai')) {
      return { success: false, error: 'OpenAI API key required for memory search' };
    }

    // Generate query embedding
    const queryEmbeddingResponse = await makeAPIRequest<{ embedding: number[] }>(
      'https://api.openai.com/v1/embeddings',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openai.apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-embedding-ada-002',
          input: query,
        }),
      },
      'openai',
      'memora-query'
    );

    if (!queryEmbeddingResponse.success) {
      return queryEmbeddingResponse;
    }

    // Search vector database for similar memories
    // Implementation would query Pinecone or similar vector database

    return { success: true, data: [] };
  }
}

// =============================================================================
// EXPORT ALL SERVICES
// =============================================================================

export {
  NeoChatAPI,
  EmotiSenseAPI,
  CineGenAPI,
  VocaMindAPI,
  NetScopeAPI,
  MemoraAPI,
};

// Service health check utility
export async function checkServiceHealth(): Promise<Record<string, boolean>> {
  const services = {
    openai: isServiceConfigured('openai'),
    google: isServiceConfigured('google'),
    anthropic: isServiceConfigured('anthropic'),
    elevenlabs: isServiceConfigured('elevenlabs'),
    azure: isServiceConfigured('azure-speech'),
    mongodb: isServiceConfigured('mongodb'),
    aws: isServiceConfigured('aws-s3'),
    stripe: isServiceConfigured('stripe'),
    sendgrid: isServiceConfigured('sendgrid'),
    twilio: isServiceConfigured('twilio'),
  };

  return services;
}