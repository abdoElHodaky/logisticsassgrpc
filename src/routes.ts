import { Router } from "express";
import { supTicket } from "./entity/supTicket";
import { usersroute } from "./usersroute";
import { AppDataSource } from "./_datasource";
export const apiv1=Router();
apiv1.get("/",(req,res)=>{
    res.end("Hello")
})
apiv1.get("/supticts",(req,res)=>{
    AppDataSource.manager.find(supTicket).
    then(d=>{
        d.map((el,i)=>console.log(el.user))
        res.json(d)
    }).catch(console.log)
})
apiv1.use(usersroute);