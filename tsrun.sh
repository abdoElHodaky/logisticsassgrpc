#!/user/bin/bash

npm run prepare 

#node ./dist/grpc-reflect.js
pm2-runtime start dist/app.js -i 2
#node dist/app.js
