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
exports.ValidatedCreatedArticle = exports.ValidatedCreatedUser = exports.ValidatedLogin = void 0;
const dto_1 = require("../dto/");
//import { instanceToPlain } from 'class-transformer';
class ValidatedLogin {
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            // console.log(typeof(body))
            let errors = yield (0, dto_1.validatorDto)(dto_1.LoginUserDto, body);
            //errors=errors.map(e=>instanceToPlain(ValidationError,e))
            console.log(errors);
            if (errors != []) {
                res.status(400).json({
                    messages: errors.map((e) => {
                        // const {constraints}=e
                        return ((e === null || e === void 0 ? void 0 : e.constraints) != {}) ? Object.values(e === null || e === void 0 ? void 0 : e.constraints) : [];
                    }).join(" , ")
                });
            }
            next();
        });
    }
}
exports.ValidatedLogin = ValidatedLogin;
class ValidatedCreatedUser {
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            // console.log(typeof(body))
            const errors = yield (0, dto_1.validatorDto)(dto_1.CreateUserDto, body);
            console.log(errors);
            if (errors != []) {
                res.status(400).json({
                    messages: errors.map((e) => {
                        // const {constraints}=e
                        return ((e === null || e === void 0 ? void 0 : e.constraints) != {}) ? Object.values(e === null || e === void 0 ? void 0 : e.constraints) : [];
                    }).join(" , ")
                });
            }
            next();
        });
    }
}
exports.ValidatedCreatedUser = ValidatedCreatedUser;
class ValidatedCreatedArticle {
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            // console.log(typeof(body))
            const errors = yield (0, dto_1.validatorDto)(dto_1.CreateArticleDto, body);
            console.log(errors);
            if (errors != []) {
                res.status(400).json({
                    messages: errors.map((e) => {
                        // const {constraints}=e
                        return ((e === null || e === void 0 ? void 0 : e.constraints) != {}) ? Object.values(e === null || e === void 0 ? void 0 : e.constraints) : [];
                    }).join(" , ")
                });
            }
            next();
        });
    }
}
exports.ValidatedCreatedArticle = ValidatedCreatedArticle;
