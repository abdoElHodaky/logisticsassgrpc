#!/user/bin/bash

npm run build
node swagautogen.js

#node ./dist/grpc-reflect.js
redis-server && node ./dist/app.js 
#redis-server
