function isBrowser() {
  return typeof window !== 'undefined'
}

function getEnv() {
  return isBrowser() ? (window as any).ENV : process.env
}

export default getEnv
