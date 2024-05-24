#!/user/bin/bash

npm run build && node swagautogen.js

#node ./dist/grpc-reflect.js
pm2 start "./dist/app.js" -i 0
#redis-server
