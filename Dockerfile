FROM node:16-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev
RUN rm -rf package-lock.json && yarn add ts-proto
#RUN yarn add common-errors @types/common-errors express-rate-limit
#RUN yarn add @types/express @decorators/server  @decorators/di
#RUN yarn add @types/cors @decorators/express mysql2
RUN yarn install -y
ENV PORT 3000
EXPOSE ${PORT}
CMD ["sh","./tsrun.sh"]

