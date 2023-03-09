import { useNavigate } from '@remix-run/react'

export default function useAuth() {
  const navigate = useNavigate()
  async function logout() {
    await fetch('/auth/logout')
    navigate(0)
  }
  return { logout }
}
