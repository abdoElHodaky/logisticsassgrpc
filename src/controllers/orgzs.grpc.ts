import { credentials } from "@grpc/grpc-js";
import {_Orgz } from "../protos/dist/";
import { AuthenticateMiddleware } from "../middlewares/"
//import { CreatePaymentDto} from "../dto/create-payment.dto";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {Env} from "../env";
import {services} from "../services/enum";
const address = "localhost:"+ Env.GRPCSTWOPORT
@Controller('/products')
export class GrpcProductController {
  private client =new _Orgz.OrgzServiceClient(
    address,
    credentials.createInsecure()
  )
  private service=services.Orgz
  
  constructor(){}
  
  @Get("",[])
  async all(@Res() res:Response ):Promise<void>{
   // console.log("89")
    const req:_Orgz.GetAllOrgzReq={  
      
    }
    console.log(req)
    this.client.all(req,(err:any,resp:_Ticket.GetAllTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const resl=_Orgz.GetAllOrgzRes.toJSON(resp)
        
        res.json(resl)
     }
    })
  }
  
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,/*@Body() createpaymentdto:CreatePaymentDto*/  @Res() res:Response):Promise<Product|void>{
    const {auth}=req
   // console.log(auth)
    //let payment=await this.paymentService.create(createpaymentdto)
   // return payment;
  }

  
  
}
