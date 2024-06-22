"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currency_service_1 = require("../services/currency.service");
const router = (0, express_1.Router)();
router.get('/currencies', currency_service_1.getCurrencies);
exports.default = router;
