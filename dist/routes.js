"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiv1 = void 0;
const express_1 = require("express");
const express_2 = require("@decorators/express");
const controllers_1 = require("./controllers/");
exports.apiv1 = (0, express_1.Router)();
//console.log(controllers)
(0, express_2.attachControllers)(exports.apiv1, [...controllers_1.controllers]);
//apiv1.use(authroute)
//apiv1.use(usersroute);
//attachControllers(apiv1,[UserController,UserTicketController ])
//attachControllers(apiv1,[])
//attachControllers(apiv1,[AuthorController])
//apiv1.use(authorsgrpc)
//attachControllers(apiv1,[ArticleController])
//apiv1.use(articlesroute)
//apiv1.use(attachmentsroute)
