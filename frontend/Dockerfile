FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Important: bind Vite to 0.0.0.0 so Docker can access it from host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]