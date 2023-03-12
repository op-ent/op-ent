import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(10, false, /\w/, '#aA1'),
  }
})
  .state('admin', (user) => (user.roles = ['user', 'admin']))
  .state('developer', (user) => (user.roles = ['user', 'developer']))
  .build()
