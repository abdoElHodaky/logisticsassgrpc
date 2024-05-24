#!/user/bin/bash

npm-run-all build docs 

#node ./dist/grpc-reflect.js
pm2-runtime start dist/app.js -i 2
#node dist/app.js
