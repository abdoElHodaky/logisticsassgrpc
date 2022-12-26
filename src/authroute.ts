import { Router } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
export const authroute=Router();

authroute.post("/auth/signup/",(req,res)=>{
    let user=<User>req.body
    //console.log(req.body)
    res.json(user)
    /*AppDataSource.manager.save(User,user).then(d=>{
        res.json({messsage:"created succefully",user:user})
    }).catch(console.log)*/
})

authroute.post("/auth/login/",(req,res)=>{
    let user:User=<User>{...req.body}
    AppDataSource.manager.findOneOrFail(User,{where:{
        username:user.username,
        passwordHash:user.passwordHash,
        id:user.id
    }}).then(d=>{
        res.json({message:"Login Succefully",user:d})
    }).catch(err=>{
        res.json({message:"Login failed"})
    })
})
