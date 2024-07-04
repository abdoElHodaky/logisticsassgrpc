
import { services } from "../services/enum";
import { Verification ,User } from "../entity/"
//import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";

@Controller('/verifications')
export class VerificationController {
  
  private  veerifyS:any=services.Verification
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
    return req.body
  }

  
}
