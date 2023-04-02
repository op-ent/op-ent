import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
  private userSchema = schema.create({
    email: schema.string([rules.email()]),
    password: schema.string([rules.minLength(8)]),
    firstName: schema.string({
      trim: true,
    }),
    lastName: schema.string({
      trim: true,
    }),
    username: schema.string(
      {
        trim: true,
      },
      [rules.regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/)]
    ),
  })

  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ request }: HttpContextContract) {
    const payload = await this.validateUserParams(request)
    return await User.create(payload)
  }

  public async show({ params }: HttpContextContract) {
    return await this.getUser(params)
  }

  public async update({ request, params }: HttpContextContract) {
    const payload = await this.validateUserParams(request)
    const user = await this.getUser(params)
    return await user.merge(payload).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await this.getUser(params)
    await user.delete()
  }

  private getUser(params: HttpContextContract['params']) {
    const id = Number(params.id)
    return User.findOrFail(id)
  }

  private validateUserParams(request: HttpContextContract['request']) {
    return request.validate({ schema: this.userSchema })
  }
}
