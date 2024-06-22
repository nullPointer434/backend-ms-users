"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const currency_route_1 = __importDefault(require("./routes/currency.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set('port', process.env.PORT);
// middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(process.env.ENVIRONMENT));
app.use(express_1.default.json());
// routes
app.use(user_route_1.default, currency_route_1.default);
// app.use(currencyRoutes);
exports.default = app;
