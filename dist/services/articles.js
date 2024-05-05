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
exports.ArticleService = void 0;
const datasource_1 = require("./datasource");
const entity_1 = require("../entity/");
//@Injectable()
class ArticleService extends datasource_1._Data {
    constructor() {
        super();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(this._source)
            return yield this.datasource.manager.find(entity_1.Article, {
                relations: {
                    author: true
                }
            });
        });
    }
    create(createArticleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { article, userid } = createArticleDto;
            let _article = Object.assign({}, article);
            let author = yield this.datasource.manager.findOneByOrFail(entity_1.Author, { id: parseInt(userid) });
            _article.author = author;
            author.articles.push(_article);
            _article = yield this.datasource.manager.save(entity_1.Article, _article);
            return _article;
        });
    }
}
exports.ArticleService = ArticleService;
