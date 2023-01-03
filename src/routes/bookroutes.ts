import { Router } from "express";
import { Book } from "../entity/Book";
import { AppDataSource } from "../_datasource";

export const booksroute=Router()

booksroute.get("/",(req,res)=>{
    AppDataSource.manager.find(Book).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})

