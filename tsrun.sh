#!/user/bin/bash

sysctl vm.overcommit_memory=1
node swagautogen.js

#node ./dist/grpc-reflect.js
redis-server --loglevel warning --bind 0.0.0.0   && node ./dist/app.js 
#redis-server
