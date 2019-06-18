FROM node

# Create app directory
WORKDIR /usr/src/app

# Create apikey.js file
RUN touch ./config/apikey.js

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

