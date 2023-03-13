import BaseResource from '../base-resource'
import RequestClient from '../request-client'
import UsersResource from './admin/users'

export default class AdminResource extends BaseResource {
  public users: UsersResource

  constructor(client: RequestClient) {
    super(client)
    this.users = new UsersResource(this.client)
  }
}
