import { Router } from "express";
import { Book } from "../entity/Book";
import { isNumeric, nationalIdvalid } from "../helpers";
//import { User } from "../entity/User";
import { AppDataSource } from "../_datasource";

export const booksroute=Router()

booksroute.get("/",(req,res)=>{
    /* 	#swagger.tags = ['Attachment.Book']
        #swagger.description = 'Endpoint to get books' 
    */
    AppDataSource.manager.find(Book).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})

booksroute.post("/create/",(req,res)=>{
    /* 	#swagger.tags = ['Attachment.Book']
        #swagger.description = 'Endpoint to get tickets' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'book.',
            schema: { $ref: '#/definitions/AddBook' }
    } 
    */
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

