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
exports.AuthService = void 0;
const entity_1 = require("../entity/");
const datasource_1 = require("./datasource");
const common_errors_1 = require("common-errors");
//@Injectable()
class AuthService extends datasource_1._Data {
    constructor() { super(); }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, passwordHash } = loginUserDto;
            try {
                let user = yield this.datasource.manager.findOneOrFail(entity_1.User, { where: {
                        username: username,
                        passwordHash: passwordHash,
                        // id:id
                    } });
                return user;
            }
            catch (err) {
                return new common_errors_1.Error("No Records matched", err);
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let _user;
            _user = yield this.datasource.manager.create(entity_1.User, user);
            return _user;
        });
    }
}
exports.AuthService = AuthService;
