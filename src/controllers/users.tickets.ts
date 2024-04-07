//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params } from '@decorators/express';
import { Response ,Request} from "express"
import { supTicket , User } from "../entity/";
import { UserTicketService } from "../services/users.tickets";

@Controller('/users')
export class UserTicketController {
 private userticketS:UserTicketService =new UserTicketService()
  @Get("/:userid/tickets")
  async all(@Params("id") id:string, @Res() res:Response):Promise<supTicket[]|void>
  {
    
   /* let id=Number(userid)
    let user=await AppDataSource.manager.findOneOrFail(User,{where:{
            id:id
           },
           relations:{
            tickets:true
           }
            })*/
    let tickets=await this.userticketS.all(id)
    res.json(tickets)
  }
  
  @Post("/:userid/tickets")
  async create(@Params("userid") userid:string){
    
    
   /* let id=Number(userid)
    let supticket=new supTicket()
    let user:User;
    let ticket:supTicket;
    supticket.type="inquiry"
    supticket.subject="Greet"
    supticket.description="How are you?"
    user=await AppDataSource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    await AppDataSource.manager.save(User,user)*/
    let ticket=await this.userticketS.create(userid)
    if(ticket) return {message:"created success"}
    
  }
  
}
