#!/user/bin/bash

if [[ "$ENABLE_OVERCOMMIT_MEMORY" == 'true' ]]; then
	echo "vm.overcommit_memory=1" | sudo tee -a /etc/sysctl.conf
        sudo sysctl -p
fi
node swagautogen.js

#node ./dist/grpc-reflect.js
redis-server --loglevel warning --bind 0.0.0.0   && node ./dist/app.js 
#redis-server
