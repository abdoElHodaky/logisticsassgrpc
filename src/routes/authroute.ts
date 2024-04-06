import { Router } from "express";
import { AppDataSource } from "../_datasource";
import { User } from "../entity/User";
export const authroute=Router();

authroute.post("/auth/register/",(req,res)=>{
    
/*  #swagger.tags = ['Auth'] 
    #swagger.description = 'Endpoint to register specific user' 
    #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/components/schema/CreateUser' }
    } 
    */
    
   /* let user:User=<User>{...req.body}
    console.log(user)
    AppDataSource.manager.save(User,user).then(d=>{
        res.json({messsage:"created succefully",user:user})
    }).catch(console.log) */
})

authroute.post("/auth/login/",(req,res)=>{
    
/* 	#swagger.tags = ['Auth'] 
    #swagger.description = 'Endpoint to login specific user' 
    #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginUser"
                    }  
                }
            }
        } 
    */
    
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
