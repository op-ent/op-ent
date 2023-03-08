import BaseResource from '../base-resource'
import { AuthToken, User } from '../types'

export default class AuthResource extends BaseResource {
  public token?: string
  public user?: User

  public async login(payload: { email: string; password: string }) {
    const path = `/auth/login`
    const res = await this.client.fetch<{ token: AuthToken; user: User }>(
      'POST',
      path,
      payload
    )
    if (res.ok) {
      this.token = res.data.token
      this.user = res.data.user
    }
    return res
  }

  public async register(payload: {
    email: string
    password: string
    passwordConfirmation: string
  }) {
    const path = `/auth/register`
    const res = await this.client.fetch<{ token: AuthToken; user: User }>(
      'POST',
      path,
      payload
    )
    if (res.ok) {
      this.token = res.data.token
      this.user = res.data.user
    }
    return res
  }
}
