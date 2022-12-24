FROM node:16-alpine3.16
WORKDIR /app
COPY ./src .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev ts-node 
RUN yarn 
ENV PORT 3000
EXPOSE ${PORT}
RUN ts-node ./src/app.ts

