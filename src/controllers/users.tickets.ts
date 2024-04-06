import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params } from '@decorators/express';
import { Response ,Request} from "express"
import { supTicket } from "../entity/supTicket";

@Controller('/users/:userid/')
export class UserTicketController {

  @Get("tickets")
  async all(@Params("userid") userid:string, @Res() res:Response):Promise<supTicket|void>
  {
    
    let id=Number(userid)
    let user=await AppDataSource.manager.findOneOrFail(User,{where:{
            id:id
           },
           relations:{
            tickets:true
           }
            })
    let tickets=user.tickets
    res.json(tickets)
  }
  
  @Post("")
  async create(@Params("userid") userid:string){
    
    
    let id=Number(userid)
    let supticket=new supTicket()
    let user:User;
    let ticket:supTicket;
    supticket.type="inquiry"
    supticket.subject="Greet"
    supticket.description="How are you?"
    user=await AppDataSource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    await AppDataSource.manager.save(User,user)
    return {message:"created success"}
    
  }
  
}
