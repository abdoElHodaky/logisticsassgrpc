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
exports.supTicketGrpcService = void 0;
require("reflect-metadata");
const dist_1 = require("../protos/dist/");
const _1 = require("./");
const entity_1 = require("../entity/");
//console.log(services)
class supTicketGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let tickets = yield supTicketGrpcService.service.all();
                    //console.log(tickets)
                    let _tickets = tickets.map(dist_1._Ticket.Ticket.fromJSON);
                    //console.log(tickets)
                    _tickets.forEach((a, inx) => {
                        let { user, createdAt, updatedAt } = tickets[inx];
                        if (user != null) {
                            a.userId = user.id;
                            //console.log(a.createdAt instanceof Date)
                        }
                        else {
                            a.userId = Math.floor(Math.random() * 21);
                        }
                        // a.createdAt=created_at
                        //a.updatedAt=updated_at
                    });
                    let res = { tickets: _tickets, error: {
                            Message: "", type: "", name: ""
                        } };
                    callback(null, res);
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { userId, ticket } = call.request;
                    const supticket = dist_1._Ticket.Ticket.toJSON((ticket != undefined) ? ticket : dist_1._Ticket.createBaseTicket());
                    let _ticket = yield supTicketGrpcService.service.create(userId, supticket);
                    if (_ticket instanceof entity_1.supTicket) {
                        const ticket = dist_1._Ticket.Ticket.fromJSON(_ticket);
                        ticket.userId = parseInt(userId);
                        callback(null, {
                            ticket: ticket
                        });
                    }
                    else {
                        callback(null, {
                            ticket: dist_1._Ticket.createBaseTicket()
                        });
                    }
                });
            }
        };
    }
}
exports.supTicketGrpcService = supTicketGrpcService;
// @Service("Ticket")
supTicketGrpcService.service = new _1.supTicketService();
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
