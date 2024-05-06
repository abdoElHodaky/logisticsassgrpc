import { credentials } from "@grpc/grpc-js";
import {_Article } from "../protos/dist/";
import { Res,  Controller , Get ,Post,Req} from "@decorators/express";
import { Response  ,Request} from "express";
import {AuthenticateMiddleware} from "../authenticate.middleware";
const address = "localhost:50051";
var { expressjwt: jwt } = require("express-jwt");

@Controller("/articles")
export class GrpcArticleController {
  private client =new _Article.ArticleServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
    const req:_Article.GetAllReq={}
    this.client.all(req,(err:any,resp:_Article.GetAllRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
  
 // @AuthenticateMiddleware
  @Post("/create",[jwt( { secret: "secret", algorithms: ["HS256"] } ),AuthenticateMiddleware])
  async create(@Req() req:Request,@Res() res:Response):Promise<void>{
    
  }
}
