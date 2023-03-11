import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { UserRole } from 'App/Models/User'

export default class UserRoleMiddleware {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    roles: UserRole[]
  ) {
    const user = auth.user!
    if (!roles.every((role) => user.roles.includes(role))) {
      return response
        .status(401)
        .json({ error: `User must have the following roles: ${roles.join(', ')}` })
    }
    await next()
  }
}
