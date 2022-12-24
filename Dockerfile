FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN yarn add global npx && yarn
ENV PORT 3000
EXPOSE ${PORT}
RUN npx ts-node "./src/app.ts"
