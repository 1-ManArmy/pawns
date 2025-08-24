# OneLast AI - Production Deployment Configuration

# Docker Configuration for Production Deployment
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY tailwind.config.js ./

# Install all dependencies (need dev deps for TypeScript/Vite build)
RUN apk update && apk upgrade --no-cache \
  && npm ci

# Copy source code
COPY src/ ./src/
COPY index.html ./
COPY public/ ./public/

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built files to nginx (only production assets)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Health check (basic static asset availability)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]