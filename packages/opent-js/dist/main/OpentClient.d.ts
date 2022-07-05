import { OpentClientOptions, OpentClientParams } from "./lib/types";
import AuthClient from "./lib/AuthClient";
import { BaseClient } from "./lib/helpers";
export default class OpentClient extends BaseClient<OpentClientParams> {
    auth: AuthClient;
    protected readonly options: OpentClientOptions;
    protected DEFAULT_OPTIONS: OpentClientOptions;
    constructor(params: OpentClientParams);
    getConsumers(): Promise<import("axios").AxiosResponse<{}[], any>>;
    test(): Promise<import("axios").AxiosResponse<{
        hello: string;
    }, any>>;
}
//# sourceMappingURL=OpentClient.d.ts.map