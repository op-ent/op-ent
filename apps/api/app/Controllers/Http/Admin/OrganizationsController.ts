import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import Organization from 'App/Models/Organization'

export default class OrganizationsController {
  private orgSchema = schema.create({
    name: schema.string(),
    // Only lowercase letters, numbers and dashes, no consecutive dashes, only letter at the beginning
    slug: schema.string([rules.regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/)]),
    nationalId: schema.string(),
    orgType: schema.enum(['school', 'academy', 'ent', 'other'] as const),
    orgInfosAddress: schema.string(),
    orgInfosPostalCode: schema.string([rules.regex(/^[0-9]{5}$/)]),
    orgInfosCity: schema.string(),
    orgInfosPhone: schema.string.optional([rules.mobile()]),
    orgInfosEmail: schema.string.optional([rules.email()]),
    orgInfosWebsite: schema.string.optional([
      rules.url(),
      rules.normalizeUrl({
        stripWWW: true,
        defaultProtocol: 'https:',
      }),
    ]),
  })

  public async index({}: HttpContextContract) {
    return await Organization.all()
  }
  public async show({ params }: HttpContextContract) {
    return await this.getOrganization(params)
  }

  public async store({ request }: HttpContextContract) {
    const payload = await this.validateOrganizationParams(request)
    return await Organization.create(payload)
  }
  public async update({ request, params }: HttpContextContract) {
    const payload = await this.validateOrganizationParams(request)
    const organization = await this.getOrganization(params)
    return await organization.merge(payload).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const organization = await this.getOrganization(params)
    await organization.delete()
  }

  private getOrganization(params: HttpContextContract['params']) {
    const id = Number(params.id)
    return Organization.findOrFail(id)
  }

  private validateOrganizationParams(request: HttpContextContract['request']) {
    return request.validate({ schema: this.orgSchema })
  }
}
