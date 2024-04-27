#!/user/bin/bash

npm run build
node swagautogen.js
node ./dist/grpc.ts
node ./dist/app.js
