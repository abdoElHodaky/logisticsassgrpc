import { Router } from "express";
import { Book } from "../entity/Book";
import { isNumeric, nationalIdvalid } from "../helpers";
//import { User } from "../entity/User";
import { AppDataSource } from "../_datasource";

export const booksroute=Router()

booksroute.get("/",(req,res)=>{
    AppDataSource.manager.find(Book).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})

booksroute.post("/create/",(req,res)=>{
    let book=<Book>{...req.body.book}
    let userid=req.body.userid
    if(isNumeric(userid)
    ){
        userid=nationalIdvalid(userid)==true?userid:0
        console.log(book,userid)
        res.jsonp(book)
    }
    else{
        res.json({message:"check your info"})
    }
    
})

