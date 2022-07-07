import Client from "./request";
import AuthResource from "./resources/auth";
import { Config } from "./types";

export default class OpentClient {
  private client: Client;

  public auth: AuthResource;

  constructor(config: Config) {
    this.client = new Client(config);

    this.auth = new AuthResource(this.client);
  }
}
