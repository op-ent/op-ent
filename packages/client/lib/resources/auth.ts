import BaseResource from '../base-resource'
import { AuthToken } from '../types'

export default class AuthResource extends BaseResource {
  public token?: string

  public async login(email: string, password: string) {
    const path = `/auth/login`
    const res = await this.client.fetch<{ token: AuthToken }>('POST', path, {
      email,
      password
    })
    if (!res.error) {
      this.token = res.data.token
    }
    return res
  }
}
