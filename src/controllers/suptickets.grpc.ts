import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Req , Res , Controller , Get , Body ,Post } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt"
import { AuthenticateMiddleware} from "../middlewares/";
import { Error } from "common-errors";
import { isEmpty} from "../helpers";
import {Env} from "../env";
import {transformDate} from "../grpc/util";
const address = "localhost:"+ Env.GRPCSTWOPORT

@Controller("/suptickets")
export class GrpcSupTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async index():Promise<any>{
    return await this.all()
  }
  async all( ):Promise<any>{
   // console.log("89")
    const req:_Ticket.GetAllTicketReq={  
      userId:"0"
    }
    const client=this.client
    return new Promise((resolve,reject)=>{
    client.all(req,(err:any,resp:_Ticket.GetAllTicketRes)=>{
      if (err) {
      reject(err)
    } else {
        const resl=_Ticket.GetAllTicketRes.toJSON(resp)
        resolve(resl)
     }
    })
     })
  }
  
  @Post("",[AuthenticateMiddleware])
  async store(@Req() req:Request, @Body() supticket:{type:string,subject:string,description:string}):Promise<any>{
    const {auth}=req
    const supticketreq:_Ticket.CreateTicketReq={  
      userId:auth?.id.toString(),
      ticket:_Ticket.Ticket.fromJSON({
        type:supticket.type,
        subject:supticket.subject,
        description:supticket.description
      })
      return await this.create(supticketreq)
    }
  
  async create(supticketreq:_Ticket.CreateTicketReq):Promise<void>{
    
    return new Promise((resolve,reject)=>{
    try{
      
    client.create(supticketreq,(err:any,resp:_Ticket.CreateTicketRes)=>{
      if (err) {
      reject(err)
    } else {
       resolve(resp)
     }
    })
    }catch(err:any){  
     reject(err)
   }
      
    });
    
  }


}
