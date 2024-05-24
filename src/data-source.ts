import "reflect-metadata"
import { DataSource } from "typeorm"
import { InjectionToken } from "@decorators/di"
import * as entities from "./entity/";
const redisconn = require('redis-url').parse("rediss://red-cp4soqocmk4c73eom0p0:kLoGjFxqLJRRHFQs1QUaImdvOtnNdF19@oregon-redis.render.com:6379")
export const _AppDataSource = new DataSource({
    type: "mysql",
    host:"sql.db4free.net",
    username:"abdo_grpcendpoin",
    password:"arh.27934",
    database:"grpcendpoints",
    cache: {
       // type: "ioredis",
        //options: redisconn,
        duration:300000
    },
    synchronize: true,
    logging: false,
    entities: [ ...(Object.keys(entities))  ],
    migrations: [],
    subscribers: [],
    extra: {
       // connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
       // idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    }
})
_AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
	 // console.log(_AppDataSource)
  })
  .catch((error) => console.log(error));

export const getDataSource =  (delay = 3000): Promise<DataSource> => {
  if (_AppDataSource.isInitialized) return Promise.resolve(_AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (_AppDataSource.isInitialized) resolve(_AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};

setInterval(function (){
if(_AppDataSource.isConnected==false)
{
  _AppDataSource.connect().then(e=>{
  console.log("connected",e)
  }).catch(console.log)
}
else{
 console.log(" already connected")
}

},500000)

export const _datasource=new InjectionToken("DataSource")
