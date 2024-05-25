#!/user/bin/bash

npm-run-all build swaggergen 

#node ./dist/grpc-reflect.js
npm-run-all --parallel redis start
#node dist/app.js
