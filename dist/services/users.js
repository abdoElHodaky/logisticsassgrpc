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
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity/");
//import { CreateArticleDto } from "../dto/create-article.dto"
const helpers_1 = require("../helpers");
const common_errors_1 = require("common-errors");
const datasource_1 = require("./datasource");
//@Injectable()
class UserService extends datasource_1._Data {
    constructor() {
        super();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(this.datasource)
            return yield this.datasource.manager.find(entity_1.User, {
                relations: [
                    "articles",
                    "tickets"
                ]
            });
        });
    }
    id(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, helpers_1.isNumeric)(userId) == true) {
                // console.log(userId)
                const _id = Number(userId);
                try {
                    let user = yield this.datasource.getRepository(entity_1.User).findOneOrFail({
                        where: {
                            id: _id
                        },
                        relations: [
                            "tickets",
                            "verifications",
                            "articles"
                        ]
                    });
                    return user;
                }
                catch (error) {
                    return new common_errors_1.NotFoundError("User", error);
                }
            }
            else
                return new common_errors_1.TypeError("userId should be number");
        });
    }
    defaults() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.datasource.manager.find(entity_1.User, {
                where: [
                    {
                        username: '',
                        passwordHash: ''
                    },
                    {
                        username: (0, typeorm_1.IsNull)(),
                        passwordHash: (0, typeorm_1.IsNull)()
                    },
                ],
            });
            users.forEach(e => {
                if ((e.firstName == "" || e.firstName == null) && (e.lastName == "" || e.lastName == null)) {
                    e.firstName = `Timber_`;
                    e.lastName = `Saw__${e.id}`;
                }
                e.username = `test_279346__${e.id}`;
                e.passwordHash = `test_297438__${e.id}`;
            });
            yield this.datasource.manager.save(entity_1.User, users);
        });
    }
}
exports.UserService = UserService;
