"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const league_connect_1 = require("league-connect");
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    try {
        const credentials = await league_connect_1.authenticate();
        res.json({
            port: credentials.port,
            pid: credentials.pid,
            username: "riot",
            password: credentials.password,
            certificate: credentials.certificate
        });
    }
    catch (err) {
        res.status(500);
        res.json({
            error: "League of Legends Client is not active"
        });
    }
});
exports.default = router;
