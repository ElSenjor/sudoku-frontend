# Stage 1: Build the Angular application
FROM node:18 AS builder

WORKDIR /app

# Copy only package files first to install dependencies (for cache efficiency)
COPY package*.json ./
RUN npm install

# Now copy the rest of the app source code
COPY . .

# Build the Angular app
RUN npm run build -- --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=builder /app/dist/sudoku-frontend/browser /usr/share/nginx/html

# Optional: Overwrite default Nginx config to support Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]