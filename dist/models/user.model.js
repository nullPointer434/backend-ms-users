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
exports.UserModel = void 0;
const typeorm_1 = require("typeorm");
let UserModel = class UserModel extends typeorm_1.BaseEntity {
};
exports.UserModel = UserModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'USER_ID' }),
    __metadata("design:type", Number)
], UserModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'USER_FNAME' }),
    __metadata("design:type", String)
], UserModel.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'USER_LNAME' }),
    __metadata("design:type", String)
], UserModel.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'USER_EMAIL' }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'USER_CDATE' }),
    __metadata("design:type", Date)
], UserModel.prototype, "creationDate", void 0);
exports.UserModel = UserModel = __decorate([
    (0, typeorm_1.Entity)('USERS')
], UserModel);
