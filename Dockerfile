FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata npx sqlite-dev postgresql-dev mysql-dev 
RUN yarn
EXPOSE 3000
CMD ["npx ts-node ","./src/app.ts"]
