import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'
import UserFactory from 'Database/factories/UserFactory'

test.group('Auth / Register', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test("can't register without email, password", async ({ client, route }) => {
    const response = await client.post(route('AuthController.register'))

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        { rule: 'required', field: 'email' },
        { rule: 'required', field: 'password' },
      ],
    })
  })

  test("can't register with invalid email", async ({ client, route }) => {
    const password = '12345678'
    let response = await client.post(route('AuthController.register')).form({
      email: 'xxx',
      password,
      passwordConfirmation: password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })

    response = await client.post(route('AuthController.register')).form({
      email: 'xxx@xxx',
      password,
      passwordConfirmation: password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })

    response = await client.post(route('AuthController.register')).form({
      email: 'xxx@xxx.x',
      password,
      passwordConfirmation: password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })
  })

  test("can't register without passwordConfirmation", async ({ client, route }) => {
    const response = await client.post(route('AuthController.register')).form({
      email: 'test@test.com',
      password: '12345aA#',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ rule: 'confirmed', field: 'passwordConfirmation' }],
    })
  })

  test("can't register with invalid password (regexes)", async ({ client, route, assert }) => {
    async function testRegex(password: string, property: string) {
      const email = 'test@test.com'
      const response = await client.post(route('AuthController.register')).form({
        email,
        password,
        passwordConfirmation: password,
      })

      response.assertStatus(422)
      // TODO: use response.assertBodyNotContains once
      // https://github.com/japa/api-client/pull/2 is merged
      assert.notContainsSubset(response.body(), {
        errors: [{ message: `${property} validation failed`, field: 'password' }],
      })
    }

    const tests: [string, string][] = [
      ['12345678', 'minLength'],
      ['0', 'containsNumber'],
      ['a', 'containsLowercaseCharacter'],
      ['A', 'containsUppercaseCharacter'],
      ['#', 'containsSpecialCharacter'],
    ]

    for (const test of tests) {
      await testRegex(...test)
    }
  })

  test("can't register with existing email", async ({ client, route }) => {
    const password = '12345aA#'
    const { email } = await UserFactory.merge({ password }).create()
    const response = await client.post(route('AuthController.register')).form({
      email,
      password,
      passwordConfirmation: password,
    })

    response.assertStatus(403)
    response.assertBodyContains({ errors: [{ message: 'User already exists with this email' }] })
  })

  test('can register with valid input', async ({ client, route }) => {
    const email = 'a.new.email@gmail.com'
    const password = '12345aA#'

    const response = await client
      .post(route('AuthController.register'))
      .form({ email, password, passwordConfirmation: password })

    response.assertStatus(201)
    response.assertBodyContains({ user: { email } })
    response.assertTextIncludes('"token":')
  })
})
