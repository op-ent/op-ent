import RequestClient from './request-client'

export default class BaseResource {
  public client: RequestClient

  constructor(client: RequestClient) {
    this.client = client
  }
}
