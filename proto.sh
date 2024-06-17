#!/usr/bin/bash

#sudo ln -s "$(which node)" /usr/bin/node
#sudo ln -s "$(which npm)" /usr/bin/npm

sudo protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto  --ts_proto_out="src/protos/dist"  --ts_proto_opt=outputServices=grpc-js --ts_proto_opt=esModuleInterop=true -I=src/protos/src src/protos/src/*.proto --experimental_allow_proto3_optional
