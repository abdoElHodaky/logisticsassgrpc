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
exports.AuthorService = void 0;
const entity_1 = require("../entity/");
const helpers_1 = require("../helpers");
const common_errors_1 = require("common-errors");
const datasource_1 = require("./datasource");
//@Injectable()
class AuthorService extends datasource_1._Data {
    //public  datasource:DataSource=AppDataSource
    constructor() {
        super();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(this.datasource)
            return yield this.datasource.manager.find(entity_1.Author, {
                where: {},
                relations: {
                    articles: true,
                    tickets: true
                }
            });
        });
    }
    id(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, helpers_1.isNumeric)(userId) == true) {
                //console.log(nationalIdvalid(userId))
                const _id = Number(userId);
                try {
                    let user = yield this.datasource.getRepository(entity_1.Author).findOneOrFail({
                        where: {
                            id: _id
                        },
                        relations: {
                            tickets: true,
                            verifications: true
                        }
                    });
                    return user;
                }
                catch (err) {
                    return new common_errors_1.NotFoundError("author", err);
                }
            }
            else
                return new common_errors_1.TypeError("authorId should be number");
        });
    }
    create(authord) {
        return __awaiter(this, void 0, void 0, function* () {
            let _author;
            console.log(authord);
            let dauthor = authord;
            /*  for(var i in authord){
                for(var j in dauthor){
                  dauthor[j]=authord[i]
                }
           
              }*/
            //_author=await this.datasource.manager.create(Author,dauthor)
            //    return await this.datasource.manager.save(Author,_author)
            return;
        });
    }
}
exports.AuthorService = AuthorService;
