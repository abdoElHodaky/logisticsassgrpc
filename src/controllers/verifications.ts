
import { services } from "../services/enum";
import { Verification ,User } from "../entity/"
//import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Req,Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response } from "express"
import { Request } from "express-jwt";
import { AuthenticateMiddleware} from "../middlewares/";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";

@Controller('/verifications',[AuthenticateMiddleware])
export class VerificationController {
  
  private  verifyS:any=services.Verification
  constructor(){}
  
  @Get("")
  async all():Promise<User[]>{
    //this.userS.datasource=AppDataSource
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    //let resd:User[]=await AppDataSource.getRepository(User).find()
    let users= await this.verifyS.all()
    return users
  }

  @Post("")
  async create(@Req() req:Request,@Res() res: Response ):Promise<any|void> 
  {
   const verification= await this.verifyS.create(req.body.forWhat)
   res.json(verification)
  }
  
  @Post("/validate")
  async validate(@Req() req:Request,@Res() res: Response ):Promise<any|void> 
  {
   const validated= await this.verifyS.validate(req.body)
   res.json(validated)
  }

  
}
