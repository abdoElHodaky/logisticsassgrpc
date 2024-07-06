import { UserService } from "../services/";
<<<<<<< HEAD
import { Article ,User } from "../entity/"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete,Req } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
=======
import { Article ,Payment } from "../entity/"
import { AppDataSource } from "../_datasource";
import { AuthenticateMiddleware } from "../middlewares/"
import { CreatePaymentDto} from "../dto/create-payment.dto";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {services} from "../services/enum";
>>>>>>> mainrpc

@Controller('/payments')
export class PaymentController {
  
<<<<<<< HEAD
  
  constructor(){}
  
  @Get("/")
  async all():Promise<User[]>{
    //this.userS.datasource=AppDataSource
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    //let resd:User[]=await AppDataSource.getRepository(User).find()
    
  }

  @Post("/:id/Pay")
  async pay(@Params("id") id:string, @Req() req: Request ):Promise<any> 
  {
    
   const url =`${req.baseUrl}`
    return await this.paymentService.Pay(paymentId,{callback:url+"/callback",return:url+"/return"});

  }

  @Post("/callback")
  async callback(@Req() req:Request){
    let res=await this.paymentService.payCallback(req.body)
    let rp=await this.paymentService.verify(res.transR,res.paymentId)
   
    
  }

  @Post("/return")
  async return(@Req() req:Request){
    let res=await this.paymentService.payCallback(req.body)
    let rp=await this.paymentService.verify(res.transR,res.paymentId)
    
  }
=======
  private paymentService=services.Payment
  private reslt:any
  constructor(){}
  
  @Get("",[AuthenticateMiddleware])
  async all(@Req() req:Request, @Res() res:Response):Promise<Payment[]|void>{
    const {auth}=req
    console.log(auth)
    let payments=await this.paymentService.all(auth?.id)
    if ((payments instanceof Array ) && payments.length!=0 ) return payments
    else res.jsonp({message:payments?.message})
  }
  
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,@Body() createpaymentdto:CreatePaymentDto , @Res() res:Response):Promise<Payment|void>{
    const {auth}=req
   // console.log(auth)
    let payment=await this.paymentService.create(createpaymentdto)
    return payment;
  }

  @Post("/:paymentId/Pay",[AuthenticateMiddleware])
  async pay(@Params("paymentId") paymentId:string, @Req() req: Request ,@Res() res:Response):Promise<any> 
  {
    
   const url =`${req.baseUrl}`
    let reslurl= await this.paymentService.pay(paymentId,{callback:url+"/callback",return:url+"/return"});
    return res.redirect(reslurl)
  }

  @Post("/callback")
  async callback(@Req() req:Request,@Res() res:Response){
   const url = require('url');
    let reslt=await this.paymentService.payCallback(req.body)
    let rp=await this.paymentService.verify(reslt.transR,reslt.paymentId)
    this.reslt=rp
    res.json({message:"ok"})
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
    res.json({message:"ok"})
    /*res.redirect(url.format({
       pathname:req.baseUrl+"/result",
       query: {
          "result":rp ,
        }
     }));*/
    
  }
  @Get("/result",[AuthenticateMiddleware])
  async result(@Res() res:Response){
    return res.jsonp(this.result)
  }
  
>>>>>>> mainrpc
  
}
