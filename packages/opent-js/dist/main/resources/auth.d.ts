import BaseResource from "./base";
export default class AuthResource extends BaseResource {
    login(payload: {
        email: string;
        password: string;
    }): Promise<{
        data?: boolean | undefined;
        response?: import("..").ClientRequestResponse | undefined;
        error?: import("..").ClientRequestError | undefined;
    }>;
    register(payload: {
        email: string;
        password: string;
    }): Promise<{
        data?: {
            user: Object;
            token: string;
        } | undefined;
        response?: import("..").ClientRequestResponse | undefined;
        error?: import("..").ClientRequestError | undefined;
    }>;
}
//# sourceMappingURL=auth.d.ts.map