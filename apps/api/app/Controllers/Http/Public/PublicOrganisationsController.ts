import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Organization from 'App/Models/Organization'
import OrganizationsController from '../Admin/OrganizationsController'

export default class PublicOrganizationsController {
  private mainInstance!: OrganizationsController
  constructor() {
    this.mainInstance = new OrganizationsController()
  }
  public index(props: HttpContextContract) {
    return this.mainInstance.index(props)
  }
  public show(props: HttpContextContract) {
    return this.mainInstance.show(props)
  }
}
