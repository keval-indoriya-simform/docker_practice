FROM node:alpine

WORKDIR /usr/code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "server.js" ]