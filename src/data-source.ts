import "reflect-metadata"
import { DataSource,DataSourceOptions } from "typeorm"
import { InjectionToken } from "@decorators/di"
import { entities } from "./entity/entities-source"
import { subscribers } from "./subscribers/subscribers";
import { Env } from "./env";

export const _AppDataSource = new DataSource({
    type:"mariadb",
    username:"abdo_grpcendpoin",
    password:"arh.27934",
    host:"db4free.net",
    database:"grpcendpoints",
    cache: {
       type:"ioredis",
        options: {
       //...(require("redis-url").parse(process.env.REDIS))
        host:"red-cpdq71f109ks73elqfu0",
	port:6379
        }, 
        
        duration: 300000
    },
    //metadataTableName:"typeorm-metadata",
    synchronize: true,
    logging:["error"],
    logger:"advanced-console",
    entities: [  ...entities  ],
    migrations: [],
    subscribers: [ ...subscribers ],
    extra: {
       connectTimeout:20000
        //connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        //idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    },
    //statementCacheSize:200
    
})
if (_AppDataSource.isInitialized==false){
_AppDataSource.initialize()
  .then(async () => {
    console.log("\x1b[31;44;50m Connection initialized with database... \x1b[0m");
  })
  .catch((error) => console.log(error));}

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
 console.log("\x1b[36,60,50m already connected \x1b[0m")
}

},500000)

export const _datasource=new InjectionToken("DataSource")
