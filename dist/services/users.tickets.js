"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTicketService = void 0;
const datasource_1 = require("./datasource");
//import { CreateArticleDto } from "../dto/create-article.dto"
const entity_1 = require("../entity/");
const common_errors_1 = require("common-errors");
const helpers_1 = require("../helpers");
class UserTicketService extends datasource_1._Data {
    constructor() { super(); }
    all(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, helpers_1.isNumeric)(userId) == true) {
                let id = Number(userId);
                try {
                    /* let user=await this.datasource.manager.findOneOrFail(User,{where:{
                            id:id
                           },
                           relations:{
                            tickets:true
                           }
                            })*/
                    let tickets = yield this.datasource.manager.find(entity_1.supTicket, {
                        where: { user: { id: id } }, cache: true
                    });
                    if (tickets.length != 0)
                        return tickets;
                    else
                        throw new common_errors_1.NotFoundError("Tickets");
                }
                catch (err) {
                    return err;
                }
            }
            else
                return new TypeError("userId should be number");
        });
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = Number(userId);
            let supticket = new entity_1.supTicket();
            let user;
            let ticket;
            supticket.type = "inquiry";
            supticket.subject = "Greet";
            supticket.description = "How are you?";
            user = yield this.datasource.manager.findOneByOrFail(entity_1.User, { id: id });
            user.tickets.push(supticket);
            let u = yield this.datasource.manager.save(entity_1.User, user);
            return u.tickets.at(-1);
        });
    }
}
exports.UserTicketService = UserTicketService;
