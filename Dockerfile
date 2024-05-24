FROM node:18-alpine
#WORKDIR /app
COPY . .
#COPY supervisord.conf /etc/supervisord.conf

RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev redis supervisor
RUN rm -rf package-lock.json && mkdir /var/log/supervisor/
RUN yarn add ts-proto @grpc/grpc-js class-transform class-transformer class-validator paytabs_pt2 @grpc/proto-loader @grpc/reflection
RUN yarn add swagger-themes express-jwt ioredis  redis-url node-mailer emailjs
RUN npm install pm2 -g
RUN yarn install -y
ENV GRPCSTWOPORT 3030
ENV GRPCSONEPORT 50051
ENV PORT 4000
ENV NODE_ENV production
ENV ENABLE_OVERCOMMIT_MEMORY true
EXPOSE ${GRPCSONEPORT} ${GRPCSTWOPORT} ${PORT} 9001

#CMD ["/usr/bin/supervisord","-c","./supervisord.conf"]
CMD ["sh","./tsrun.sh"]
