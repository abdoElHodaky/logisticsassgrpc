FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN yarn add global npx
COPY --chown=node:yarn . .
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 
USER node
COPY --chown=node:node . .
COPY --chown=node:npx . .
RUN yarn
EXPOSE 3000
CMD ["npx ts-node ","./src/app.ts"]
