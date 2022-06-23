import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({ email, password })
    const token = await auth.use('api').generate(user)

    return { user, token }
  }

  public async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('api').attempt(email, password)

    return auth.isLoggedIn
  }
}
