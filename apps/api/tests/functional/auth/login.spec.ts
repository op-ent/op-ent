import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'
import UserFactory from 'Database/factories/UserFactory'

test.group('Auth / Login', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test("can't login without email and password", async ({ client, route }) => {
    const response = await client.post(route('AuthController.login'))

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        { rule: 'required', field: 'email' },
        { rule: 'required', field: 'password' },
      ],
    })
  })

  test("can't login with invalid email", async ({ client, route }) => {
    const password = '12345678'
    let response = await client.post(route('AuthController.login')).form({
      email: 'xxx',
      password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })

    response = await client.post(route('AuthController.login')).form({
      email: 'xxx@xxx',
      password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })

    response = await client.post(route('AuthController.login')).form({
      email: 'xxx@xxx.x',
      password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ message: 'email validation failed', field: 'email' }],
    })
  })

  test("can't login with invalid password (regexes)", async ({ client, route, assert }) => {
    async function testRegex(password: string, property: string) {
      const email = 'test@test.com'
      const response = await client.post(route('AuthController.login')).form({
        email,
        password,
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

  test("can't login with invalid credentials", async ({ client, route }) => {
    const response = await client.post(route('AuthController.login')).form({
      email: 'test@test.com',
      password: '12345aA#',
    })

    response.assertStatus(401)
    response.assertBodyContains({ errors: [{ message: 'Invalid credentials' }] })
  })

  test('can login with valid credentials', async ({ client, route }) => {
    const password = '12345aA#'
    const user = await UserFactory.merge({ password }).create()
    const { email } = user

    const response = await client.post(route('AuthController.login')).form({ email, password })

    response.assertStatus(200)
    response.assertBodyContains({ user: { email } })
    response.assertTextIncludes('"token":')
  })
})
