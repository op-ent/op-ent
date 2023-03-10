import { client } from '~/services/client'

export default function useUser() {
  return client.auth.user!
}
