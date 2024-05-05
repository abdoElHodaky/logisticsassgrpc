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
exports.AttachmentService = void 0;
const includes_1 = require("../includes");
const entity_1 = require("../entity/");
//import { CreateArticleDto } from "../dto/create-article.dto"
//@Injectable()
class AttachmentService {
    constructor() {
        this.datasource = includes_1.AppDataSource;
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(this._source)
            return yield this.datasource.manager.find(entity_1.Attachment);
        });
    }
}
exports.AttachmentService = AttachmentService;
