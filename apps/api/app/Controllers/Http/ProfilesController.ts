import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfilesController {
  public async show({ params, auth, response }: HttpContextContract) {
    const id = Number(params.id)

    const user = auth.user!

    if (user.id !== id) {
      return response.forbidden({ error: 'Unauthorized' })
    }

    return { user }
  }
}
