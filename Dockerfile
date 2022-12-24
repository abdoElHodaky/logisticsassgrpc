FROM node:16-alpine3.16
WORKDIR /app
COPY ./src .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev npm
RUN npm ci
ENV PORT 3000
EXPOSE ${PORT}
Run npm run start

