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
exports.Attachment = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Attachment = class Attachment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Attachment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Attachment.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Attachment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Attachment.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Attachment.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, uploader => uploader.media),
    __metadata("design:type", User_1.User)
], Attachment.prototype, "uploader", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(entity => entity.attachments),
    __metadata("design:type", Object)
], Attachment.prototype, "entity", void 0);
Attachment = __decorate([
    (0, typeorm_1.TableInheritance)({ column: {
            type: "varchar",
            name: "type"
        }
    }),
    (0, typeorm_1.Entity)()
], Attachment);
exports.Attachment = Attachment;
