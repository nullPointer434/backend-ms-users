"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = require("./models/user.model");
const currency_model_1 = require("./models/currency.model");
dotenv_1.default.config();
exports.appDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // ssl: { rejectedUnauthorized: true },
    entities: [user_model_1.UserModel, currency_model_1.CurrencyModel],
    logging: true,
    // synchronize: true
});
