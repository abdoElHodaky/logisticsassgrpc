import { service } from "../services/";
import { Article , Author } from "../entity/"
import { AppDataSource } from "../_datasource";
import { CreateAuthorDto } from "../dto/"
import { Req,Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response} from "express"
import { Request} from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error } from "common-errors";

@Controller('/authors')
export class AuthorController {
  @service("Author")
  private readonly authorS:any
  constructor( ){}
  
  @Get("")
  async all():Promise<Author[]|Error>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get users' */

    let resd=await this.authorS.all()
      //await AppDataSource.getRepository(Author).find()
    return resd
  }

  @Post("")
  async create(@Req() req:Request):Promise<Author|Error|void>{
    let _author;
   _author=await this.authorS.create(req?.auth)
    return _author
  }
  
  @Get("/:id")
  async user(@Params("id") id:string, @Res() res: Response ):Promise<Author|Error|void> 
  {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

   /* if(isNumeric(id)==true){
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
    }*/
    let author =await this.authorS.id(id)
   // console.log(author)
    if (author instanceof Author){return author}
    else res.status(404).jsonp({message:author?.message})
   // else res.json({message:"user not found or you used invalid paramter"})
    
    
  }

  @Delete("/:id")
  async delete(@Params("id") id:string, @Res() res:Response){
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete specific user' */

   let u=await AppDataSource.getRepository(Author).delete({id:Number(id)})
   if(u) res.jsonp({message:"deleted succefully"})
   
  }

  
}
