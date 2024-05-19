#!/user/bin/bash

node run build
node swagautogen.js

#node ./dist/grpc-reflect.js
node ./dist/app.js 
#redis-server
