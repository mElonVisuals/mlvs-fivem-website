# Stage 1: Build the React application
# We use a Node.js image to build the React app.
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker caching.
# This step is done separately so that if only source code changes, npm install isn't re-run.
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React application for production.
# This command creates the optimized static files in the 'build' directory.
RUN npm run build

# Stage 2: Serve the application with Nginx
# We use a lightweight Nginx image for serving the static files.
FROM nginx:alpine

# Copy the custom Nginx configuration file into the Nginx container's default config directory.
# This ensures Nginx uses our specific rules for React SPA routing and caching.
# Assume you will place the nginx.conf (provided previously) in a 'nginx' subdirectory in your project root.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx index.html that comes with the image
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React application from the 'build' stage to Nginx's serving directory.
# The 'build' directory contains your optimized HTML, CSS, and JS files.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80, the default HTTP port Nginx listens on.
EXPOSE 80

# Command to run Nginx when the container starts.
# 'daemon off;' ensures Nginx runs in the foreground, which is necessary for Docker containers.
CMD ["nginx", "-g", "daemon off;"]
