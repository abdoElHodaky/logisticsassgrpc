import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"
import { supTicketController } from "./suptickets";

@Controller('/users/:user/tickets')
export class userTicketController extends supTicketController {}
