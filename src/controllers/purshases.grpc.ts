import { credentials } from "@grpc/grpc-js";
import {_Purshase } from "../protos/dist/";

import { AuthenticateMiddleware, ValidatedCreatePurshase  } from "../middlewares/"
import { CreatePurshaseDto} from "../dto/";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {Env} from "../env";
import {services} from "../services/enum";
const address = "localhost:"+ Env.GRPCSTWOPORT

@Controller('/purshases')
export class PurshaseController {
  
 private client =new _Orgz.OrgzServiceClient(
    address,
    credentials.createInsecure()
  )
  private service=services.Orgz
  
  constructor(){}
  
  @Get("",[])
  async all(@Req() req:Request, @Res() res:Response):Promise<Purshase[]|void>{
    //const {auth}=req
  //  console.log(auth)
    let payments=await this.service.all()
    if ((payments instanceof Array ) && payments.length!=0 ) return payments
    else res.jsonp({message:payments?.message})
  }
  
  @Post("",[AuthenticateMiddleware,ValidatedCreatePurshase ])
  async create(@Req() req:Request,@Body() createpaymentdto:CreatePurshaseDto , @Res() res:Response):Promise<void>{
    const {auth}=req
   // console.log(auth)
    //let payment=await this.paymentService.create(createpaymentdto)
   // return payment;
  }

  
  
}
