// Environment Configuration Types and Utilities
// This file provides type-safe access to environment variables

export interface EnvironmentConfig {
  // Core Application
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
    url: string;
    apiBaseUrl: string;
  };

  // Authentication & Security
  auth: {
    jwtSecret: string;
    encryptionKey: string;
    sessionTimeout: number;
    maxLoginAttempts: number;
  };

  // AI Services - OpenAI
  openai: {
    apiKey: string;
    orgId?: string;
    models: {
      gpt4: string;
      gpt35: string;
    };
    maxTokens: number;
    temperature: number;
  };

  // AI Services - Anthropic
  anthropic: {
    apiKey: string;
    model: string;
    maxTokens: number;
  };

  // AI Services - Google
  google: {
    apiKey: string;
    model: string;
    visionModel: string;
  };

  // Voice Services
  voice: {
    elevenlabs: {
      apiKey: string;
      voiceId: string;
    };
    azure: {
      speechKey: string;
      region: string;
    };
  };

  // Storage & Database
  storage: {
    mongodb: {
      uri: string;
    };
    redis: {
      url: string;
      password?: string;
    };
    aws: {
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
      s3Bucket: string;
    };
  };

  // Third-party Integrations
  integrations: {
    github: {
      clientId: string;
      clientSecret: string;
    };
    google: {
      clientId: string;
      clientSecret: string;
    };
    stripe: {
      publishableKey: string;
      secretKey: string;
      webhookSecret: string;
    };
  };

  // Analytics & Monitoring
  analytics: {
    googleAnalyticsId?: string;
    sentryDsn?: string;
    logRocketAppId?: string;
  };

  // Communication
  communication: {
    sendgrid: {
      apiKey: string;
      fromEmail: string;
    };
    twilio: {
      accountSid: string;
      authToken: string;
      phoneNumber: string;
    };
  };

  // Rate Limiting
  rateLimiting: {
    requestsPerMinute: number;
    requestsPerHour: number;
    requestsPerDay: number;
  };

  // Development Settings
  development: {
    debugMode: boolean;
    mockApi: boolean;
    enableAnalytics: boolean;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
  };

  // Security Settings
  security: {
    corsOrigins: string[];
    enableHttps: boolean;
    sessionSecure: boolean;
    cookieSecure: boolean;
    csrfProtection: boolean;
  };
}

// Utility function to get environment variables with defaults and validation
function getEnvVar(key: string, defaultValue?: string, required: boolean = false): string {
  const value = import.meta.env[key] || defaultValue;
  
  if (required && !value) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  
  return value || '';
}

function getEnvVarAsNumber(key: string, defaultValue: number, required: boolean = false): number {
  const value = getEnvVar(key, String(defaultValue), required);
  const parsed = parseInt(value, 10);
  
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }
  
  return parsed;
}

function getEnvVarAsBoolean(key: string, defaultValue: boolean, required: boolean = false): boolean {
  const value = getEnvVar(key, String(defaultValue), required);
  return value.toLowerCase() === 'true';
}

function getEnvVarAsArray(key: string, defaultValue: string[] = [], required: boolean = false): string[] {
  const value = getEnvVar(key, defaultValue.join(','), required);
  return value ? value.split(',').map(item => item.trim()) : defaultValue;
}

