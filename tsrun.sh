#!/user/bin/bash

npx tsc
node swagautogen.js

#node ./dist/grpc-reflect.js
node ./dist/app.js 
#redis-server
