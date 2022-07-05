export declare type OpentClientOptions = {};
export declare type BaseClientParams = {
    baseUrl: string;
    accessId: string;
    accessToken?: string;
};
export declare type OpentClientParams = BaseClientParams & {
    options?: OpentClientOptions;
};
export declare type AuthClientParams = BaseClientParams & {};
export declare type Headers = {
    [key: string]: string;
};
//# sourceMappingURL=types.d.ts.map