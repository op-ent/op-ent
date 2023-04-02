import Account, { AccountRole } from 'App/Models/Account'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'
import OrganizationFactory from './OrganizationFactory'

export default Factory.define(Account, ({ faker }) => {
  return {
    role: faker.helpers.arrayElement<AccountRole>(['student', 'teacher', 'parent', 'ent_admin']),
  }
})
  .relation('user', () => UserFactory)
  .relation('organization', () => OrganizationFactory)
  .build()
