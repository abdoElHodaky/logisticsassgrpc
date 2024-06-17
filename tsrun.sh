#!/user/bin/bash


npm-run-all build swaggergen 
npx ts-node src/app.ts

#node ./dist/grpc-reflect.js
#npm-run-all --parallel start
#node dist/app.js
