#Base Image
FROM node:9.6.1

# Install Chrome for Protractor Tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt update && apt install -yq google-chrome-stable

# Create Working Directory
ADD . /app
WORKDIR /app

# Add depndencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.1.5

# Add all necessary files to the main directory
COPY . /app
