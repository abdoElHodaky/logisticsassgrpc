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
exports.AuthGrpcService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const _1 = require("./");
//import { Service} from "../service.decorator";
class AuthGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            register: (call, callback) => __awaiter(this, void 0, void 0, function* () {
                let user = yield AuthGrpcService.service.create(call.request["user"]);
                let res = { user: user, error: {
                        Message: "", type: "", name: ""
                    } };
                callback({ code: grpc_js_1.status.OK }, res);
            }),
            login: (call, callback) => __awaiter(this, void 0, void 0, function* () {
                const { username, passwordHash } = call.request;
                let user = yield AuthGrpcService.service.login({ username: username, passwordHash: passwordHash });
            })
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
exports.AuthGrpcService = AuthGrpcService;
//@Service("Auth")
AuthGrpcService.service = new _1.AuthService();
