import BaseResource from "./base";

export default class AuthResource extends BaseResource {
  public async login(payload: { email: string; password: string }) {
    const path = `/auth/login`;
    return await this.client.request<boolean>("POST", path, payload);
  }

  public async register(payload: { email: string; password: string }) {
    const path = `/auth/register`;
    return await this.client.request<{ user: Object; token: string }>(
      "POST",
      path,
      payload
    );
  }
}