// Environment configuration object
export const config: EnvironmentConfig = {
  app: {
    name: getEnvVar('VITE_APP_NAME', 'OneLast AI'),
    version: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    environment: getEnvVar('VITE_APP_ENVIRONMENT', 'development') as 'development' | 'staging' | 'production',
    url: getEnvVar('VITE_APP_URL', 'http://localhost:5173'),
    apiBaseUrl: getEnvVar('VITE_APP_API_BASE_URL', 'http://localhost:3000/api'),
  },

  auth: {
    jwtSecret: getEnvVar('VITE_JWT_SECRET', 'your-default-jwt-secret', true),
    encryptionKey: getEnvVar('VITE_ENCRYPTION_KEY', 'your-default-encryption-key'),
    sessionTimeout: getEnvVarAsNumber('VITE_SESSION_TIMEOUT', 3600),
    maxLoginAttempts: getEnvVarAsNumber('VITE_MAX_LOGIN_ATTEMPTS', 5),
  },

  openai: {
    apiKey: getEnvVar('VITE_OPENAI_API_KEY', ''),
    orgId: getEnvVar('VITE_OPENAI_ORG_ID'),
    models: {
      gpt4: getEnvVar('VITE_OPENAI_MODEL_GPT4', 'gpt-4o'),
      gpt35: getEnvVar('VITE_OPENAI_MODEL_GPT35', 'gpt-3.5-turbo'),
    },
    maxTokens: getEnvVarAsNumber('VITE_OPENAI_MAX_TOKENS', 4000),
    temperature: parseFloat(getEnvVar('VITE_OPENAI_TEMPERATURE', '0.7')),
  },

  anthropic: {
    apiKey: getEnvVar('VITE_ANTHROPIC_API_KEY', ''),
    model: getEnvVar('VITE_ANTHROPIC_MODEL', 'claude-3-opus-20240229'),
    maxTokens: getEnvVarAsNumber('VITE_ANTHROPIC_MAX_TOKENS', 4000),
  },

  google: {
    apiKey: getEnvVar('VITE_GOOGLE_API_KEY', ''),
    model: getEnvVar('VITE_GOOGLE_MODEL', 'gemini-pro'),
    visionModel: getEnvVar('VITE_GOOGLE_VISION_MODEL', 'gemini-pro-vision'),
  },

  voice: {
    elevenlabs: {
      apiKey: getEnvVar('VITE_ELEVENLABS_API_KEY', ''),
      voiceId: getEnvVar('VITE_ELEVENLABS_VOICE_ID', ''),
    },
    azure: {
      speechKey: getEnvVar('VITE_AZURE_SPEECH_KEY', ''),
      region: getEnvVar('VITE_AZURE_SPEECH_REGION', ''),
    },
  },

  storage: {
    mongodb: {
      uri: getEnvVar('VITE_MONGODB_URI', 'mongodb://localhost:27017/onelastai'),
    },
    redis: {
      url: getEnvVar('VITE_REDIS_URL', 'redis://localhost:6379'),
      password: getEnvVar('VITE_REDIS_PASSWORD'),
    },
    aws: {
      accessKeyId: getEnvVar('VITE_AWS_ACCESS_KEY_ID', ''),
      secretAccessKey: getEnvVar('VITE_AWS_SECRET_ACCESS_KEY', ''),
      region: getEnvVar('VITE_AWS_REGION', 'us-west-2'),
      s3Bucket: getEnvVar('VITE_AWS_S3_BUCKET', 'onelastai-files'),
    },
  },

  integrations: {
    github: {
      clientId: getEnvVar('VITE_GITHUB_CLIENT_ID', ''),
      clientSecret: getEnvVar('VITE_GITHUB_CLIENT_SECRET', ''),
    },
    google: {
      clientId: getEnvVar('VITE_GOOGLE_CLIENT_ID', ''),
      clientSecret: getEnvVar('VITE_GOOGLE_CLIENT_SECRET', ''),
    },
    stripe: {
      publishableKey: getEnvVar('VITE_STRIPE_PUBLISHABLE_KEY', ''),
      secretKey: getEnvVar('VITE_STRIPE_SECRET_KEY', ''),
      webhookSecret: getEnvVar('VITE_STRIPE_WEBHOOK_SECRET', ''),
    },
  },

  analytics: {
    googleAnalyticsId: getEnvVar('VITE_GA_TRACKING_ID'),
    sentryDsn: getEnvVar('VITE_SENTRY_DSN'),
    logRocketAppId: getEnvVar('VITE_LOGROCKET_APP_ID'),
  },

  communication: {
    sendgrid: {
      apiKey: getEnvVar('VITE_SENDGRID_API_KEY', ''),
      fromEmail: getEnvVar('VITE_SENDGRID_FROM_EMAIL', 'noreply@onelastai.com'),
    },
    twilio: {
      accountSid: getEnvVar('VITE_TWILIO_ACCOUNT_SID', ''),
      authToken: getEnvVar('VITE_TWILIO_AUTH_TOKEN', ''),
      phoneNumber: getEnvVar('VITE_TWILIO_PHONE_NUMBER', ''),
    },
  },

  rateLimiting: {
    // Use very high defaults (local preference) but allow env override
    requestsPerMinute: getEnvVarAsNumber('VITE_RATE_LIMIT_REQUESTS_PER_MINUTE', 1000000),
    requestsPerHour: getEnvVarAsNumber('VITE_RATE_LIMIT_REQUESTS_PER_HOUR', 10000000),
    requestsPerDay: getEnvVarAsNumber('VITE_RATE_LIMIT_REQUESTS_PER_DAY', 100000000),
  },

  development: {
    // Keep permissive local defaults while supporting env overrides
    debugMode: getEnvVarAsBoolean('VITE_DEBUG_MODE', true),
    mockApi: getEnvVarAsBoolean('VITE_MOCK_API', false),
    enableAnalytics: getEnvVarAsBoolean('VITE_ENABLE_ANALYTICS', true),
    logLevel: getEnvVar('VITE_LOG_LEVEL', 'debug') as 'debug' | 'info' | 'warn' | 'error',
  },

  security: {
    // Allow all origins by default locally; env can restrict
    corsOrigins: getEnvVarAsArray('VITE_CORS_ORIGINS', ['*']),
    enableHttps: getEnvVarAsBoolean('VITE_ENABLE_HTTPS', true),
    sessionSecure: getEnvVarAsBoolean('VITE_SESSION_SECURE', true),
    cookieSecure: getEnvVarAsBoolean('VITE_COOKIE_SECURE', true),
    csrfProtection: getEnvVarAsBoolean('VITE_CSRF_PROTECTION', true),
  },
};

// Validation function to check if required services are configured
export function validateEnvironment(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check required services
  if (!config.openai.apiKey && !config.google.apiKey && !config.anthropic.apiKey) {
    errors.push('At least one AI service API key is required (OpenAI, Google AI, or Anthropic)');
  }

  if (config.app.environment === 'production') {
    if (!config.auth.jwtSecret || config.auth.jwtSecret === 'your-default-jwt-secret') {
      errors.push('JWT secret must be set for production environment');
    }

    if (!config.security.enableHttps) {
      errors.push('HTTPS must be enabled for production environment');
    }

    if (!config.analytics.googleAnalyticsId) {
      errors.push('Google Analytics should be configured for production');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Helper function to check if a service is configured
export function isServiceConfigured(service: string): boolean {
  switch (service) {
    case 'openai':
      return !!config.openai.apiKey;
    case 'google':
      return !!config.google.apiKey;
    case 'anthropic':
      return !!config.anthropic.apiKey;
    case 'elevenlabs':
      return !!config.voice.elevenlabs.apiKey;
    case 'azure-speech':
      return !!config.voice.azure.speechKey;
    case 'mongodb':
      return !!config.storage.mongodb.uri;
    case 'aws-s3':
      return !!config.storage.aws.accessKeyId && !!config.storage.aws.secretAccessKey;
    case 'stripe':
      return !!config.integrations.stripe.publishableKey;
    case 'sendgrid':
      return !!config.communication.sendgrid.apiKey;
    case 'twilio':
      return !!config.communication.twilio.accountSid;
    default:
      return false;
  }
}

// Export the configuration as default
export default config;