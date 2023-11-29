FROM node:16

WORKDIR /app
COPY package*.json ./
COPY entrypoint.sh /
COPY docker/mysql-healthcheck.sh /
RUN chmod +x /entrypoint.sh
RUN chmod +x /mysql-healthcheck.sh
RUN npm install
COPY . .
RUN npm run build
