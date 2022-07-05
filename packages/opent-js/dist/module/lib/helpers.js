import axios from "axios";
export const stripTrailingSlash = (url) => url.replace(/\/$/, "");
export class BaseClient {
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
        const instance = axios.create({
            baseURL: this.baseUrl,
            headers: DEFAULT_HEADERS,
        });
        this.axios = instance;
    }
}
//# sourceMappingURL=helpers.js.map