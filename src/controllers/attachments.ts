<<<<<<< HEAD
import { service } from "../services/";
=======
import { services } from "../services/enum";
>>>>>>> mainrpc
import { Attachment } from "../entity/"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/attachments')
export class AttachmentController {
<<<<<<< HEAD
  @service("Attachment")
  private attachmentS:any
=======
  
  private attachmentS:any=services.Attachment
>>>>>>> mainrpc
  
  constructor( ) {}

  @Get("")
  async all(@Res() res:Response):Promise<Attachment[]|void> {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */
    let attachments=await this.attachmentS.all()
    res.json(attachments)
   }
  }
