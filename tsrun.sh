#!/user/bin/bash
npx tsc
pm2-runtime npx ts-node ./dist/app.js
