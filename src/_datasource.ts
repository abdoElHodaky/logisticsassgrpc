import { getDataSource,_AppDataSource } from "./data-source"
import { DataSource } from "typeorm"
export let AppDataSource:DataSource=_AppDataSource
 /*getDataSource(1000).then(d=>{
  AppDataSource=d

 }).catch(console.log);*/

do{
 AppDataSource.connect()
}while (AppDataSource.isConnected==false)
