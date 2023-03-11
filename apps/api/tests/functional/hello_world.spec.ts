import { test } from '@japa/runner'

test('show docs link on root page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertTextIncludes('docs.op-ent.fr')
})
