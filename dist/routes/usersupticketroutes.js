"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suptickeroute = void 0;
const express_1 = require("express");
exports.suptickeroute = (0, express_1.Router)({ mergeParams: true });
exports.suptickeroute.get("/users/:userId/tickets", (req, res) => {
    /* 	#swagger.tags = ['User.Ticket']
        #swagger.description = 'Endpoint to get tickets'
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'get tickets.',
            type:"string"
    */
    //  let id=Number(req.params["userid"])
    // let user:User
    /*AppDataSource.manager.findOneByOrFail(User,{id:id}).then(d=>{
        d.tickets=[]
        user=d
    }).catch(console.log)
    AppDataSource.createQueryBuilder()
       .relation(User,"tickets").of(id).loadMany().then(tickets=>{
        user.tickets=tickets
        res.jsonp({...user})
        }).catch(console.log)
      */
    /*  AppDataSource.manager.findOneOrFail(User,{where:{
          id:id
         },
         relations:{
          tickets:true
         }
          }).then(d=>{
              user=d
              return user
          }).then(a=>{
              res.jsonp(a)
          }).catch(console.log)    */
});
exports.suptickeroute.post("/users/:userId/tickets", (req, res) => {
    /* 	#swagger.tags = ['User.Ticket']
        #swagger.description = 'Endpoint to get tickets'
        #swagger.parameters['userid'] = {
            in: 'body',
            description: 'add tickets. for specific user',
            schema: { $ref: '#/components/schemas/userAddTicket' }
    }
    */
    /*  let id=Number(req.params["userid"])
      let supticket=new supTicket()
      let user:User;
      let ticket:supTicket;
      supticket.type="inquiry"
      supticket.subject="Greet"
      supticket.description="How are you?"
      AppDataSource.manager.findOneByOrFail(User,{id:id}).then(d=>{
          user=d;
          return user
      }).then(a=>{
          /*AppDataSource
          .createQueryBuilder()
          .relation(User, "tickets")
          .of(a)
          .add(supticket)*/
    /*  supticket.user=a;
      a.tickets=[]
      a.tickets.push(supticket)
      return supticket
  }).then(a=>{
      AppDataSource.manager.save(a)
      //AppDataSource.manager.save(a.user)
      let obj=JSON.parse(CircularJSON.stringify(a))
      res.redirect("..")
  })
  .catch(console.log);
  
  
 /*AppDataSource.manager.findOneOrFail(User,{where:{
  id:id
 },
 relations:{
  tickets:true
 }
  }).then(d=>{
      user=d
      d.tickets=[]
      d.tickets.push(supticket)
  }).then(d=>{
      supticket.user=user
      return supticket
  }).then(a=>{
      var obj;
      console.log(a)
      res.jsonp(JSON.parse(CircularJSON.stringify(a)))



  }).catch(console.log)
  */
});
