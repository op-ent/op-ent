import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.raw("CREATE TYPE user_role AS ENUM('admin', 'user', 'developer')")
    this.schema.alterTable(this.tableName, (table) => {
      table.specificType('role', 'user_role[]').notNullable().defaultTo('{user}')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('role')
    })
    this.schema.raw('DROP TYPE user_role')
  }
}
