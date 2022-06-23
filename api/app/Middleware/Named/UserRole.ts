import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { UserRole as Role } from 'App/Models/User'

export default class UserRole {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    roles: Role[]
  ) {
    const user = auth.user!
    if (!roles.every((role) => user.role.includes(role))) {
      return response
        .status(401)
        .json({ error: `User must have the following roles: ${roles.join(', ')}` })
    }
    await next()
  }
}
