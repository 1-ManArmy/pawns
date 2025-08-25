# Production Deployment Guide

## 🚀 Quick Production Setup

This guide will help you deploy OneLast AI to production with all agent features enabled.

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Domain name (onelastai.com)
- SSL certificates
- Required API keys (see ENVIRONMENT_SETUP.md)

## Step 1: Environment Configuration

### 1.1 Create Production Environment File
```bash
cp .env.example .env.production
```

### 1.2 Configure Essential API Keys
Edit `.env.production` with your production API keys:

```env
# Core Application
VITE_APP_ENVIRONMENT="production"
VITE_APP_URL="https://onelastai.com"

# Essential Services (REQUIRED)
VITE_OPENAI_API_KEY="sk-your-production-openai-key"
VITE_JWT_SECRET="your-strong-jwt-secret-for-production"
VITE_MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/onelastai"

# Authentication (REQUIRED)
VITE_GOOGLE_CLIENT_ID="your-google-oauth-client-id"
VITE_GITHUB_CLIENT_ID="your-github-oauth-client-id"

# Payment Processing (REQUIRED for subscriptions)
VITE_STRIPE_PUBLISHABLE_KEY="pk_live_your-stripe-key"
VITE_STRIPE_SECRET_KEY="sk_live_your-stripe-secret"

# Email Service (REQUIRED for notifications)
VITE_SENDGRID_API_KEY="SG.your-sendgrid-api-key"

# Optional but Recommended
VITE_GOOGLE_API_KEY="your-google-ai-api-key"
VITE_ELEVENLABS_API_KEY="your-elevenlabs-api-key"
VITE_AZURE_SPEECH_KEY="your-azure-speech-key"
```

### 1.3 Validate Configuration
```bash
npm run env:validate
```

## Step 2: Build and Test

### 2.1 Build Production Bundle
```bash
npm run build:prod
```

### 2.2 Test Production Build Locally
```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## Step 3: Docker Deployment

### 3.1 Build Docker Image
```bash
npm run docker:build
```

### 3.2 Test Docker Container
```bash
npm run docker:run
```

### 3.3 Production Deployment with Docker Compose
Use the single `docker-compose.yml` (now unified) for all environments.
```bash
# Copy environment file
cp .env.production .env

# Deploy to production (detached)
npm run docker:prod
```

This will start the services defined in `docker-compose.yml` (frontend, backend, redis, optional nginx-lb). Enable or add monitoring in a separate stack if required.

## Step 4: Domain and SSL Setup

### 4.1 Domain Configuration
Configure your DNS to point to your server:

```
A    onelastai.com           → YOUR_SERVER_IP
A    www.onelastai.com       → YOUR_SERVER_IP
A    neochat.onelastai.com   → YOUR_SERVER_IP
A    emotisense.onelastai.com → YOUR_SERVER_IP
A    cinegen.onelastai.com   → YOUR_SERVER_IP
# ... add all 20 agent subdomains
```

### 4.2 SSL Certificate Setup
Use Let's Encrypt for free SSL certificates:

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificates
sudo certbot --nginx -d onelastai.com -d www.onelastai.com \
  -d neochat.onelastai.com -d emotisense.onelastai.com \
  -d cinegen.onelastai.com -d contentcrafter.onelastai.com \
  -d memora.onelastai.com -d netscope.onelastai.com \
  -d aiblogster.onelastai.com -d datavision.onelastai.com \
  -d infoseek.onelastai.com -d documind.onelastai.com \
  -d carebot.onelastai.com -d personax.onelastai.com \
  -d authwise.onelastai.com -d ideaforge.onelastai.com \
  -d vocamind.onelastai.com -d taskmaster.onelastai.com \
  -d reportly.onelastai.com -d datasphere.onelastai.com \
  -d configai.onelastai.com -d labx.onelastai.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Step 5: Agent Services Configuration

### 5.1 Agent Subdomain Routing
Each agent is accessible via its own subdomain. Configure Nginx to handle subdomain routing:

```nginx
# Main domain
server {
    server_name onelastai.com www.onelastai.com;
    # Main site configuration
}

# Agent subdomains
server {
    server_name neochat.onelastai.com;
    location / {
        proxy_pass http://frontend/neochat;
    }
}

server {
    server_name emotisense.onelastai.com;
    location / {
        proxy_pass http://frontend/emotisense;
    }
}

# ... repeat for all 20 agents
```

### 5.2 Agent-Specific API Configuration
Each agent requires specific API services:

| Agent | Required APIs | Optional APIs |
|-------|---------------|---------------|
| NeoChat | OpenAI | Google AI, Anthropic |
| EmotiSense | Azure Cognitive | IBM Watson |
| CineGen | OpenAI (DALL-E) | Stability AI |
| VocaMind | ElevenLabs | Azure Speech |
| NetScope | None | IP Geolocation |
| Memora | OpenAI, MongoDB | Pinecone |
| ContentCrafter | OpenAI | Google AI |
| ... | ... | ... |

## Step 6: Database Setup

### 6.1 MongoDB Production Configuration
```javascript
// mongo-init/init.js
db = db.getSiblingDB('onelastai');

