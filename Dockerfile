# Stage 1: Build the application
FROM node:25.7-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Pass environment variables to the build step using Docker secrets
# Note: You must run `docker build` with `--secret id=VITE_RAPID_API_ARTICLE_KEY,src=.env`
RUN --mount=type=secret,id=VITE_RAPID_API_ARTICLE_KEY \
    echo "$(cat /run/secrets/VITE_RAPID_API_ARTICLE_KEY)" > .env

# Build the application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built assets from the builder stage to Nginx's default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add custom Nginx configuration if you have routing requirements (e.g., React Router)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
