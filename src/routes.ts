import { Router } from "express";
import { authroute } from "./routes/authroute";
import { supTicket } from "./entity/supTicket";
import { User } from "./entity/User";
import { Article } from "./entity/Article"
import { usersroute } from "./routes/usersroute";
import { AppDataSource } from "./_datasource";
export const apiv1=Router();
apiv1.get("/",(req,res)=>{
    res.end("Hello")
})
apiv1.get("/articles/",(req,res)=>{
    AppDataSource.manager.find(Article).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})
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

apiv1.post("/articles/create",(req,res)=>{
    let article:Article=<Article>{...req.body.ticket}
    let userid=req.body.userid
    let user:User;
    AppDataSource.manager.findOneByOrFail(User,{id:userid}).then(d=>{
        user=d;
        return user
    }).then(a=>{
        article.user=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })
    .catch(console.log);
})

apiv1.use(authroute)
apiv1.use(usersroute);