// Create users collection with indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "githubId": 1 }, { sparse: true });
db.users.createIndex({ "googleId": 1 }, { sparse: true });

// Create agents collection
db.agents.createIndex({ "userId": 1, "type": 1 });
db.agents.createIndex({ "createdAt": 1 });

// Create conversations collection
db.conversations.createIndex({ "userId": 1, "agentId": 1 });
db.conversations.createIndex({ "createdAt": 1 });

// Create subscriptions collection
db.subscriptions.createIndex({ "userId": 1 }, { unique: true });
db.subscriptions.createIndex({ "stripeSubscriptionId": 1 }, { sparse: true });
```

### 6.2 Redis Configuration
```bash
# redis.conf production settings
maxmemory 256mb
maxmemory-policy allkeys-lru
save 900 1
save 300 10
save 60 10000
```

## Step 7: Monitoring and Analytics

### 7.1 Application Monitoring
```env
# Production monitoring
VITE_SENTRY_DSN="your-sentry-dsn"
VITE_LOGROCKET_APP_ID="your-logrocket-app-id"
VITE_GA_TRACKING_ID="G-your-google-analytics-id"
```

### 7.2 Server Monitoring
Access monitoring dashboards:
- Grafana: `http://your-server:3001`
- Prometheus: `http://your-server:9090`

### 7.3 Health Checks
Set up automated health checks:

```bash
# Health check script
#!/bin/bash
curl -f http://onelastai.com/health || exit 1
curl -f http://neochat.onelastai.com/health || exit 1
# ... check all agent endpoints
```

## Step 8: Backup and Security

### 8.1 Database Backups
```bash
# MongoDB backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mongodump --uri="$MONGODB_URI" --out="/backups/mongodb_$DATE"
tar -czf "/backups/mongodb_$DATE.tar.gz" "/backups/mongodb_$DATE"
rm -rf "/backups/mongodb_$DATE"

# Keep only last 7 days
find /backups -name "mongodb_*.tar.gz" -mtime +7 -delete
```

### 8.2 Security Configuration
```env
# Security settings
VITE_CORS_ORIGINS="https://onelastai.com,https://www.onelastai.com"
VITE_ENABLE_HTTPS="true"
VITE_SESSION_SECURE="true"
VITE_COOKIE_SECURE="true"
VITE_CSRF_PROTECTION="true"
```

## Step 9: Performance Optimization

### 9.1 CDN Setup
Configure CloudFlare or AWS CloudFront:
- Static asset caching
- Global edge locations
- DDoS protection
- SSL/TLS optimization

### 9.2 Database Optimization
```javascript
// MongoDB performance indexes
db.conversations.createIndex({ "userId": 1, "createdAt": -1 });
db.agents.createIndex({ "type": 1, "isActive": 1 });

// Compound indexes for common queries
db.subscriptions.createIndex({ "userId": 1, "status": 1, "expiresAt": 1 });
```

## Step 10: Scaling and Load Balancing

### 10.1 Horizontal Scaling
```yaml
# docker-compose.scale.yml
version: '3.8'
services:
  onelastai-frontend:
    deploy:
      replicas: 3
    
  nginx-lb:
    image: nginx:alpine
    depends_on:
      - onelastai-frontend
    ports:
      - "80:80"
      - "443:443"
```

### 10.2 Auto-scaling Configuration
```bash
# Scale based on CPU usage
docker service update --replicas-max-per-node 2 onelastai_onelastai-frontend
```

## 🔧 Troubleshooting

### Common Issues

1. **Agent not working**: Check API key configuration and rate limits
2. **Slow performance**: Review database indexes and enable caching
3. **SSL issues**: Verify certificate installation and domain configuration
4. **Memory errors**: Increase container memory limits

### Log Locations
- Application logs: `/var/log/onelastai/app.log`
- Nginx logs: `/var/log/nginx/access.log`
- MongoDB logs: `/var/log/mongodb/mongod.log`

### Performance Monitoring
```bash
# Monitor application performance
docker stats
docker logs onelastai_frontend_1 --tail 100
```

## 📈 Post-Deployment Checklist

- [ ] All 20 agent subdomains accessible
- [ ] SSL certificates installed and auto-renewing
- [ ] Database backups automated
- [ ] Monitoring and alerting configured
- [ ] Payment processing tested
- [ ] Email notifications working
- [ ] Performance optimized
- [ ] Security hardened
- [ ] Documentation updated

## 🎯 Next Steps

1. **User Testing**: Conduct beta testing with real users
2. **Performance Tuning**: Optimize based on real usage patterns  
3. **Feature Rollout**: Gradually enable advanced agent features
4. **Analytics Setup**: Configure conversion tracking and user behavior analysis
5. **Support System**: Set up customer support and documentation

---

**Need Help?** 
- Check logs: `docker logs container_name`
- Review environment: `npm run env:validate`
- Contact support: Create GitHub issue with logs and configuration details