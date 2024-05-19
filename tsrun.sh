#!/user/bin/bash

sysctl vm.overcommit_memory=1

npm run build
node swagautogen.js

#node ./dist/grpc-reflect.js
redis-server && node ./dist/app.js 
#redis-server
