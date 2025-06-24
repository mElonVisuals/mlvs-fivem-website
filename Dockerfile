# Stage 1: Build the React application with Vite
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
# For Vite, this command typically creates optimized static files in the 'dist' directory.
RUN npm run build

# Stage 2: Serve the application using a lightweight static file server (e.g., 'serve')
FROM node:20-alpine # Using node-alpine again for 'serve' as it's a Node.js package

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Set the working directory to the output of the build stage
# Vite's default output directory is 'dist'
WORKDIR /usr/src/app

# Copy the built application from the 'build' stage to the current stage's working directory.
COPY --from=build /app/dist .

# Expose port 3000, which 'serve' will listen on by default.
EXPOSE 3000

# Command to run the 'serve' static file server.
# '-s' for single-page application mode (important for React Router).
# '-l 3000' specifies the port to listen on.
CMD ["serve", "-s", "-l", "3000"]
