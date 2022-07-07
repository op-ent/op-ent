import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { validator, schema, rules } from '@ioc:Adonis/Core/Validator'
import AppConsumer from 'App/Models/AppConsumer'

export default class AppConsumerAuth {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    const access_id = request.header('access-id')
    const access_token = request.header('access-token')

    await validator.validate({
      schema: schema.create({
        access_id: schema.string([rules.uuid({ version: 4 })]),
        access_token: schema.string.optional([rules.length(64)]),
      }),
      data: {
        access_id,
        access_token,
      },
      messages: {
        required: 'You must provide an access_id header to access the api. Read more on ...',
      },
    })

    const appConsumer = await AppConsumer.findByOrFail('access_id', access_id)
    if (appConsumer.type === 'token') {
      if (!access_token) {
        throw new Error(
          'You must provide an access_token header to access the api. Read more on ...'
        )
      } else if (appConsumer.token !== access_token) {
        throw new Error('Invalid access token')
      }
    } else {
      const origin = request.header('origin')
      if (!origin || !appConsumer.domains!.includes(origin)) {
        throw new Error('Access denied from this domain')
      }
    }

    await next()
  }
}
