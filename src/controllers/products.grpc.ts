import { credentials } from "@grpc/grpc-js";
import { _Product } from "../protos/dist/"
//import { Product } from "../entity/";
import { AuthenticateMiddleware } from "../middlewares/"
import { CreateProductDto} from "../dto/";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {services} from "../services/enum";
import {Env} from "../env";
const address = "localhost:"+Env.GRPCSONEPORT


@Controller('/products')
export class GrpcProductController {
  
  private client =new _Product.ProductServiceClient(
    address,
    credentials.createInsecure()
  )
  
  constructor(){}
  
  @Get("",[])
  async all( @Res() res:Response):Promise<void>{
    const req:_Product.GetAllProductsReq={}
    this.client.all(req,(err:any,resp:_Product.GetAllProductsRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const resl=_Product.GetAllProductsRes.toJSON(resp)
       // console.log(resl?.articles.map(transformDate))
        res.json(resl)
     }
  })
  }
  
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,@Body() dto:CreateProductDto,  @Res() res:Response):Promise<void>{
    const {auth}=req
   const productreq:_Product.CreateProductReq=_Product.CreateProductReq.fromJSON(dto)
     
    this.client.create(productreq,(err:any,resp:_Product.CreateProductRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const resl=_Product.CreateProductRes.toJSON(resp)
       // console.log(resl?.articles.map(transformDate))
        res.json(resl)
     }
  })
    
  }

  
  
}
