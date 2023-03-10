import RequestClient from './request-client'
import AuthResource from './resources/auth'
import { User } from './types'

export interface Config {
  baseUrl?: string
}

export default class Client {
  private client: RequestClient

  public auth: AuthResource

  constructor(config: Config) {
    this.client = new RequestClient(config)

    this.auth = new AuthResource(this.client)
    this.client.auth = this.auth
  }

  public async profile() {
    const path = `/profile/${this.auth.user?.id}`
    return await this.client.authenticatedFetch<{ user: User }>('GET', path)
  }
}
