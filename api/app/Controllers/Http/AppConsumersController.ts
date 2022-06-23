import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AppConsumer from 'App/Models/AppConsumer'
import { validator, schema, rules } from '@ioc:Adonis/Core/Validator'
import { string } from '@ioc:Adonis/Core/Helpers'

export default class AppConsumersController {
  private async _validateAppConsumer({ auth, params }: HttpContextContract) {
    await validator.validate({
      schema: schema.create({ id: schema.number() }),
      data: {
        id: params.id,
      },
    })

    const appConsumer = await AppConsumer.findOrFail(params.id)
    if (appConsumer.user_id !== auth.user!.id) {
      throw new Error('You are not allowed to access this app consumer')
    }
    return appConsumer
  }

  public async index({ auth }: HttpContextContract) {
    return await AppConsumer.query().where('user_id', auth.user!.id)
  }

  public async store({ request, auth }: HttpContextContract) {
    const payload = await request.validate({
      schema: schema.create({
        type: schema.enum(['token', 'web'] as const),
        domains: schema.array.optional([rules.minLength(1)]).members(schema.string([rules.url()])),
      }),
    })

    const useToken = payload.type === 'token'
    const user = auth.user!

    return await user.related('appConsumers').create({
      type: payload.type,
      domains: useToken ? undefined : payload.domains,
      token: useToken ? string.generateRandom(64) : undefined,
    })
  }

  public async show(ctx: HttpContextContract) {
    return await this._validateAppConsumer(ctx)
  }

  public async update(ctx: HttpContextContract) {
    const { request } = ctx
    const error =
      "You can only update an app consumer setup for web by providing domains. Token can't be updated. Revoke it and generate a new one instead."

    const payload = await request.validate({
      schema: schema.create({
        domains: schema.array([rules.minLength(1)]).members(schema.string([rules.url()])),
      }),
      messages: {
        required: error,
      },
    })

    const appConsumer = await this._validateAppConsumer(ctx)
    if (appConsumer.type !== 'web') {
      throw new Error(error)
    }

    await appConsumer.merge({ domains: payload.domains }).save()
    return appConsumer
  }

  public async destroy(ctx: HttpContextContract) {
    const appConsumer = await this._validateAppConsumer(ctx)
    const _ = appConsumer
    await appConsumer.delete()
    return _
  }
}
