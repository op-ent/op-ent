import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { OrganizationType } from 'App/Models/Organization'

export default class extends BaseSchema {
  protected tableName = 'organizations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .string('org_type')
        .notNullable()
        .checkIn(['school', 'academy', 'ent', 'other'] as OrganizationType[])
      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.string('national_id').notNullable().unique()
      table.string('org_infos_address').notNullable()
      table.string('org_infos_postal_code').notNullable()
      table.string('org_infos_city').notNullable()
      table.string('org_infos_phone')
      table.string('org_infos_email')
      table.string('org_infos_website')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
