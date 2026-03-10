FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","index.js"] // Change this to "npm start" if you have a start script defined in package.json