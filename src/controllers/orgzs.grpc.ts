import { Orgz } from "../entity/"
import { AppDataSource } from "../_datasource";
import { AuthenticateMiddleware } from "../middlewares/"
//import { CreatePaymentDto} from "../dto/create-payment.dto";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {services} from "../services/enum";

@Controller('/products')
export class GrpcProductController {
  
  private service=services.Orgz
  
  constructor(){}
  
  @Get("",[])
  async all(@Req() req:Request, @Res() res:Response):Promise<Orgz[]|void>{
    const {auth}=req
    console.log(auth)
    let orgzs=await this.service.all()
    if ((orgzs instanceof Array ) && orgzs.length!=0 ) return orgzs
    else res.jsonp({message:orgzs?.message})
  }
  
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,/*@Body() createpaymentdto:CreatePaymentDto*/  @Res() res:Response):Promise<Product|void>{
    const {auth}=req
   // console.log(auth)
    //let payment=await this.paymentService.create(createpaymentdto)
   // return payment;
  }

  
  
}
