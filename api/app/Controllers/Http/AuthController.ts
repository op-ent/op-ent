import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const existingUser = await User.findBy('email', email)
    if (existingUser) {
      return response.forbidden({ error: 'User already exists with this email' })
    }

    const user = await User.create({ email, password })
    const { token } = await auth.use('api').generate(user)
    return { user, token }
  }

  public async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('api').attempt(email, password)

    return auth.isLoggedIn
  }
}
