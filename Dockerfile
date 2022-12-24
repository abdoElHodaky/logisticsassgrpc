FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN yarn add global npx
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 
RUN rm package-lock.json
RUN yarn
EXPOSE 3000
CMD ["npx ts-node","./src/app.ts"]
