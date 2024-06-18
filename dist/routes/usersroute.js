"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersroute = void 0;
const express_1 = require("express");
const _datasource_1 = require("../_datasource");
const entity_1 = require("../entity/");
const usersupticketroutes_1 = require("./usersupticketroutes");
exports.usersroute = (0, express_1.Router)();
exports.usersroute.get("/users", function (req, res) {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */
    let resd = [];
    _datasource_1.AppDataSource.getRepository(entity_1.User).find().
        then(d => {
        res.jsonp({ "users": d });
    }).catch(console.log);
    console.log(resd);
});
exports.usersroute.get("/users/:userid", function (req, res) {
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
});
/*
  usersroute.delete("/users/:userid",function(req:Request, res:Response){
    let id=Number(req.params["userid"])
    AppDataSource.getRepository(User).delete({id:id}).
    then(d=>{
        res.jsonp({message:"deleted succefully"})
    }).catch(console.log);
  
  })*/
exports.usersroute.use(usersupticketroutes_1.suptickeroute);
