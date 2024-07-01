#!/user/bin/bash

npx tsc && rm swagger.json
node swagautogen.js dist/app.js

#node ./dist/grpc-reflect.js
#npm-run-all --parallel start
