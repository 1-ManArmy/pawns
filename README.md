# OneLast AI - Complete AI Platform

> **Empowering Youth Through Artificial Intelligence**

OneLast AI is a comprehensive AI-powered platform featuring 20+ specialized agents for education, productivity, and creativity. Built with React, TypeScript, and modern web technologies.

## 🚀 Quick Start

### Development Setup
```bash
# Clone and install
git clone <repository-url>
cd onelastai
npm install

# Setup environment
cp .env.example .env
# Edit .env with your API keys

# Validate configuration
npm run env:validate

# Start development server
npm run dev
```

### Production Deployment
```bash
# Build for production
npm run build:prod

# Deploy with Docker
npm run docker:prod
```

## 🏗️ Architecture

### Core Platform
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: React hooks + TanStack Query
- **Routing**: React Router v6

### AI Services Integration
- **OpenAI**: GPT-4, DALL-E, Embeddings
- **Google AI**: Gemini Pro, Speech APIs
- **Anthropic**: Claude 3 Opus
- **ElevenLabs**: Voice synthesis
- **Azure**: Cognitive services

### Infrastructure
- **Database**: MongoDB Atlas
- **Caching**: Redis
- **Storage**: AWS S3
- **Deployment**: Docker + Docker Compose
- **Monitoring**: Prometheus + Grafana

## 🤖 AI Agents

