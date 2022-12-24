import { getDataSource } from "./data-source"
import { DataSource } from "typeorm"
import { User } from "./entity/User";
import { Request, Response,Router } from "express";
let AppDataSource:DataSource;
 getDataSource(1000).then(d=>{
  AppDataSource=d

 }).catch(console.log);
export const apiv1=Router();
apiv1.get('/', function(req:Request, res:Response) {
  let user=new User()
  user.lastName="moh"
  user.firstName="abdo"
  user.age=26
  AppDataSource.manager.save(user)
  res.end("did")
});
apiv1.get("/users",function(req:Request, res:Response){
  let resd:User[]=[];
  AppDataSource.getRepository(User).find().
  then(d=>{
    res.jsonp({"users":d});  
  }).catch(console.log);
  console.log(resd)

})
