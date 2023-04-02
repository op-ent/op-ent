import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'
import Organization, { OrganizationType } from 'App/Models/Organization'
import OrganizationFactory from 'Database/factories/OrganizationFactory'
import UserFactory from 'Database/factories/UserFactory'

const CustomUserFactory = UserFactory.factory
  .before('create', (_, user) => {
    console.log(`User created (${user.roles.at(-1)}) : ${user.email} : ${user.password}`)
  })
  .build()

const CustomOrganizationFactory = OrganizationFactory.factory
  .before('create', (_, org) => {
    console.log(`Org created (${org.orgType}) : ${org.name} : ${org.slug}`)
  })
  .build()

export default class extends BaseSeeder {
  private getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

  private async createOrgs() {
    const configs = {
      ent: [
        {
          name: 'Op-Ent instance',
          slug: 'opent',
          orgType: 'ent' as OrganizationType,
        },
      ],
      academy: [
        {
          name: 'Académie de Nancy-Metz',
          slug: 'academie-nancy-metz',
          orgType: 'academy' as OrganizationType,
        },
        {
          name: 'Académie de Strasbourg',
          slug: 'academie-strasbourg',
          orgType: 'academy' as OrganizationType,
        },
      ],
      other: [
        {
          name: 'Grand-Est',
          slug: 'grand-est',
          orgType: 'other' as OrganizationType,
        },
      ],
      school: [
        {
          name: 'Lycée Saint Antoine',
          slug: 'lycee-saint-antoine',
          orgType: 'school' as OrganizationType,
        },
        {
          name: 'Lycée Kléber',
          slug: 'lycee-kleber',
          orgType: 'school' as OrganizationType,
        },
        {
          name: 'Collège La Craffe',
          slug: 'college-la-craffe',
          orgType: 'school' as OrganizationType,
        },
        {
          name: "Collège Jeanne d'Arc",
          slug: 'college-jeanne-d-arc',
          orgType: 'school' as OrganizationType,
        },
      ],
    }
    const orgs = await Promise.all(
      Object.entries(configs).map(async ([key, value]) => {
        const orgs = await CustomOrganizationFactory.merge(value).createMany(value.length)
        return [key, orgs]
      })
    )
    return Object.fromEntries(orgs) as Record<keyof typeof configs, Organization[]>
  }

  private async createUser() {
    const randomState = () =>
      ['user', 'admin', 'developer'].at(Math.floor(Math.random() * 3)) as
        | 'admin'
        | 'user'
        | 'developer'
    return CustomUserFactory.apply(randomState()).create()
  }

  public async run() {
    const orgs = await this.createOrgs()

    const users = await Promise.all([...Array(10)].map(() => this.createUser()))
    await Promise.all(
      users.map(async (user) => {
        const userOrgs = [
          ...this.getMultipleRandom(orgs.ent, 1),
          ...this.getMultipleRandom(orgs.academy, 1),
          ...this.getMultipleRandom(orgs.school, 1),
          ...this.getMultipleRandom(orgs.other, 1),
        ] as Organization[]
        return Promise.all(
          userOrgs.map(async (org) => {
            const role = this.getMultipleRandom(['student', 'teacher', 'parent', 'ent_admin'], 1)[0]
            const account = await Account.create({
              userId: user.id,
              organizationId: org.id,
              role,
            })
            console.log(
              `Account created (${account.id}:${account.role}) : ${user.email} > ${org.name}`
            )
          })
        )
      })
    )
  }
}
