import { OpentClientOptions, OpentClientParams } from "./lib/types";
import AuthClient from "./lib/AuthClient";
import { BaseClient, stripTrailingSlash } from "./lib/helpers";

export default class OpentClient extends BaseClient<OpentClientParams> {
  auth: AuthClient;

  protected readonly options: OpentClientOptions;

  protected DEFAULT_OPTIONS: OpentClientOptions = {};

  constructor(params: OpentClientParams) {
    super({
      ...params,
      urlTransformer: (url) => `${stripTrailingSlash(url)}/api`,
    });
    const { options } = params;
    this.options = options || this.DEFAULT_OPTIONS;

    this.auth = new AuthClient({ ...params, baseUrl: this.baseUrl });
  }

  public async getConsumers() {
    return this.axios.get<{}[]>("developers/app-consumers");
  }

  public async test() {
    return this.axios.get<{ hello: string }>("test");
  }
}
