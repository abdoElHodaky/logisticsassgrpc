import "reflect-metadata"
import { DataSource } from "typeorm"
import { InjectionToken } from "@decorators/di"
import { all } from "./entity/entities-source"
export const _AppDataSource = new DataSource({
    type: "sqlite",
    database: "grpcendpoints.sqlite",
    cache: {
        duration: 300000
    },
    synchronize: true,
    logging: false,
    entities: [ ...all ],
    migrations: [],
    subscribers: [],
    extra: {
        connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    }
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
  console.log("connected",e)
  }).catch(console.log)
}
else{
 console.log(" already connected")
}

},500000)

export const _datasource=new InjectionToken("DataSource")
