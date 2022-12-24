FROM node:16-alpine3.16
WORKDIR /app
COPY ./src
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN yarn add global ts-node &&  yarn
ENV PORT 3000
EXPOSE ${PORT}
CMD ["ts-node", "./src/app.ts"]

