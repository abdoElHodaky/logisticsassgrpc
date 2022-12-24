FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN yarn add global npx
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 

RUN yarn
RUN npx ts-node "./src/app.ts"
EXPOSE 3000
