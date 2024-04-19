import { UserService } from "../services/";
import { Article ,User } from "../entity/"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";

@Controller('/payments')
export class PaymentController {
  
  
  constructor(){}
  
  @Get("/")
  async all():Promise<User[]>{
    //this.userS.datasource=AppDataSource
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    //let resd:User[]=await AppDataSource.getRepository(User).find()
    
  }

  @Post("/:id/Pay")
  async pay(@Params("id") id:string, @Res() res: Response ):Promise<User|Error|void> 
  {
    
   
  }

  @Post("/:id/PayCallback")
  async callback(){
    
  }

  @Post("/:id/PayReturn")
  async return(){}
  
}
