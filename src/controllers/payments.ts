import { UserService } from "../services/";
import { Article ,User } from "../entity/"
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
  private result:any
  constructor(){}
  
  @Get("/")
  async all():Promise<User[]|void>{
    //this.userS.datasource=AppDataSource
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    //let resd:User[]=await AppDataSource.getRepository(User).find()
    
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
    let rp=await this.paymentService.verify(reslg.transR,reslt.paymentId)
    this.result=rp
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
    this.result=rp
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
