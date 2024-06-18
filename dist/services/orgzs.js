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
exports.OrgzService = void 0;
const datasource_1 = require("./datasource");
const entity_1 = require("../entity/");
const common_errors_1 = require("common-errors");
const enum_1 = require("./enum");
//import { CreateArticleDto } from "../dto/create-article.dto"
//@Injectable()
class OrgzService extends datasource_1._Data {
    constructor() {
        super();
    }
    all(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const orgzs = yield this.datasource.manager.find(entity_1.Orgz, {
                where: (userId != undefined) ? { owner: { id: userId } } : {},
                relations: {
                    owner: true
                },
                cache: true
            });
            return (orgzs.length != 0) ? orgzs : new common_errors_1.NotFoundError("Products");
        });
    }
    create(userId, orgz) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield enum_1.services.User.id(userId);
            if (user instanceof entity_1.User)
                user = user;
            const _orgz = yield this.datasource.manager.create(entity_1.Orgz, Object.assign({}, orgz));
            _orgz.owner = user;
            return _orgz;
        });
    }
}
exports.OrgzService = OrgzService;
