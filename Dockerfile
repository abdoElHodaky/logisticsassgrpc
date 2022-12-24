FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN yarn add global npx ts-node &&  yarn
ENV PORT 3000
EXPOSE ${PORT}
RUN npx tsc
CMD ["ts-node", "./src/app.ts"]

