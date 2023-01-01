import { Router } from "express";
import { Author } from "../entity/Author";
import { Article } from "../entity/Article"
import { AppDataSource } from "../_datasource";

export const articlesroute=Router()

articlesroute.get("/articles/",(req,res)=>{
    AppDataSource.manager.find(Article).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})



articlesroute.post("/articles/create",(req,res)=>{
    let article:Article=<Article>{...req.body.ticket}
    let userid=req.body.userid
    let author:Author;
    AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
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
