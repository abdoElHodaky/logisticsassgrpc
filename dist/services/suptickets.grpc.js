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
//import { Service } from "../service.decorator";
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
                        let { user, created_at, updated_at } = tickets[inx];
                        if (user != null) {
                            a.userId = user.id;
                            //console.log(a.createdAt instanceof Date)
                        }
                        else {
                            a.userId = Math.floor(Math.random() * 21);
                        }
                        a.createdAt = created_at;
                        a.updatedAt = updated_at;
                    });
                    let res = { tickets: _tickets, error: {
                            Message: "", type: "", name: ""
                        } };
                    callback(null, res);
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                });
            }
        };
        /*static  async _all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
            callback: sendUnaryData<_Article.GetAllRes>
         ){
          let articles=await this.artclS.all()
          let _articles=articles.map(_Article.Article.fromJSON)
          console.log(_articles)
          }
        
        static  async _create(
            call: ServerUnaryCall<_Article.CreateReq,_Article.CreateRes>,
            callback: sendUnaryData<_Article.CreateRes>
          ){}
            */
    }
}
exports.supTicketGrpcService = supTicketGrpcService;
// @Service("Ticket")
supTicketGrpcService.service = new _1.supTicketService();
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
