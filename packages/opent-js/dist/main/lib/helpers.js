"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = exports.stripTrailingSlash = void 0;
const axios_1 = __importDefault(require("axios"));
const stripTrailingSlash = (url) => url.replace(/\/$/, "");
exports.stripTrailingSlash = stripTrailingSlash;
class BaseClient {
    constructor(params) {
        const { baseUrl, accessId, accessToken, urlTransformer } = params;
        this.baseUrl = urlTransformer(baseUrl);
        this.accessId = accessId;
        this.accessToken = accessToken;
        const DEFAULT_HEADERS = {
            "access-id": this.accessId,
        };
        if (this.accessToken) {
            DEFAULT_HEADERS["access-token"] = this.accessToken;
        }
        const instance = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: DEFAULT_HEADERS,
        });
        this.axios = instance;
    }
}
exports.BaseClient = BaseClient;
//# sourceMappingURL=helpers.js.map