import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { supTicket,User } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class supTickeStervice extends _Data {
  constructor (){
      super()
  }

  async all():Promise<supTicket[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(supTicket,{
      relations:{
        user:true
      }
    })
  }

 async create(userId:string,ticket:object):Promise<supTicket|void>{
    
    
    let id=Number(userId)
    let supticket=new supTicket()
    let user:User;
    let ticket:supTicket;
    supticket.type=ticket.type
    supticket.subject=ticket.subject
    supticket.description=ticket.description
    user=await this.datasource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    let u=await this.datasource.manager.save(User,user)
    return u.tickets.at(-1)
    
  }
}
