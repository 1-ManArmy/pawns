# OneLast AI - Environment Variables Documentation

## 🔧 Environment Setup Guide

This document provides comprehensive instructions for setting up environment variables for the OneLast AI platform. The platform integrates with multiple AI services, APIs, and third-party tools to provide a complete production-ready experience.

## 📋 Quick Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your API keys and configuration values in the `.env` file**

3. **Restart your development server after making changes**

## 🔑 Required API Keys for Production

### Priority 1 - Core AI Services (Essential)
- **OpenAI API** - For GPT models and chat functionality
- **Anthropic Claude** - Alternative AI model provider
- **Google AI/Gemini** - Google's AI services
- **ElevenLabs** - Voice generation and speech synthesis

### Priority 2 - Authentication & Security
- **JWT Secret** - For secure authentication tokens
- **Google OAuth** - Social login functionality
- **GitHub OAuth** - Developer-focused authentication

### Priority 3 - Storage & Database
- **MongoDB Atlas** - Primary database
- **AWS S3** - File storage and media handling
- **Redis** - Caching and session management

### Priority 4 - Communication & Support
- **SendGrid** - Email notifications and communications
- **Twilio** - SMS and phone verification

### Priority 5 - Analytics & Monitoring
- **Google Analytics** - Usage tracking and insights
- **Sentry** - Error tracking and debugging

## 🚀 Service-Specific Setup Guides

### OpenAI Configuration
```env
VITE_OPENAI_API_KEY="sk-your-openai-api-key-here"
VITE_OPENAI_ORG_ID="org-your-organization-id"
VITE_OPENAI_MODEL_GPT4="gpt-4o"
VITE_OPENAI_MAX_TOKENS="4000"
```

**How to get OpenAI API Key:**
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Go to API section and create a new API key
4. Set up billing and usage limits
5. Copy the key to your `.env` file

### Google AI/Gemini Setup
```env
VITE_GOOGLE_API_KEY="your-google-ai-api-key-here"
VITE_GOOGLE_MODEL="gemini-pro"
```

**How to get Google AI API Key:**
1. Go to [Google AI Studio](https://makersuite.google.com/)
2. Create a new project or select existing one
3. Enable the Generative AI API
4. Create credentials (API Key)
5. Add the key to your environment

### ElevenLabs Voice Setup
```env
VITE_ELEVENLABS_API_KEY="your-elevenlabs-api-key-here"
VITE_ELEVENLABS_VOICE_ID="your-preferred-voice-id"
```

**How to get ElevenLabs API:**
1. Sign up at [ElevenLabs](https://elevenlabs.io/)
2. Go to Profile → API Keys
3. Generate a new API key
4. Browse voices and copy the Voice ID you prefer

### MongoDB Atlas Database
```env
VITE_MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/onelastai"
```

**How to setup MongoDB Atlas:**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier available)
3. Create database user and password
4. Whitelist your IP addresses
5. Get connection string and add to environment

### AWS S3 Storage
```env
VITE_AWS_ACCESS_KEY_ID="your-aws-access-key-id"
VITE_AWS_SECRET_ACCESS_KEY="your-aws-secret-access-key"
VITE_AWS_S3_BUCKET="onelastai-files"
```

**How to setup AWS S3:**
1. Create AWS account and go to IAM
2. Create new user with S3 permissions
3. Generate access keys
4. Create S3 bucket with appropriate permissions
5. Add credentials to environment

## 🏗️ Agent-Specific API Requirements

### NeoChat (AI Chat Agent)
**Required:**
- OpenAI API Key
- Google AI API Key
- Anthropic API Key (optional)

### EmotiSense (Emotion Analysis)
**Required:**
- Azure Cognitive Services Key
- IBM Watson API Key (optional)

### CineGen (Image/Video Generation)
**Required:**
- DALL-E API Key
- Stability AI API Key
- Cloudinary Account

### VocaMind (Voice Assistant)
**Required:**
- ElevenLabs API Key
- Azure Speech Services
- Google Speech API

### NetScope (IP & Network Info)
**Required:**
- IP Geolocation API
- Network scanning APIs

### Memora (Memory & Knowledge Base)
**Required:**
- Pinecone Vector Database
- OpenAI Embeddings API
- MongoDB for storage

## 🔒 Security Best Practices

### Environment File Security
- **Never commit `.env` files** to version control
- **Use different keys** for development, staging, and production
- **Rotate API keys regularly** (every 90 days recommended)
- **Set usage limits** on all API keys to prevent unexpected charges

### API Key Management
- **Principle of least privilege** - only grant necessary permissions
- **Monitor usage** regularly through provider dashboards
- **Set up alerts** for unusual usage patterns
- **Use environment-specific keys** for different deployment stages

### Rate Limiting Configuration
```env
VITE_RATE_LIMIT_REQUESTS_PER_MINUTE="100"
VITE_RATE_LIMIT_REQUESTS_PER_HOUR="1000"
VITE_RATE_LIMIT_REQUESTS_PER_DAY="10000"
```

## 🎯 Development vs Production Configurations

### Development Environment
```env
VITE_APP_ENVIRONMENT="development"
VITE_DEBUG_MODE="true"
VITE_MOCK_API="true"
VITE_LOG_LEVEL="debug"
```

### Production Environment
```env
VITE_APP_ENVIRONMENT="production"
VITE_DEBUG_MODE="false"
VITE_MOCK_API="false"
VITE_LOG_LEVEL="error"
VITE_ENABLE_HTTPS="true"
VITE_SESSION_SECURE="true"
```

## 📊 Cost Management

### Free Tier Recommendations
Most services offer free tiers perfect for development:

- **OpenAI**: $5 free credits for new accounts
- **Google AI**: Generous free tier for Gemini
- **MongoDB Atlas**: 512MB free cluster
- **Vercel/Netlify**: Free hosting for frontend
- **SendGrid**: 100 emails/day free

### Estimated Monthly Costs (Production)
- **Small Scale (< 1000 users)**: $50-100/month
- **Medium Scale (< 10000 users)**: $200-500/month
- **Large Scale (> 10000 users)**: $500-2000/month

## 🚨 Troubleshooting

### Common Issues

1. **API Key Invalid**
   - Check key format and regenerate if needed
   - Verify billing is set up for paid services

2. **CORS Errors**
   - Ensure domain is whitelisted in API provider settings
   - Check CORS configuration in environment

3. **Rate Limiting**
   - Implement proper retry logic
   - Consider upgrading to higher tier plans

4. **Missing Environment Variables**
   - Application will show specific errors for missing keys
   - Check browser console and server logs

### Environment Validation

The application includes built-in environment validation that will:
- **Check for required API keys** on startup
- **Validate key formats** where possible
- **Provide helpful error messages** for missing configuration
- **Suggest next steps** for setup completion

## 📞 Support & Documentation

For additional help:
- **Technical Issues**: Create issue in GitHub repository
- **API Questions**: Refer to individual service documentation
- **Setup Help**: Contact support team

## 🔄 Regular Maintenance

### Monthly Tasks
- Review API usage and costs
- Rotate development API keys
- Update dependencies
- Check for new service features

### Quarterly Tasks
- Rotate production API keys
- Review security settings
- Audit user permissions
- Update documentation

---

**⚠️ Important**: Always test your configuration in a development environment before deploying to production. Keep your API keys secure and never share them publicly.