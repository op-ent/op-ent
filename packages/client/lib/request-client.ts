import { Config } from './client'
import { $Fetch, FetchError, ofetch } from 'ofetch'
import { stripTrailingSlash } from './utils'
import AuthResource from './resources/auth'

// Based on Medusa client
// Based on https://www.builder.io/blog/safe-data-fetching

export type RequestMethod = 'DELETE' | 'POST' | 'GET' | 'PUT'

export type ErrorData = {
  errors: { message: string }[]
}

export type FetchReturn<T> =
  | {
      data: T
      error: undefined
      ok: true
    }
  | { data: undefined; error: FetchError<ErrorData>; ok: false }

export type Headers = Record<string, string>

export default class RequestClient {
  private config: Required<Config>
  private DEFAULT_CONFIG: Required<Config> = {
    baseUrl: 'https://api.op-ent.fr',
  }
  private DEFAULT_HEADERS: Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  private apiFetch: $Fetch

  public auth: AuthResource | undefined

  constructor(config: Config) {
    this.config = { ...this.DEFAULT_CONFIG, ...config }
    this.config.baseUrl = stripTrailingSlash(this.config.baseUrl)
    this.apiFetch = this.createApiFetch(this.config)
  }

  private createApiFetch(config: Required<Config>) {
    return ofetch.create({ baseURL: config.baseUrl })
  }

  public async fetch<T = unknown>(
    method: RequestMethod,
    path: string,
    body: Record<string, unknown> = {},
    headers: Headers = {}
  ): Promise<FetchReturn<T>> {
    let data: T | undefined = undefined
    let error: FetchError<ErrorData> | undefined = undefined
    try {
      data = await this.apiFetch<T>(path, {
        method,
        body,
        headers: { ...this.DEFAULT_HEADERS, ...headers },
      })
    } catch (err) {
      error = err as any
    }
    const ok = error === undefined
    return { data, ok, error } as any
  }

  public async authenticatedFetch<T = unknown>(
    ...args: Parameters<typeof this.fetch>
  ) {
    if (!this.auth!.token) throw new Error('Not authenticated')
    const [method, path, body, headers] = args
    return this.fetch(method, path, body, {
      Authorization: `Bearer ${this.auth!.token!}`,
      ...headers,
    })
  }
}
