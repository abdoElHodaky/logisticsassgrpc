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
    create(articlecdto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, article } = articlecdto;
            let _article = this.datasource.manager.create(entity_1.Article, Object.assign({}, article));
            console.log("DataS ", _article);
            /*_article.title=article.title
           _article.imgurl=article.imgurl
           _article.content=article.content*/
            //onsole.log(article)
            /* let author=await this.datasource.manager.findOneByOrFail(Author,{id:userId})
             _article.author=author
             author.articles.push(_article)
             _article=await this.datasource.manager.save(Article,_article)*/
            return _article;
        });
    }
}
exports.ArticleService = ArticleService;
