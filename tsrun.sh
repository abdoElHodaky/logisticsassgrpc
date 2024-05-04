#!/user/bin/bash

npm run build
node swagautogen.js

node ./dist/grpc-main.js
node ./dist/app.js
