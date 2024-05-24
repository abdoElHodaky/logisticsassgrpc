#!/user/bin/bash

npm run build && node swagautogen.js

#node ./dist/grpc-reflect.js
pm2-runtime start dist/app.js -i 1
#redis-server
