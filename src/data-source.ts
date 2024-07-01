import "reflect-metadata"
import { DataSource,DataSourceOptions } from "typeorm"
import { InjectionToken } from "@decorators/di"
import { entities } from "./entity/entities-source"
import { subscribers } from "./subscribers/subscribers";
import { Env } from "./env";

export const _AppDataSource = new DataSource({
    type:"better-sqlite3",
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
    logging:"all",//["error"],
    logger:"advanced-console",
    entities: [  ...entities  ],
    migrations: [],
    subscribers: [ ...subscribers ],
    extra: {
       //connectTimeout:20000
        //connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        //idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    },
    //statementCacheSize:200
    
})
if (_AppDataSource.isInitialized==false){
_AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
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
 console.log(" already connected")
}

},500000)

export const _datasource=new InjectionToken("DataSource")
