import { credentials } from "@grpc/grpc-js";
import {_Article } from "../protos/dist/";
import { Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";

const address = "localhost:50051";

@Controller("/grpc/articles")
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
}
