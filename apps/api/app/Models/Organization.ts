import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export type OrganizationType = 'school' | 'academy' | 'ent' | 'other'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orgType: OrganizationType

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public nationalId: string

  @column()
  public orgInfosAddress: string

  @column()
  public orgInfosPostalCode: string

  @column()
  public orgInfosCity: string

  @column()
  public orgInfosPhone: string

  @column()
  public orgInfosEmail: string

  @column()
  public orgInfosWebsite: string
}

/*
Organization tree exemple :
- Op-Ent instance (type = opent) : for maintenances and admins
- Académie de Nancy-Metz (type = academy)
  | - Lycée Saint Antoine (type = school)
  | - Collège La Craffe 
  | - ...
- Académie de Strasbourg (type = academy)
  | - Lycée Kléber (type = school)
  | - Collège Jeanne d'Arc
  | - ...
- Grand-Est (type = other)
*/
