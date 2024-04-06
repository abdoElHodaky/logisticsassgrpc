import {
  Response, Params, Controller, Get,
  attachControllers, Middleware
} from '@decorators/express';

@Controller('/')
class ArticleController {

  constructor() {}

  @Get('/articles')
  getData(@Response() res) {
    res.send(this.userService.findById(id));
  }
}
