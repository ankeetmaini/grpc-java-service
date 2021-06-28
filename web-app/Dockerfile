FROM node:14-stretch-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
COPY . .
RUN yarn build

CMD [ "node", "server.js" ]
