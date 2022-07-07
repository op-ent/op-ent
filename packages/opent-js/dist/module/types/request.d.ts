import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
export declare type RequestMethod = "DELETE" | "POST" | "GET" | "PUT";
export interface Config {
    baseUrl: string;
    accessId: string;
    accessToken?: string;
    options?: {};
}
export interface ClientRequestResponse {
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    config: AxiosRequestConfig<any>;
    request?: any;
}
export interface ClientRequestError {
    status: number;
    statusText: string;
    data: any;
}
//# sourceMappingURL=request.d.ts.map