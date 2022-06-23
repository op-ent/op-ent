import User from 'App/Models/User'

import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

type AccessType = 'token' | 'web'

export default class AppConsumer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @column()
  public access_id: string

  @column()
  public type: AccessType

  @column()
  public domains?: string[]

  @column()
  public token?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
