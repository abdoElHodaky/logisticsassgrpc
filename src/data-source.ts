import "reflect-metadata"
import { DataSource,DataSourceOptions } from "typeorm"
import { InjectionToken } from "@decorators/di"
import { all } from "./entity/entities-source"
import { Env } from "./env";
let databaseopts={
    type: (Env.DS_TYPE=="sqlite" || Env.DS_TYPE==undefined)?"sqlite":Env.DS_TYPE,
     host:(Env.DS_TYPE=="sqlite" || Env.DS_TYPE==undefined)?"":(Env.DS_HOST!=undefined)?Env.DS_HOST:"",
     username:(Env.DS_TYPE=="sqlite" || Env.DS_TYPE==undefined)?"":(Env.DS_USERNAME!=undefined)?Env.DS_USERNAME:"",
     password: (Env.DS_TYPE=="sqlite" || Env.DS_TYPE==undefined)?"":(Env.DS_PASSWORD!=undefined)?Env.DS_PASSWORD:"",
     database: (Env.DS_TYPE=="sqlite" || Env.DS_TYPE==undefined)?"grpcendpoints.sqlite":(Env.DS_DATABSE!=undefined)?Env.DS_DATABASE:"grpcendpoints",
     extra: {
      // connectTimeout:20000,
        connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    },
}
export const _AppDataSource = new DataSource({
    type:"sqlite",
    database:"grpcendpoints.sqlite",
    cache: {
      //  type: "redis",
        /*options: {
            socket: {
                host: "localhost",
                port: 6379
            }
        },*/
        duration: 300000
    },
    //metadataTableName:"typeorm-metadata",
    synchronize: true,
    logging: false,
    entities: [  ...all  ],
    migrations: [],
    subscribers: [],
    extra: {
       //connectTimeout:20000
        connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    },
    //poolSize:13
} as DataSourceOptions )
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
