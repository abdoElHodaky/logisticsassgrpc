import { Router } from "express";
import { attachControllers } from '@decorators/express'
import { AuthController } from "./controllers/auths";
import { supTicket } from "./entity/supTicket";
import { User } from "./entity/User";
import { UserController } from "./controllers/users";
import { userTicketController } from "./controllers/users.tickets";
import { AppDataSource } from "./_datasource";
import { ArticleController } from "./controllers/articles";
import { AuthorController } from "./controllers/authors";
import { attachmentsroute } from "./routes/attachmentroutes";
export const apiv1=Router();
apiv1.get("/suptickets",(req,res)=>{
    AppDataSource.manager.find(supTicket).
    then(d=>{
        //d.map((el,i)=>console.log(el.user))
        res.json(d)
    }).catch(console.log)
})
apiv1.post("/suptickets/create",(req,res)=>{
    let supticket:supTicket=<supTicket>{...req.body.ticket}
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
    .catch(console.log);
    /*AppDataSource.manager.save(supTicket,ticket).then(d=>{
        res.json({message:"created successfully"});
    }).catch(console.log);*/
    

})
attachControllers(apiv1,[AuthController])
//apiv1.use(authroute)
//apiv1.use(usersroute);
attachControllers(apiv1,[UserController,userTicketController])
attachControllers(apiv1,[AuthorController])
//apiv1.use(authorsroutes)
attachControllers(apiv1,[ArticleController])
//apiv1.use(articlesroute)
apiv1.use(attachmentsroute)
