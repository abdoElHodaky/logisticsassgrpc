import "reflect-metadata"
import { DataSource,DataSourceOptions } from "typeorm"
import { InjectionToken } from "@decorators/di"
import { all } from "./entity/entities-source"
import { Env } from "./env";

export const _AppDataSource = new DataSource({
    type:"better-sqlite3",
    database:"grpcendpoints.sqlite",
    cache: {
        type: "redis",
        options: {
            url:process.env.REDIS,
            //url:"rediss://red-cpdq71f109ks73elqfu0:DfjXZonDEL9uC4gT5Ua6qtq3F2nmVkGK@frankfurt-redis.render.com:6379",
            socket: {
             reconnectStrategy: retries => Math.min(retries * 50, 500),
            },
            pingInterval: 10000
        },
        duration: 300000
    },
    //metadataTableName:"typeorm-metadata",
    synchronize: true,
    logging: ["error"],
    logger:"advanced-console",
    entities: [  ...all  ],
    migrations: [],
    subscribers: [],
    extra: {
       //connectTimeout:20000
        connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    },
    statementCacheSize:200
    
})

_AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
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
  console.log("connected")
  }).catch(console.log)
}
else{
 console.log(" already connected")
}

},500000)

export const _datasource=new InjectionToken("DataSource")
