"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const currency_model_1 = require("../models/currency.model");
const currencyRepository = data_source_1.appDataSource.getRepository(currency_model_1.CurrencyModel);
exports.default = currencyRepository;
