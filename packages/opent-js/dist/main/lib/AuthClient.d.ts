import { BaseClient } from "./helpers";
import { AuthClientParams } from "./types";
export default class AuthClient extends BaseClient<AuthClientParams> {
    constructor(params: AuthClientParams);
    login(params: {
        email: string;
        password: string;
    }): Promise<import("axios").AxiosResponse<Object, any>>;
}
//# sourceMappingURL=AuthClient.d.ts.map