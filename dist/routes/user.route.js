"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/users', user_controller_1.getUsers);
router.get('/paginated-users', user_controller_1.paginatedUsers);
router.post('/users', user_controller_1.createUser);
exports.default = router;
