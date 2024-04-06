import { Author } from "../entity/Author";
import { Article } from "../entity/Article"
import { AppDataSource } from "../_datasource";

import {
  Response, Params, Controller, Get,
  attachControllers, Middleware
} from '@decorators/express';

@Controller('/')
class ArticleController {

  constructor() {}

  @Get('articles')
  All(@Response() res) {
    res.send(this.userService.findById(id));
  }
}
