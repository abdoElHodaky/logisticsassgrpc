"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Product_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const __1 = require("../");
const attachments_1 = require("../attachments/");
const Subscription_1 = require("../Subscription");
let Product = Product_1 = 
//@ChildEntity()
class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Object)
], Product.prototype, "specs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attachments_1.ProductAttachment, attachment => attachment.attached),
    __metadata("design:type", Array)
], Product.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => __1.Supplier, supplier => supplier.products),
    __metadata("design:type", __1.Supplier)
], Product.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1, sub => sub.related),
    __metadata("design:type", Array)
], Product.prototype, "subproducts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1, related => related.subproducts),
    __metadata("design:type", Product)
], Product.prototype, "related", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Subscription_1.Subscription, subscrip => subscrip.products),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Product.prototype, "subscriptions", void 0);
Product = Product_1 = __decorate([
    (0, typeorm_1.Entity)()
    //@ChildEntity()
], Product);
exports.Product = Product;
/*@ChildEntity()
export class ChildProduct extends Product {

    @ManyToOne(()=>Product,related=>related.subproducts)
    @JoinColumn([
    { name: "relatedId", referencedColumnName: "id" },
    {} ])
    related?:Product
}
*/
