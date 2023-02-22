import Client, { Config } from './client'

const createClient = (config: Config) => new Client(config)

export { createClient }
