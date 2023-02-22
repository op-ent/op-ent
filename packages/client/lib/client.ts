import RequestClient from './request-client'
import AuthResource from './resources/auth'

export interface Config {
  baseUrl?: string
}

export default class Client {
  private client: RequestClient

  public auth: AuthResource

  constructor(config: Config) {
    this.client = new RequestClient(config)

    this.auth = new AuthResource(this.client)
  }
}
