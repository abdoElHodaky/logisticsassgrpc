import { Router } from "express";
import { AppDataSource } from "../_datasource";
import { User } from "../entity/User";
export const authroute=Router();

authroute.post("/auth/register/",(req,res)=>{
    let user:User=<User>{...req.body}
    console.log(user)
    AppDataSource.manager.save(User,user).then(d=>{
        res.json({messsage:"created succefully",user:user})
    }).catch(console.log)
})

authroute.post("/auth/login/",(req,res)=>{
/* 	#swagger.tags = ['User'] 
    #swagger.description = 'Endpoint to login specific user' */

    
   /* let user:User=<User>{...req.body}
    AppDataSource.manager.findOneOrFail(User,{where:{
        username:user.username,
        passwordHash:user.passwordHash,
        id:user.id
    }}).then(d=>{
        res.json({message:"Login Succefully",user:d})
    }).catch(err=>{
        res.json({message:"Login failed"})
    })*/
})
