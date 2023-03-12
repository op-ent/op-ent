import BaseResource from '../base-resource'
import { User } from '../types'

export default class SharedResource extends BaseResource {
  public async profile() {
    const path = `/shared/profile/${this.client.auth!.user?.id}`
    return await this.client.authenticatedFetch<{ user: User }>('GET', path)
  }
}