| Agent | Subdomain | Purpose | Status |
|-------|-----------|---------|--------|
| **NeoChat** | neochat.onelastai.com | Advanced AI chat assistant | ✅ |
| **EmotiSense** | emotisense.onelastai.com | Emotion & sentiment analysis | ✅ |
| **CineGen** | cinegen.onelastai.com | Image & video generation | ✅ |
| **ContentCrafter** | contentcrafter.onelastai.com | Content creation tools | ✅ |
| **Memora** | memora.onelastai.com | AI memory & knowledge base | ✅ |
| **NetScope** | netscope.onelastai.com | Network & IP information | ✅ |
| **AIBlogster** | aiblogster.onelastai.com | Blog writing assistant | ✅ |
| **DataVision** | datavision.onelastai.com | Data analytics dashboard | ✅ |
| **InfoSeek** | infoseek.onelastai.com | Intelligent search | ✅ |
| **DocuMind** | documind.onelastai.com | Document processing | ✅ |
| **CareBot** | carebot.onelastai.com | Customer support AI | ✅ |
| **PersonaX** | personax.onelastai.com | User profile management | ✅ |
| **AuthWise** | authwise.onelastai.com | Authentication system | ✅ |
| **IdeaForge** | ideaforge.onelastai.com | AI creativity studio | ✅ |
| **VocaMind** | vocamind.onelastai.com | Voice assistant | ✅ |
| **TaskMaster** | taskmaster.onelastai.com | Task & project management | ✅ |
| **Reportly** | reportly.onelastai.com | Report generation | ✅ |
| **DataSphere** | datasphere.onelastai.com | Data dashboard | ✅ |
| **ConfigAI** | configai.onelastai.com | Settings & configuration | ✅ |
| **LabX** | labx.onelastai.com | Experimental AI features | ✅ |

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Main landing page
│   │   ├── agent-pages/    # Individual agent pages
│   │   └── ...
│   ├── lib/                # Utilities and configuration
│   │   ├── config.ts       # Environment configuration
│   │   ├── api-services.ts # API integration layer
│   │   └── utils.ts        # Helper functions
│   ├── assets/             # Static assets
│   └── App.tsx             # Main app component
├── .env.example            # Environment template
├── docker-compose.yml      # Development containers
├── docker-compose.prod.yml # Production containers
├── Dockerfile              # Production build
├── nginx.conf              # Web server configuration
└── docs/                   # Documentation
```

## 🔧 Environment Configuration

### Required API Keys
For full functionality, configure these services:

**Essential (Core Features)**
- OpenAI API Key - Chat, completions, embeddings
- MongoDB URI - Database storage
- JWT Secret - Authentication security

**Recommended (Enhanced Features)**  
- Google AI API Key - Gemini Pro integration
- ElevenLabs API Key - Voice synthesis
- Azure Speech Key - Voice processing
- Stripe Keys - Payment processing

**Optional (Extended Features)**
- Anthropic API Key - Claude integration
- AWS S3 Credentials - File storage
- SendGrid API Key - Email notifications
- Twilio Credentials - SMS/phone

### Setup Guide
1. Copy `.env.example` to `.env`
2. Fill in your API keys
3. Run `npm run env:validate` to check configuration
4. See `ENVIRONMENT_SETUP.md` for detailed instructions

## 🚀 Deployment

### Development
```bash
npm run dev                 # Start development server
npm run env:validate        # Check environment setup
npm run type-check          # TypeScript validation
```

### Production
```bash
npm run build:prod          # Production build
npm run docker:build        # Build Docker image
npm run docker:prod         # Deploy with Docker Compose
```

### Domain Configuration
The platform supports:
- **Main Domain**: onelastai.com
- **Agent Subdomains**: 20 specialized AI agents
- **API Routes**: RESTful API endpoints
- **Admin Dashboard**: Management interface

See `PRODUCTION_DEPLOYMENT.md` for complete deployment guide.

## 🎨 Design System

### Visual Identity
- **Colors**: Purple-focused gradient palette
- **Typography**: Inter font family
- **Components**: shadcn/ui + custom components
- **Animations**: Framer Motion + custom CSS
- **Responsive**: Mobile-first design approach

### Key Design Principles
- **Simplicity**: Clean, minimal interface
- **Accessibility**: WCAG AA compliance
- **Performance**: Optimized loading and interactions
- **Consistency**: Unified component system

## 🔐 Security Features

### Authentication
- JWT-based authentication
- OAuth integration (Google, GitHub)
- Session management
- Rate limiting

### Data Protection
- API key encryption
- Secure environment handling
- CORS configuration
- Input validation and sanitization

### Production Security
- HTTPS enforcement
- Security headers
- Content Security Policy
- Regular security audits

## 📊 Analytics & Monitoring

### User Analytics
- Google Analytics integration
- User behavior tracking
- Conversion funnel analysis
- A/B testing capabilities

### Application Monitoring
- Real-time error tracking (Sentry)
- Performance monitoring (LogRocket)
- Infrastructure monitoring (Prometheus)
- Custom dashboards (Grafana)

### Health Checks
- Service status monitoring
- API endpoint health
- Database connectivity
- External service availability

## 🧪 Testing

### Development Testing
```bash
npm run test                # Run test suite
npm run test:ui             # Interactive testing
npm run type-check          # TypeScript validation
npm run lint                # Code quality check
```

### Production Testing
- Environment validation
- API integration testing
- Load testing
- Security testing

## 📈 Performance

### Optimization Features
- Code splitting and lazy loading
- Image optimization
- Caching strategies
- CDN integration

### Monitoring
- Core Web Vitals tracking
- Performance budgets
- Bundle size analysis
- Runtime performance metrics

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request

### Code Standards
- TypeScript strict mode
- ESLint + Prettier configuration
- Component documentation
- Test coverage requirements

## 📋 API Documentation

### Core Endpoints
- `GET /api/health` - Service health check
- `POST /api/auth/login` - User authentication
- `GET /api/agents` - Available AI agents
- `POST /api/chat` - Chat completions

### Agent-Specific APIs
Each agent exposes specialized endpoints:
- Chat and completion APIs
- File upload and processing
- Voice synthesis and recognition
- Image generation and analysis

## 🎯 Roadmap

### Current (v1.0)
- [x] 20 AI agents fully functional
- [x] User authentication system
- [x] Payment processing integration
- [x] Production deployment ready

### Upcoming (v1.1)
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] Team collaboration features
- [ ] API marketplace

### Future (v2.0)
- [ ] Custom agent builder
- [ ] Workflow automation
- [ ] Enterprise features
- [ ] Multi-language support

## 📞 Support

### Documentation
- `ENVIRONMENT_SETUP.md` - Environment configuration
- `PRODUCTION_DEPLOYMENT.md` - Deployment guide
- `PRD.md` - Product requirements

### Community
- **Issues**: GitHub Issues for bugs and features
- **Discussions**: GitHub Discussions for questions
- **Discord**: Community chat and support

### Commercial Support
- Technical consulting
- Custom development
- Enterprise deployment
- Training and onboarding

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Acknowledgments

### Technologies
- React Team for React 19
- Vercel for Vite and deployment tools
- OpenAI for AI capabilities
- shadcn for UI components

### Community
- Contributors and beta testers
- Open source community
- AI/ML research community

---

**Built with ❤️ by the OneLast AI Team**

*Empowering the next generation through artificial intelligence education and tools.*
