"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthClient_1 = __importDefault(require("./lib/AuthClient"));
const helpers_1 = require("./lib/helpers");
class OpentClient extends helpers_1.BaseClient {
    constructor(params) {
        super(Object.assign(Object.assign({}, params), { urlTransformer: (url) => `${(0, helpers_1.stripTrailingSlash)(url)}/api` }));
        this.DEFAULT_OPTIONS = {};
        const { options } = params;
        this.options = options || this.DEFAULT_OPTIONS;
        this.auth = new AuthClient_1.default(Object.assign(Object.assign({}, params), { baseUrl: this.baseUrl }));
    }
    getConsumers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axios.get("developers/app-consumers");
        });
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axios.get("test");
        });
    }
}
exports.default = OpentClient;
//# sourceMappingURL=OpentClient.js.map