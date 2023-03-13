import BaseResource from '../../base-resource'
import { User } from '../../types'
import { omit } from '../../utils'

export default class UsersResource extends BaseResource {
  public async all() {
    const path = `/admin/users`
    return await this.client.authenticatedFetch<{ users: User[] }>('GET', path)
  }

  public async get(payload: { id: number }) {
    const path = `/admin/users/${payload.id}`
    return await this.client.authenticatedFetch<{ users: User[] }>('GET', path)
  }

  public async create(payload: { email: string; password: string }) {
    const path = `/admin/users`
    return await this.client.authenticatedFetch<{ user: User }>(
      'POST',
      path,
      payload
    )
  }

  public async update(payload: {
    id: number
    email: string
    password: string
  }) {
    const path = `/admin/users/${payload.id}`
    return await this.client.authenticatedFetch<{ user: User }>(
      'PUT',
      path,
      omit(payload, ['id'])
    )
  }

  public async destroy(payload: { id: number }) {
    const path = `/admin/users/${payload.id}`
    return await this.client.authenticatedFetch<undefined>('DELETE', path)
  }
}
