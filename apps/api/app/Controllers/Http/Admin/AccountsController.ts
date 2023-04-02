import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Account from 'App/Models/Account'

export default class AccountsController {
  private accountSchema = schema.create({
    account_id: schema.number(),
    organization_id: schema.number(),
    role: schema.enum(['student', 'teacher', 'parent', 'ent_admin'] as const),
  })

  public async index({}: HttpContextContract) {
    return await Account.all()
  }

  public async store({ request }: HttpContextContract) {
    const payload = await this.validateAccountParams(request)
    return await Account.create(payload)
  }

  public async show({ params }: HttpContextContract) {
    return await this.getAccount(params)
  }

  public async update({ request, params }: HttpContextContract) {
    const payload = await this.validateAccountParams(request)
    const account = await this.getAccount(params)
    return await account.merge(payload).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const account = await this.getAccount(params)
    await account.delete()
  }

  public async listAccountsByUser({ params }: HttpContextContract) {
    return await Account.query().where('user_id', params.user_id).preload('organization')
  }

  public async listAccountsByOrg({ params }: HttpContextContract) {
    return await Account.query().where('organization_id', params.organization_id).preload('user')
  }

  private getAccount(params: HttpContextContract['params']) {
    const id = Number(params.id)
    return Account.findOrFail(id)
  }

  private validateAccountParams(request: HttpContextContract['request']) {
    return request.validate({ schema: this.accountSchema })
  }
}
