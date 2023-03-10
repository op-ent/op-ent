import { redirect } from '@remix-run/node'

export function defaultRedirect({
  request,
  entryURL,
  exitURL,
}: {
  request: Request
  entryURL: string
  exitURL: string
}) {
  return function <T extends (...args: any) => any>(fn: T): ReturnType<T> {
    const { url } = request
    const parsedURL = new URL(url)
    if (parsedURL.pathname === entryURL) {
      return redirect(exitURL, 301) as any
    }
    return fn()
  }
}
