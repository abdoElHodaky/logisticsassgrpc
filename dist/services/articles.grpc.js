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
exports.ArticleGrpcService = void 0;
require("reflect-metadata");
const dist_1 = require("../protos/dist/");
//import {Service} from "../service.decorator"
const _1 = require("./");
class ArticleGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let articles = yield ArticleGrpcService.service.all();
                    //console.log(articles)
                    let _articles = articles.map(dist_1._Article.Article.fromJSON);
                    _articles.forEach((a, inx) => {
                        let { author, created_at, updated_at } = articles[inx];
                        a.userId = author.id;
                        a.createdAt = created_at;
                        a.updatedAt = updated_at;
                        //console.log(created_at?.toLocaleString("en-eg", {timeZone: "Africa/cairo"}))
                    });
                    let res = { articles: _articles, error: {
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
exports.ArticleGrpcService = ArticleGrpcService;
//@Service("Article")
ArticleGrpcService.service = new _1.ArticleService();
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
