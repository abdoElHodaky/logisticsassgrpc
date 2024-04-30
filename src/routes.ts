import { Router } from "express";
import { attachControllers } from '@decorators/express'
import { controllers } from "./controllers/";
import { attachmentsroute } from "./routes/attachmentroutes";
import { authorsgrpc } from "./routes/authorsroute-grpc";

export const apiv1=Router();
//console.log(controllers)
attachControllers(apiv1,[...controllers])
//apiv1.use(authroute)
//apiv1.use(usersroute);
//attachControllers(apiv1,[UserController,UserTicketController ])
//attachControllers(apiv1,[])
//attachControllers(apiv1,[AuthorController])
//apiv1.use(authorsgrpc)
//attachControllers(apiv1,[ArticleController])
//apiv1.use(articlesroute)
//apiv1.use(attachmentsroute)
