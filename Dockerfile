FROM node:alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
EXPOSE 2045
CMD node server