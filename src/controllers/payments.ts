import { UserService } from "../services/";
import { Article ,Payment } from "../entity/"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {services} from "../services/enum";
@Controller('/payments')
export class PaymentController {
  
  private paymentService=services.Payment
  private reslt:any
  constructor(){}
  
  @Get("/")
  async all():Promise<Payment[]|void>{
    let payments=await this.paymentService.all()
    return payments
  }

  @Post("/:paymentId/Pay")
  async pay(@Params("paymentId") paymentId:string, @Req() req: Request ):Promise<any> 
  {
    
   const url =`${req.baseUrl}`
    return await this.paymentService.pay(paymentId,{callback:url+"/callback",return:url+"/return"});

  }

  @Post("/callback")
  async callback(@Req() req:Request,@Res() res:Response){
   const url = require('url');
    let reslt=await this.paymentService.payCallback(req.body)
    let rp=await this.paymentService.verify(reslt.transR,reslt.paymentId)
    this.reslt=rp
    res.json({})
   /* res.redirect(url.format({
       pathname:req.baseUrl+"/result",
       query: {
          "result":rp ,
        }
     }));*/
  }

  @Post("/return")
  async return(@Req() req:Request,@Res() res:Response){
    const url = require('url');
    let reslt=await this.paymentService.payCallback(req.body)
    let rp=await this.paymentService.verify(reslt.transR,reslt.paymentId)
    this.reslt=rp
    res.json({})
    /*res.redirect(url.format({
       pathname:req.baseUrl+"/result",
       query: {
          "result":rp ,
        }
     }));*/
    
  }
  @Get("/result")
  async result(@Res() res:Response){
    return res.jsonp(this.result)
  }
  
  
}
