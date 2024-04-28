#!/user/bin/bash

npm run build
node swagautogen.js
#node ./dist/grpc.js
node ./dist/app.js
