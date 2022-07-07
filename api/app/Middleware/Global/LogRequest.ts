import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle(
    { request, response, logger }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const time = new Date()
    response.response.on('finish', () => {
      const formatOutput = ({
        time,
        protocol,
        method,
        url,
        duration,
        statusCode,
      }: {
        time: string
        protocol: string
        method: string
        url: string
        duration: number
        statusCode: number
      }) => `[${time}] ${protocol}: ${method} ${url} (${duration} ms) ${statusCode}`

      const formattedTime = time.toISOString().replace('T', ' ').replace('Z', '')
      const protocol = request.protocol()
      const method = request.method()
      const url = request.url()
      const duration = new Date().getTime() - time.getTime()
      const statusCode = response.response.statusCode

      logger.info(
        formatOutput({ time: formattedTime, protocol, method, url, duration, statusCode })
      )
    })

    await next()
  }
}
