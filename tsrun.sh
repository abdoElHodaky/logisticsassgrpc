#!/user/bin/bash

if [[ "$ENABLE_OVERCOMMIT_MEMORY" == 'true' ]]; then
	echo 1 > /proc/sys/vm/overcommit_memory
fi
node swagautogen.js

#node ./dist/grpc-reflect.js
redis-server --loglevel warning --bind 0.0.0.0   && node ./dist/app.js 
#redis-server
