import { Article } from "../entity/Article"
import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/users')
export class UserController {
  constructor(){}
  
  @Get("/")
  async all(@Res() res:Response):Promise<User[]>{
    let resd:User[]=await AppDataSource.getRepository(User).find()
    return res.jsonp(resd)
  }
}
