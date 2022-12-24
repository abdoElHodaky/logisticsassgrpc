FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN npm i -g npx && npm i
RUN npx ts-node "./src/app.ts"
EXPOSE 3000
