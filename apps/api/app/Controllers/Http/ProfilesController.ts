import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { validator, schema } from '@ioc:Adonis/Core/Validator'

export default class ProfilesController {
  public async show({ params, auth, response }: HttpContextContract) {
    const { id } = await validator.validate({
      schema: schema.create({
        id: schema.number(),
      }),
      data: params,
    })

    const user = auth.user!

    if (user.id !== id) {
      return response.forbidden({ error: 'Unauthorized' })
    }

    return { user }
  }
}
