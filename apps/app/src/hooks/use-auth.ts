import { useNavigate } from '@remix-run/react'
import { client } from '~/services/client'

export default function useAuth() {
  const navigate = useNavigate()

  async function logout() {
    await fetch('/auth/logout')
    navigate(0)
  }

  function getUser() {
    return client.auth.user!
  }

  return { logout, getUser }
}
