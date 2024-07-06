import { Router } from "express";
export const supticketsroute=Router()
supticketsroute.get("/suptickets",(req,res)=>{
        console.log(req)
/* 	#swagger.tags = ['suptickets']

        #swagger.description = 'Endpoint to get tickets' 
    */
    
  /*  AppDataSource.manager.find(supTicket).
    then(d=>{
        //d.map((el,i)=>console.log(el.user))
        res.json(d)
    }).catch(console.log)*/
})
supticketsroute.post("/suptickets",(req,res)=>{
    /* 	#swagger.tags = ['suptickets']
        #swagger.description = 'Endpoint to create tickets for specific user'
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/userAddTicket' }
                }
            }
        } 
        #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   /* let supticket:supTicket=<supTicket>{...req.body.ticket}
    let userid=req.body.userid
    let user:User;
    AppDataSource.manager.findOneByOrFail(User,{id:userid}).then(d=>{
        user=d;
        return user
    }).then(a=>{
        supticket.user=a;
        a.tickets=[]
        a.tickets.push(supticket)
        return supticket
    }).then(a=>{
        AppDataSource.manager.save(supTicket,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })
    .catch(console.log);*/
    /*AppDataSource.manager.save(supTicket,ticket).then(d=>{
        res.json({message:"created successfully"});
    }).catch(console.log);*/
    

})
