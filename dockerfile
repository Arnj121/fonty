FROM node:18

WORKDIR /app

copy . .
EXPOSE 2045
RUN npm install

CMD node server