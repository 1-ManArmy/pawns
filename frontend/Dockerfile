# Build stage
FROM node:20-alpine3.20 as build

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy configuration files
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY tailwind.config.js ./
COPY theme.json ./
COPY components.json ./

# Copy source directories
COPY public/ ./public/
COPY src/ ./src/
COPY scripts/ ./scripts/

# Build application
RUN npm run build


# Stage 2: Production stage (Nginx)
FROM nginx:1.27.2-alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
