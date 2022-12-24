FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 
RUN npm install npx -g 
RUN npm install 
EXPOSE 3000
CMD ["npx ts-node", "./src/app.ts"]
