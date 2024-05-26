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
exports.UserGrpcService = void 0;
require("reflect-metadata");
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("../protos/dist/");
const User_1 = require("../entity/User");
//import { Service } from "./service.decorator"
const _1 = require("./");
class UserGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let base = dist_1._User.createBaseUser();
                    /* let res:_User.GetAllUserRes={
                       users:[],
                       error:{
                       Message:"",type:"",name:""
                      }
                     }*/
                    try {
                        let users = yield UserGrpcService.service.all();
                        //  console.log(users)
                        if (users instanceof Array) {
                            let _users = users.map(dist_1._User.User.fromJSON);
                            _users.forEach((user, inx) => {
                                let { id, articles, tickets } = user;
                                user.firstname = users[inx].firstName;
                                user.lastname = users[inx].lastName;
                                user.createdAt = users[inx].created_at;
                                user.updatedAt = users[inx].updated_at;
                                if (articles.length != 0) {
                                    articles.sort((a, b) => b.id - a.id);
                                    articles.forEach(a => a.userId = id);
                                }
                                if (tickets.length != 0) {
                                    tickets.forEach(a => a.userId = id);
                                }
                            });
                            // console.log(_authors)
                            const res = {
                                users: _users,
                                error: {
                                    Message: "", name: "", type: ""
                                }
                            };
                            callback(null, res);
                        }
                        else {
                            callback({ code: grpc_js_1.status.NOT_FOUND }, { users: [], error: {
                                    Message: "No Records matching request", type: "NotFoundError", name: ""
                                } });
                        }
                    }
                    catch (err) {
                        callback({ code: grpc_js_1.status.NOT_FOUND }, { users: [], error: {
                                Message: "No Records matching request", type: "NotFoundError", name: ""
                            } });
                        console.error(err);
                    }
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { user } = call.request;
                    let res;
                    let base = dist_1._User.createBaseUser();
                    try {
                        let __user = yield UserGrpcService.service.create(user);
                        if (__user instanceof User_1.User) {
                            let _user = dist_1._User.User.fromJSON(__user);
                            res = {
                                user: _user /*,error:{
                                 Message:"",type:"",name:""
                                }*/
                            };
                            callback({ code: grpc_js_1.status.OK }, res);
                        }
                        else {
                            res = { user: base
                                /*,error:{
                                   Message:"No Records matching request",type:"NotFoundError",name:""
                                 }*/ 
                            };
                            callback({ code: grpc_js_1.status.NOT_FOUND }, { user: base });
                        }
                    }
                    catch (err) {
                        res = { user: base
                            /*,error:{
                           Message:"Some Internal Error",type:"InternalError",name:""
                            }  */ 
                        };
                        callback({ code: grpc_js_1.status.INTERNAL }, { user: base });
                    }
                });
            },
            id(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { userId } = call.request;
                    let res;
                    let base = dist_1._User.createBaseUser();
                    try {
                        let user = yield UserGrpcService.service.id(userId);
                        if (user instanceof User_1.User) {
                            let _user = dist_1._User.User.fromJSON(user);
                            res = {
                                user: _user, error: {
                                    Message: "", type: "", name: ""
                                }
                            };
                            callback({ code: grpc_js_1.status.OK }, res);
                        }
                        else {
                            res = { user: base,
                                error: {
                                    Message: "No Records matching request", type: "NotFoundError", name: ""
                                } };
                            callback({ code: grpc_js_1.status.NOT_FOUND }, { user: base,
                                error: {
                                    Message: "Some Internal Error", type: "InternalError", name: ""
                                } });
                        }
                    }
                    catch (err) {
                        res = { user: base,
                            error: {
                                Message: "Some Internal Error", type: "InternalError", name: ""
                            } };
                        callback({ code: grpc_js_1.status.INTERNAL }, { user: base,
                            error: {
                                Message: "Some Internal Error", type: "InternalError", name: ""
                            } });
                        console.error(err);
                    }
                });
            }
        };
    }
}
exports.UserGrpcService = UserGrpcService;
UserGrpcService.service = new _1.UserService();
//console.log(Reflect.getMetadata("service",AuthorGrpcService ))
