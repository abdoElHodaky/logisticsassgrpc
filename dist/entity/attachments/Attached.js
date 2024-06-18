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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgzAttachment = exports.ProductAttachment = void 0;
const typeorm_1 = require("typeorm");
const Attachment_1 = require("./Attachment");
const __1 = require("../");
let ProductAttachment = class ProductAttachment extends Attachment_1.Attachment {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "Product" }),
    __metadata("design:type", String)
], ProductAttachment.prototype, "forType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => __1.Product, attached => attached.attachments),
    __metadata("design:type", __1.Product)
], ProductAttachment.prototype, "attached", void 0);
ProductAttachment = __decorate([
    (0, typeorm_1.ChildEntity)()
], ProductAttachment);
exports.ProductAttachment = ProductAttachment;
let OrgzAttachment = class OrgzAttachment extends Attachment_1.Attachment {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "Orgz" }),
    __metadata("design:type", String)
], OrgzAttachment.prototype, "forType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => __1.Orgz, attached => attached.attachments),
    __metadata("design:type", __1.Orgz)
], OrgzAttachment.prototype, "attached", void 0);
OrgzAttachment = __decorate([
    (0, typeorm_1.ChildEntity)()
], OrgzAttachment);
exports.OrgzAttachment = OrgzAttachment;
