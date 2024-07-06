import { getDataSource,_AppDataSource } from "./data-source"
import { DataSource } from "typeorm"
export let AppDataSource:DataSource=_AppDataSource
export { _datasource } from "./data-source"

 /*getDataSource(1000).then(d=>{
  AppDataSource=d

 }).catch(console.log);*/

