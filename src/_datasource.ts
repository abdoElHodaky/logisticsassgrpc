import { getDataSource } from "./data-source"
import { DataSource } from "typeorm"
export let AppDataSource:DataSource;
 getDataSource(100).then(d=>{
  AppDataSource=d

 }).catch(console.log);