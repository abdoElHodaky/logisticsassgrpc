#!/user/bin/bash

npx tsc && node swagautogen.js
node dist/app.js

#node ./dist/grpc-reflect.js
#npm-run-all --parallel start
