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
exports.Author = exports.User = void 0;
const typeorm_1 = require("typeorm");
const Email_1 = require("./Email");
const _1 = require("./");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 2980865431210, select: true }),
    __metadata("design:type", Number)
], User.prototype, "IDcardNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, select: true }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)(() => Email_1.Email),
    __metadata("design:type", Email_1.Email)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(() => _1.Address),
    __metadata("design:type", _1.Address)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)( /*{type:"timestamp"}*/),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)( /*{type:"timestamp"}*/),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.supTicket, ticket => ticket.user),
    __metadata("design:type", Array)
], User.prototype, "tickets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Verification, verification => verification.user),
    __metadata("design:type", Array)
], User.prototype, "verifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Attachment, media => media.uploader),
    __metadata("design:type", Array)
], User.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Payment, payment => payment.user),
    __metadata("design:type", Array)
], User.prototype, "payments", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.TableInheritance)({ column: { type: "varchar", name: "type" } })
], User);
exports.User = User;
let Author = class Author extends User {
};
__decorate([
    (0, typeorm_1.Column)({ default: "author" }),
    __metadata("design:type", String)
], Author.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Article, article => article.author),
    __metadata("design:type", Array)
], Author.prototype, "articles", void 0);
Author = __decorate([
    (0, typeorm_1.ChildEntity)()
], Author);
exports.Author = Author;
