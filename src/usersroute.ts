import { Router } from "express";
import { Request,Response } from "express";
import { AppDataSource } from "./_datasource";
import { User } from "./entity/User";
import { suptickeroute } from "./supticketroutes";
export const usersroute=Router();
usersroute.get('/users/create', function(req:Request, res:Response) {
    let user=new User()
    user.lastName="moh"
    user.firstName="abdo"
    user.age=26
    AppDataSource.manager.save(user)
    res.end("did")
  });
  usersroute.get("/users",function(req:Request, res:Response){
    let resd:User[]=[];
    AppDataSource.getRepository(User).find().
    then(d=>{
      res.jsonp({"users":d});  
    }).catch(console.log);
    console.log(resd)
  
  })
  
  usersroute.get("/users/:userid",function(req:Request, res:Response){
    let id=Number(req.params["userid"])
    AppDataSource.getRepository(User).findOneByOrFail({id:id}).
    then(d=>{
      res.jsonp({"user":d});  
    }).catch(console.log);
  
  })

  usersroute.get("/users/:userid/delete",function(req:Request, res:Response){
    let id=Number(req.params["userid"])
    AppDataSource.getRepository(User).delete({id:id}).
    then(d=>{
        res.jsonp({message:"deleted succefully"})
    }).catch(console.log);
  
  })

usersroute.use("/users/:userid",suptickeroute)


