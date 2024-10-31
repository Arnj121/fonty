FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2045

RUN node initIP <oldip> <newip>

CMD node server