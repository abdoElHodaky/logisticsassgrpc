"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authroute = void 0;
const express_1 = require("express");
exports.authroute = (0, express_1.Router)();
exports.authroute.post("/auth/register", (req, res) => {
    /*  #swagger.tags = ['Auth']
        #swagger.description = 'Endpoint to register specific user'
        #swagger.parameters['body'] = {
                in: 'body',
                description: 'Add new user.',
                schema: { $ref: '#/definitions/CreateUser' }
        }
        */
    /* let user:User=<User>{...req.body}
     console.log(user)
     AppDataSource.manager.save(User,user).then(d=>{
         res.json({messsage:"created succefully",user:user})
     }).catch(console.log) */
});
exports.authroute.post("/auth/login", (req, res) => {
    /* 	#swagger.tags = ['Auth']
        #swagger.description = 'Endpoint to login specific user'
         #swagger.parameters['body'] = {
                in: 'body',
                description: 'login of specific user.',
                schema: { $ref: '#/definitions/LoginUser' }
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
});
