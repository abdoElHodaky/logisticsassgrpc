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
exports.TicketGrpcService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const entity_1 = require("../entity/");
const dist_1 = require("../protos/dist/");
const _1 = require("./");
//@service("Ticket")
class TicketGrpcService {
    constructor() {
        // public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { userId } = call.request;
                    try {
                        let tickets = yield TicketGrpcService.service.all(userId);
                        if (tickets instanceof Array) {
                            let _tickets = tickets.map(dist_1._Ticket.Ticket.fromJSON);
                            _tickets.forEach((e, i) => { e.userId = parseInt(userId); });
                            const res = {
                                tickets: _tickets,
                                error: {
                                    Message: "", name: "", type: ""
                                }
                            };
                            callback(null, res);
                        }
                        else {
                            callback(null, { tickets: [], error: {
                                    Message: "No Records matching request", type: "NotFoundError", name: ""
                                } });
                        }
                    }
                    catch (err) {
                        callback({ code: grpc_js_1.status.INTERNAL }, { tickets: [], error: {
                                Message: "Some Internet Error", type: "InternalError", name: ""
                            } });
                        console.error(err);
                    }
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { userId, ticket } = call.request;
                    try {
                        const supticket = dist_1._Ticket.Ticket.toJSON((ticket != undefined) ? ticket : dist_1._Ticket.createBaseTicket());
                        let _ticket = yield TicketGrpcService.service.create(userId, supticket);
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
                    }
                    catch (err) {
                        callback({ code: grpc_js_1.status.INTERNAL }, {
                            ticket: dist_1._Ticket.createBaseTicket()
                        });
                    }
                });
            }
        };
    }
}
exports.TicketGrpcService = TicketGrpcService;
TicketGrpcService.service = new _1.UserTicketService();
