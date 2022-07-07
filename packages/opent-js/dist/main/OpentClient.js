"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
const auth_1 = __importDefault(require("./resources/auth"));
class OpentClient {
    constructor(config) {
        this.client = new request_1.default(config);
        this.auth = new auth_1.default(this.client);
    }
}
exports.default = OpentClient;
//# sourceMappingURL=opentClient.js.map