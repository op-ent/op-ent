import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const user = {
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@dev.op-ent.fr`,
    password: faker.internet.password(10, false, /\w/, '#aA1'),
    firstName,
    lastName,
    username: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
  }
  return user
})
  .state('user', (user) => (user.roles = ['user']))
  .state('admin', (user) => (user.roles = ['user', 'admin']))
  .state('developer', (user) => (user.roles = ['user', 'developer']))
  .build()
