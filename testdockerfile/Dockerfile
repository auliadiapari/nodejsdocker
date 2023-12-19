# Use an official Node.js runtime as a base image
FROM node:20

ARG VERSION ""

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 8080

RUN echo ${VERSION} > app.info

# Define the command to run your app
CMD ["node", "index.js"]
