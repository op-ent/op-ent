import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import type { DateTime } from 'luxon'
import Organization from './Organization'
import User from './User'

export type AccountRole = 'student' | 'teacher' | 'parent' | 'ent_admin'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof User>

  @column()
  public userId: number

  @belongsTo(() => Organization, {
    foreignKey: 'organizationId',
  })
  public organization: BelongsTo<typeof Organization>

  @column()
  public organizationId: number

  @column()
  public role: AccountRole

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
