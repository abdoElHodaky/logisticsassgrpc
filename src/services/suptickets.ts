import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { supTicket ,User } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class supTicketService extends _Data {
  constructor (){
      super()
  }

  async all():Promise<supTicket[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(supTicket,{
      relations:{
        user:true
      },
      cache:true
    })
  }

 async create(userId:string,ticket:{type:string,subject:string,description:string}):Promise<supTicket|void>{
    
    
    let id=Number(userId)
   // let _ticket=<supTicket>{...ticket}
    let supticket=this.datasource.manager.create(supTicket,{
      ...ticket
    //  type:ticket.type,subject:ticket.subject,description:ticket.description
    })
    let user:User;
    console.log(ticket,supticket)
  //  let ticket:supTicket;
   /* supticket.type=ticket.type
    supticket.subject=ticket.subject
    supticket.description=ticket.description */
    /*user=await this.datasource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    let u=await this.datasource.manager.save(User,user)
    return u.tickets.at(-1)*/
    return supticket
    
  }
}
