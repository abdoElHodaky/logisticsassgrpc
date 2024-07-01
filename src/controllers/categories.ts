import { services } from "../services/enum";
import { Category } from "../entity/"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response } from "express"
import { Request } from "express-jwt";


@Controller('/categories')
export class CategoryController {
  
  private service:any=services.Category
  
  constructor( ) {}

  @Get("")
  async all(@Res() res:Response):Promise<Category[]|void> {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */
    let attachments=await this.service.all()
    res.json(attachments)
   }
  }
