FROM node:18-alpine3.15
WORKDIR /app
COPY . .
RUN apk add --no-cache build-base tzdata sqlite-dev postgresql-dev mysql-dev python2 python3 clang
RUN npm install
EXPOSE 3000
CMD ["npx ts-node", "./src/app.ts"]
