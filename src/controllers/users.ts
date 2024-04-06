import { Article } from "../entity/Article"
import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";


@Controller('/users')
export class UserController {
  constructor(){}
  
  @Get("/")
  async all():Promise<User[]>{
    let resd:User[]=await AppDataSource.getRepository(User).find()
    return resd
  }

  @Get("/:id")
  async user(@Params("id") id:string, @Res() res: Response ):Promise<User|void> 
  {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    if(isNumeric(id)==true){
      console.log(nationalIdvalid(id))
      const _id=Number(id)
     let user=await AppDataSource.getRepository(User).findOneOrFail({
        where:{
          id:_id
        },
        relations:{
          tickets:true,
          verifications:true
        }
      })
      return user
    }
    else{
       res.json({message:"user not found or you used invalid paramter"})
    }
  }

  
}
