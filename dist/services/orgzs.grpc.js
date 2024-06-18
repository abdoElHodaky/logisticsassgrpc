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
exports.orgzGrpcService = void 0;
require("reflect-metadata");
const dist_1 = require("../protos/dist/");
const _1 = require("./");
const entity_1 = require("../entity/");
class orgzGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let orgzs = yield orgzGrpcService.service.all();
                    //console.log(tickets)
                    let _orgzs = orgzs.map(dist_1._Orgz.Orgz.fromJSON);
                    //console.log(tickets)
                    _orgzs.forEach((a, inx) => {
                        let { owner, createdAt, updatedAt } = orgzs[inx];
                        if (owner != null) {
                            a.ownerId = owner.id;
                            //console.log(a.createdAt instanceof Date)
                        }
                        // else { a.userId = Math.floor(Math.random()*21) }
                        // a.createdAt=created_at
                        //a.updatedAt=updated_at
                    });
                    let res = { orgzs: _orgzs, error: {
                            Message: "", type: "", name: ""
                        } };
                    callback(null, res);
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { ownerId, orgz } = call.request;
                    const supticket = dist_1._Orgz.Orgz.toJSON((orgz != undefined) ? orgz : dist_1._Orgz.createBaseOrgz());
                    let _orgz = yield orgzGrpcService.service.create(ownerId, orgz);
                    if (_orgz instanceof entity_1.Orgz) {
                        const orgz = dist_1._Orgz.Orgz.fromJSON(_orgz);
                        orgz.ownerId = ownerId;
                        callback(null, {
                            orgz: orgz
                        });
                    }
                    else {
                        callback(null, {
                            orgz: dist_1._Orgz.createBaseOrgz()
                        });
                    }
                });
            }
        };
    }
}
exports.orgzGrpcService = orgzGrpcService;
// @Service("Ticket")
orgzGrpcService.service = new _1.OrgzService();
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
