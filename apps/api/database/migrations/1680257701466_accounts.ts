import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { AccountRole } from 'App/Models/Account'

export default class extends BaseSchema {
  protected tableName = 'accounts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .string('role')
        .notNullable()
        .checkIn(['student', 'teacher', 'parent', 'ent_admin'] as AccountRole[])

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()

      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table
        .integer('organization_id')
        .unsigned()
        .references('id')
        .inTable('organizations')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
