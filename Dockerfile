FROM efrecon/ts-node:10.8.1
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN yarn add global npx &&  yarn
ENV PORT 3000
EXPOSE ${PORT}
CMD ["ts-node", "./src/app.ts"]

