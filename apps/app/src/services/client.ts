import { createClient } from 'client'
import getEnv from './get-env'

export const client = createClient({
  baseUrl: getEnv()?.OPENT_BASEURL || 'http://localhost:3333',
})
