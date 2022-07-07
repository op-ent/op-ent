import { ClientRequestError, ClientRequestResponse, Config, RequestMethod } from "./types";
export default class Client {
    private axiosClient;
    private config;
    constructor(config: Config);
    private createClient;
    request<T>(method: RequestMethod, path: string, payload?: Record<string, any> | null, customHeaders?: Record<string, any>): Promise<{
        data?: T;
        response?: ClientRequestResponse;
        error?: ClientRequestError;
    }>;
}
//# sourceMappingURL=request.d.ts.map