#!/user/bin/bash
npx tsc
pm2 start ./dist/app.js
