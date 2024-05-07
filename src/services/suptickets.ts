import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { supTicket as Ticket,User } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class supTicketService extends _Data {
  constructor (){
      super()
  }

  async all():Promise<supTicket[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Ticket,{
      relations:{
        user:true
      }
    })
  }

 async create(userId:string,ticket:{type:string,subject:string,description:string}):Promise<supTicket|void>{
    
    
    let id=Number(userId)
    let _ticket=<Ticket>{...ticket}
    let supticket=this.datasource.manager.create(Ticket,ticket)
    let user:User;
  //  let ticket:supTicket;
   /* supticket.type=ticket.type
    supticket.subject=ticket.subject
    supticket.description=ticket.description */
    user=await this.datasource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    let u=await this.datasource.manager.save(User,user)
    return u.tickets.at(-1)
    
  }
}
