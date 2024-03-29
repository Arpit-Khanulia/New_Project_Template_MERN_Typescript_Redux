"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const register_1 = require("../controller/register");
const login_1 = require("../controller/login");
const router = express_1.default.Router();
exports.router = router;
router
    .post('/login', login_1.login)
    .post('/register', register_1.register);
