import {AuthController} from "./auths";
import {AuthorController} from "./authors";
import {UserController} from "./users";
import {UserTicketController} from "./users.tickets";
import {ArticleController} from "./articles";
import {AttachmentController} from "./attachments";


export const controllers=[AuthController,ArticleController
                          AuthorController,
                          UserController,
                          UserTicketController,
                          AttachmentController]
