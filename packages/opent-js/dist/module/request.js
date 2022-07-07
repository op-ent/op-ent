var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import axios from "axios";
import { stripTrailingSlash } from "./utils";
const DEFAULT_CONFIG = {
    baseUrl: "https://op-ent.fr/",
    accessId: "",
};
export default class Client {
    constructor(config) {
        this.config = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        this.config.baseUrl = `${stripTrailingSlash(this.config.baseUrl)}/api`;
        this.axiosClient = this.createClient(this.config);
    }
    createClient(config) {
        const client = axios.create({
            baseURL: config.baseUrl,
        });
        return client;
    }
    request(method, path, payload = null, customHeaders = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (method === "POST" && !payload) {
                payload = {};
            }
            const DEFAULT_HEADERS = {
                Accept: "application/json",
                "Content-Type": "application/json",
                "access-id": this.config.accessId,
            };
            if (this.config.accessToken) {
                DEFAULT_HEADERS["access-token"] = this.config.accessToken;
            }
            const headers = Object.assign(Object.assign({}, DEFAULT_HEADERS), customHeaders);
            const reqOpts = {
                method,
                url: path,
                data: payload,
                json: true,
                headers,
            };
            let data = undefined;
            let response = undefined;
            let error = undefined;
            try {
                (_a = yield this.axiosClient.request(reqOpts), { data } = _a, response = __rest(_a, ["data"]));
            }
            catch (e) {
                const _e = e;
                error = {
                    status: _e.response.status,
                    statusText: _e.response.statusText,
                    data: _e.response.data,
                };
            }
            return { data, response, error };
        });
    }
}
//# sourceMappingURL=request.js.map