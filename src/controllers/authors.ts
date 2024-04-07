import { Inject } from "@decorators/di";
import { AuthorService} from "../services/authors";
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"
import { isNumeric,nationalIdvalid } from "../helpers";


@Controller('/authors/')
export class AuthorController {
  constructor(@Inject("AuthorService") private readonly authorS:AuthorService ){}
  
  @Get("")
  async all():Promise<Author[]>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    let resd:Author[]=await this.authorS.all()
      //await AppDataSource.getRepository(Author).find()
    return resd
  }

  @Post("")
  async create(@Body() author:Author):Promise<Author>{
    let _author=<Author>{...author}
   _author=await AppDataSource.getRepository(Author).save(author)
    return _author
  }
  
  @Get(":id")
  async user(@Params("id") id:string, @Res() res: Response ):Promise<Author|void> 
  {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    if(isNumeric(id)==true){
      console.log(nationalIdvalid(id))
      const _id=Number(id)
     let user=await AppDataSource.getRepository(Author).findOneOrFail({
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

  @Delete("/:id")
  async delete(@Params("id") id:string, @Res() res:Response){
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete specific user' */

   let u=await AppDataSource.getRepository(Author).delete({id:Number(id)})
   if(u) res.jsonp({message:"deleted succefully"})
   
  }

  
}
