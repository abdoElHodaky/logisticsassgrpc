import { Router } from "express";
import { Request,Response } from "express";
import { AppDataSource } from "../_datasource";
import { User } from "../entity/";
import { suptickeroute } from "./usersupticketroutes";
import { isNumeric,nationalIdvalid } from "../helpers";
export const usersroute=Router();
usersroute.get("/users",function(req:Request, res:Response){
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    let resd:User[]=[];
    AppDataSource.getRepository(User).find().
    then(d=>{
      res.jsonp({"users":d});  
    }).catch(console.log);
    console.log(resd)
  
  })
  
  usersroute.get("/users/:userid",function(req:Request, res:Response){
   /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user'
        #swagger.responses[404] = {
            description: ' specific user not found',
            schema:{
              message:"user not found ,please check and try again"
            }
            
    } */
   /* let id:any=req.params["userid"]
    if(isNumeric(id)==true){
      console.log(nationalIdvalid(id))
      id=Number(id)
    AppDataSource.getRepository(User).findOneOrFail({
        where:{
          id:id
        },
        relations:{
          tickets:true,
          verifications:true
        }
      }).
      then(d=>{
        res.jsonp({...d});  
      }).catch(console.log);
    
    }
    else{
      res.json({message:"user not found or you used invalid paramter"})
    }*/
  })
/*
  usersroute.delete("/users/:userid",function(req:Request, res:Response){
    let id=Number(req.params["userid"])
    AppDataSource.getRepository(User).delete({id:id}).
    then(d=>{
        res.jsonp({message:"deleted succefully"})
    }).catch(console.log);
  
  })*/

usersroute.use(suptickeroute)


