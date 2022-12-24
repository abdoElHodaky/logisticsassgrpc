FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN npm install npx -g
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 

RUN npm install 
EXPOSE 3000
Run npx ts-node ./src/app.ts
