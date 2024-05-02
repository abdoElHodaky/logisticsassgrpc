#!/user/bin/bash

npm run build
node swagautogen.js

#node ./dist/grpc-reflect.js
node ./dist/app.js
