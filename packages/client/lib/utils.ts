export const stripTrailingSlash = (url: string): string =>
  url.replace(/\/$/, '')

export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const ret: any = {}
  keys.forEach((key) => {
    ret[key] = obj[key]
  })
  return ret
}

export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const _ = { ...obj }
  keys.forEach((key) => delete _[key])
  return _
}
