# OneLast AI - Production Deployment Configuration

# ---------- Frontend build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install build tools (optional if no native addons)
RUN apk add --no-cache python3 make g++

# Copy lock + manifest first
COPY package*.json ./

# Ensure devDependencies are installed (do NOT set NODE_ENV=production here)
RUN npm install

# Copy config files needed by Tailwind/PostCSS
COPY tailwind.config.* postcss.config.* ./
# (If you have tsconfig files)
COPY tsconfig*.json ./
COPY vite.config.* ./
COPY index.html ./
COPY public ./public
COPY src ./src

# Build (Vite outputs to dist)
RUN npm run build

# ---------- Nginx serve stage ----------
FROM nginx:1.27-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]