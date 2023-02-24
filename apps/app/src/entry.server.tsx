// import type { EntryContext } from '@remix-run/node'
// import { RemixServer } from '@remix-run/react'
// import { renderToString } from 'react-dom/server'

// export default function handleRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   remixContext: EntryContext
// ) {
//   const markup = renderToString(
//     <RemixServer context={remixContext} url={request.url} />
//   )

//   responseHeaders.set('Content-Type', 'text/html')

//   return new Response('<!DOCTYPE html>' + markup, {
//     headers: responseHeaders,
//     status: responseStatusCode,
//   })
// }

import { PassThrough } from 'stream'
import { renderToPipeableStream } from 'react-dom/server'
import { RemixServer } from '@remix-run/react'
import { Response } from '@remix-run/node'
import type { EntryContext, Headers } from '@remix-run/node'
import isbot from 'isbot'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get('user-agent'))
    ? 'onAllReady'
    : 'onShellReady'

  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        [callbackName]() {
          let body = new PassThrough()

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders,
            })
          )
          pipe(body)
        },
        onShellError(err: unknown) {
          reject(err)
        },
        onError(error: unknown) {
          didError = true
          console.error(error)
        },
      }
    )
    setTimeout(abort, ABORT_DELAY)
  })
}
