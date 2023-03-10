import { useLocation, useNavigate } from '@remix-run/react'
import { useEffect } from 'react'

export default function useRedirect({
  entryURL,
  exitURL,
}: {
  entryURL: string
  exitURL: string
}) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === entryURL) {
      navigate(exitURL)
    }
  }, [pathname, navigate, entryURL, exitURL])
}
