import { Link } from '@remix-run/react'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  )
}
