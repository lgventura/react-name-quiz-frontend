# Use a base image that has Node.js installed
FROM node:alpine

# Define the working directory inside the container
WORKDIR /app

# Copy the package.json file and the package-lock.json (or yarn.lock) file
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory in the container
COPY . .

# Compile the React project for production
RUN npm run build

# Expose port 3000, which is the default port that the React development server runs on
EXPOSE 3000

# Command to start the server when the container starts
CMD ["npm", "start"]