# Use the official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY ["package.json", "package-lock.json*", "./"]

# Install the app's dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 5000
EXPOSE 9100

# Start the app
CMD ["npm", "start"]