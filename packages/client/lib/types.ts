export type User = {
  id: number
  email: string
  remember_me_token: string | null
  created_at: string
  updated_at: string
}

export type AuthToken = string
