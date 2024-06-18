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
exports.ProductService = void 0;
const datasource_1 = require("./datasource");
const entity_1 = require("../entity/");
const common_errors_1 = require("common-errors");
//import { CreateArticleDto } from "../dto/create-article.dto"
//@Injectable()
class ProductService extends datasource_1._Data {
    constructor() {
        super();
    }
    all(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.datasource.manager.find(entity_1.Product, {
                where: (userId != undefined) ? { supplier: { id: userId } } : {},
                relations: {
                    supplier: true
                },
                cache: true
            });
            return (products.length != 0) ? products : new common_errors_1.NotFoundError("Products");
        });
    }
}
exports.ProductService = ProductService;
