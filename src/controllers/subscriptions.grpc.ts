import { services } from "../services/enum";
import { Subscription } from "../entity/"
import { Req,Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response } from "express"
import { Request } from "express-jwt";
import { Error } from "common-errors";

@Controller('/supscriptions')
export class SubscriptionController {
  
  private service:any=services.Subscription
  
  constructor( ) {}

  @Get("")
  async all(@Res() res:Response):Promise<Subscription[]|void> {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */
    let attachments=await this.service.all()
    res.json((attachments instanceof Error)? attachments?.message: attachments)
   }
  
 @Post("")
 async renew(@Req() req:Request):Promise<any>{
   console.log(req.params+" "+req.body+" "+req.query)
   return "d"
 }
