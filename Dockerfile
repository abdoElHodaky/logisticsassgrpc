FROM node:16-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev grpcurl
RUN rm -rf package-lock.json && yarn add ts-proto @grpc/grpc-js class-transform class-transformer class-validator paytabs_pt2 @grpc/proto-loader @grpc/reflection
#RUN yarn add common-errors @types/common-errors express-rate-limit
#RUN yarn add @types/express @decorators/server  @decorators/di
#RUN yarn add @types/cors @decorators/express mysql2
RUN yarn install -y
#RUN protoc --plugin=$(npm-root)/.bin/protoc-gen-ts_proto  --ts_proto_out=dist --ts_proto_opt=outputServices=grpc-js --ts_proto_opt=esModuleInterop=true -I=src/ src/**/*.proto
ENV PORT 3030
ENV GRPCPORT 50051
ENV HTTPPORT 3000
EXPOSE ${PORT} ${GRPCPORT} ${HTTPPORT}
CMD ["sh","./tsrun.sh"]

