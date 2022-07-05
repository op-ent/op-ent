import { BaseClient } from "./helpers";
import { AuthClientParams } from "./types";

export default class AuthClient extends BaseClient<AuthClientParams> {
  constructor(params: AuthClientParams) {
    super({
      ...params,
      urlTransformer: (url) => `${url}auth`,
    });
  }

  public async login(params: { email: string; password: string }) {
    return await this.axios.post<Object>("login", params);
  }
}
