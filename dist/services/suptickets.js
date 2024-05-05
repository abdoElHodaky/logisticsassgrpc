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
exports.supTicketService = void 0;
const datasource_1 = require("./datasource");
const entity_1 = require("../entity/");
//import { CreateArticleDto } from "../dto/create-article.dto"
//@Injectable()
class supTicketService extends datasource_1._Data {
    constructor() {
        super();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(this._source)
            return yield this.datasource.manager.find(entity_1.supTicket, {
                relations: {
                    user: true
                }
            });
        });
    }
    create(userId, ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = Number(userId);
            let supticket = new entity_1.supTicket();
            let user;
            //  let ticket:supTicket;
            supticket.type = ticket.type;
            supticket.subject = ticket.subject;
            supticket.description = ticket.description;
            user = yield this.datasource.manager.findOneByOrFail(entity_1.User, { id: id });
            user.tickets.push(supticket);
            let u = yield this.datasource.manager.save(entity_1.User, user);
            return u.tickets.at(-1);
        });
    }
}
exports.supTicketService = supTicketService;
