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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPaginated = exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.saveUser = void 0;
const user_model_1 = require("../models/user.model");
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const format_util_1 = require("../utils/format.util");
const saveUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = new user_model_1.UserModel();
    userModel.firstName = user.firstName;
    userModel.lastName = user.lastName;
    userModel.email = user.email;
    userModel.creationDate = format_util_1.Format.setDate();
    return yield user_repository_1.default.save(userModel);
});
exports.saveUser = saveUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userModelList = yield user_repository_1.default.find();
    return userModelList ? userModelList : [];
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userModelList = yield user_repository_1.default.findOneBy({ id });
    return userModelList ? userModelList : null;
});
exports.getUser = getUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = yield user_repository_1.default.findOneBy({ id });
    if (userModel) {
        const userUpdated = new user_model_1.UserModel();
        userUpdated.firstName = userModel.firstName;
        userUpdated.lastName = userModel.lastName;
        userUpdated.email = userModel.email;
        userUpdated.creationDate = userModel.creationDate;
        return (yield user_repository_1.default.update(userModel.id, userUpdated)) ? userUpdated : null;
    }
    else {
        return null;
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.default.findOneBy({ id });
    if (user) {
        return (yield user_repository_1.default.delete(user.id)) ? user : null;
    }
    else {
        return null;
    }
});
exports.deleteUser = deleteUser;
const usersPaginated = (size, page) => __awaiter(void 0, void 0, void 0, function* () {
    // let options = {};
    // if (sort === 'asc') {
    //   options = {
    //     order: { id: 'ASC' },
    //     take: size,
    //     skip: size * (page - 1)
    //   }
    // } else if (sort === 'desc') {
    //   options = {
    //     order: { id: 'DESC' },
    //     take: size,
    //     skip: size * (page - 1)
    //   }
    // }
    // const [users, totalUsers] = await userRepository.findAndCount(options);
    const [users, totalUsers] = yield user_repository_1.default.findAndCount({
        order: { id: 'ASC' },
        take: size,
        skip: size * (page - 1)
    });
    return { users, totalUsers, totalPages: Math.ceil(totalUsers / size), usersInPage: users.length };
});
exports.usersPaginated = usersPaginated;
