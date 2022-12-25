import { Router } from "express";
import { Request,Response } from "express";
import { AppDataSource } from "./_datasource";
import { User } from "./entity/User";
import { supTicket } from "./entity/supTicket";
export const suptickeroute=Router({mergeParams:true});
suptickeroute.get("/tickets/",(req:Request,res:Response)=>{
    let id=Number(req.params["userid"])
    let user:User
    AppDataSource.manager.findOneByOrFail(User,{id:id}).then(d=>{
        d.tickets=[]
        user=d
    }).catch(console.log)
    AppDataSource.createQueryBuilder()
       .relation(User,"tickets").of(id).loadMany().then(tickets=>{
        user.tickets=tickets
        res.jsonp({...user})
        }).catch(console.log)
       
  });


suptickeroute.get("/tickets/create",(req:Request,res:Response)=>{
    let id=Number(req.params["userid"])
    let supticket=new supTicket()
    supticket.type="inquiry"
    supticket.subject="Greet"
    supticket.description="How are you?"
    AppDataSource
        .createQueryBuilder()
        .relation(User, "tickets")
        .of(id)
        .add(supticket)
        res.json({...supticket})
    
    //res.end("did")
  });
