import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Res,  Controller , Get ,Params } from "@decorators/express";
import { Response  } from "express";
import { AuthenticateMiddleware} from "../middlewares/";
import {Env} from "../env";
const address = "localhost:"+Env.GRP_CPORT

@Controller("/users",[])
export class GrpcTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("/:userId/tickets")
  async all(@Res() res:Response,@Params("userId") userId:string):Promise<void>{
    console.log(userId)
    const req:_Ticket.GetAllTicketReq={
      userId:userId
    }
    this.client.all(req,(err:any,resp:any)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
