import { AxiosInstance } from "axios";
import { BaseClientParams } from "./types";
export declare const stripTrailingSlash: (url: string) => string;
export declare class BaseClient<T extends BaseClientParams> {
    protected readonly baseUrl: string;
    protected readonly accessId: string;
    protected readonly accessToken?: string;
    protected readonly axios: AxiosInstance;
    constructor(params: T & {
        urlTransformer: (url: string) => string;
    });
}
//# sourceMappingURL=helpers.d.ts.map