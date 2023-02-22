import BaseResource from '../base-resource'
import { AuthToken, User } from '../types'

export default class AuthResource extends BaseResource {
  public token?: string
  public user?: User

  public async login(email: string, password: string) {
    const path = `/auth/login`
    const res = await this.client.fetch<{ token: AuthToken; user: User }>(
      'POST',
      path,
      {
        email,
        password
      }
    )
    if (!res.error) {
      this.token = res.data.token
      this.user = res.data.user
    }
    return res
  }
}
