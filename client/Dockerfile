FROM node:16 AS build
WORKDIR /client
COPY package*.json ./
RUN npm install -g serve
RUN npm install
COPY . .
RUN npm run build
COPY /build .