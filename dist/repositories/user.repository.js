"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_model_1 = require("../models/user.model");
const userRepository = data_source_1.appDataSource.getRepository(user_model_1.UserModel);
exports.default = userRepository;
