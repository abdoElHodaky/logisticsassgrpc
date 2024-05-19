FROM node:16-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev  redis
RUN rm -rf package-lock.json 
RUN yarn add ts-proto @grpc/grpc-js class-transform class-transformer class-validator paytabs_pt2 @grpc/proto-loader @grpc/reflection
RUN yarn add swagger-themes express-jwt redis redis-url-parser
#RUN yarn add common-errors @types/common-errors express-rate-limit
#RUN yarn add @types/express @decorators/server  @decorators/di
#RUN yarn add @types/cors @decorators/express mysql2
RUN yarn install -y
ENV GRPCSTwoPORT 3030
ENV GRPCSOnePORT 50051
ENV PORT 4000
ENV ENABLE_OVERCOMMIT_MEMORY true
EXPOSE ${GRPCSOnePORT} ${GRPCSTwoPORT} ${PORT} 6379
RUN npx tsc
CMD ["sh","./tsrun.sh"]

