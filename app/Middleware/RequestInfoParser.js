'use strict'

const Env = use('Env')

const useragent = require('useragent')
const geoip = require('geoip-lite')

class RequestInfoParser {
  async handle ({ request }, next) {
    const headers = request.headers()
    const agent = useragent.parse(headers['user-agent'])

    request.useragent = {
      browser: {
        family: agent.family,
        version: agent.major
      },
      device: {
        family: agent.device.family,
        version: agent.device.major
      },
      os: {
        family: agent.os.family,
        major: agent.os.major,
        minor: agent.os.minor
      }
    }

    request.acceptHeaders = {
      accept: headers['accept'] || '',
      language: headers['accept-language'] || ''
    }

    const ip =
      Env.get('NODE_ENV') === 'development' ? '127.0.0.1' : request.ip()
    const geo = geoip.lookup(request.ip())

    request.ip = ip
    request.geoip = geo || null

    await next()
  }
}

module.exports = RequestInfoParser
