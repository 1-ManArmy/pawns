# Stage 1: Build stage
FROM node:20-alpine3.20 AS build

# Set working directory
WORKDIR /app

# Install dependencies (only package files first for caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build frontend for production
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
