FROM node:16-alpine3.16
WORKDIR /app
COPY ./src .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev 
RUN yarn add nox global
ENV PORT 3000
EXPOSE ${PORT}
RUN npx ts-node ./src/app.ts

