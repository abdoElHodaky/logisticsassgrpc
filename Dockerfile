FROM node:18-alpine
<<<<<<< HEAD
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev
RUN rm -rf package-lock.json && yarn add ts-proto @grpc/grpc-js
#RUN yarn add common-errors @types/common-errors express-rate-limit
#RUN yarn add @types/express @decorators/server  @decorators/di
#RUN yarn add @types/cors @decorators/express mysql2
RUN yarn upgrade -y
#RUN protoc --plugin=$(npm-root)/.bin/protoc-gen-ts_proto  --ts_proto_out=dist --ts_proto_opt=outputServices=grpc-js --ts_proto_opt=esModuleInterop=true -I=src/ src/**/*.proto
ENV PORT 3000
EXPOSE ${PORT}
CMD ["sh","./tsrun.sh"]
=======
#WORKDIR /app
COPY . .
#COPY supervisord.conf /etc/supervisord.conf
>>>>>>> mainrpc

RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev redis supervisor sudo
RUN rm -rf package-lock.json && mkdir /var/log/supervisor/
RUN npm cache clean --force
RUN  yarn add chalk redis-url mariadb  && npm install pm2 npm-run-all -g
#RUN yarn add ts-node-dev --dev
RUN  yarn install -y 
ENV GRPCSTWOPORT 3030
ENV GRPCSONEPORT 5051
ENV PORT 3000
ENV NODE_ENV production
ENV ENABLE_OVERCOMMIT_MEMORY true
EXPOSE ${GRPCSONEPORT} ${GRPCSTWOPORT} ${PORT} 9001

#CMD ["/usr/bin/supervisord","-c","./supervisord.conf"]
CMD ["sh","./tsrun.sh"]
