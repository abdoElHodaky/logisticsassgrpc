#!/user/bin/bash


npm-run-all build swaggen 
node dist/data-source.js

#node ./dist/grpc-reflect.js
#npm-run-all --parallel start
#node dist/app.js
