#!/user/bin/bash

npm run initial 

#node ./dist/grpc-reflect.js
pm2-runtime start dist/app.js -i 1
#node dist/app.js
