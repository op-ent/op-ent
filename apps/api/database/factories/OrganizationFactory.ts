import Organization from 'App/Models/Organization'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Organization, ({ faker }) => {
  return {
    name: faker.company.name(),
    slug: faker.lorem.slug(),
    nationalId: faker.random.alphaNumeric(8),
    orgInfosAddress: faker.address.streetAddress(),
    orgInfosPostalCode: faker.address.zipCode('#####'),
    orgInfosCity: faker.address.city(),
    orgInfosPhone: faker.phone.number('+33 3 ## ## ## ##'),
    orgInfosEmail: faker.internet.email(),
    orgInfosWebsite: faker.internet.url(),
  }
})
  .state('school', (org) => (org.orgType = 'school'))
  .state('academy', (org) => (org.orgType = 'academy'))
  .state('ent', (org) => (org.orgType = 'ent'))
  .state('other', (org) => (org.orgType = 'other'))
  .build()
