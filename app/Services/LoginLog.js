'use strict'

const Env = use('Env')

const moment = require('moment')
const MongoClient = require('mongodb').MongoClient

module.exports = {
  async log (request, user) {
    const { ip, useragent, acceptHeaders, geoip } = request

    const logObject = {
      user: {
        id: user.id,
        name: user.name || '',
        email: user.email || ''
      },
      request: {
        useragent,
        acceptHeaders,
        ip,
        geoip,
        method: request.method(),
        path: request.url()
      },
      time: moment().toISOString()
    }

    if (Env.get('NODE_ENV') !== 'batata') {
      const url = Env.get('MONGO_URL')

      try {
        const client = await MongoClient.connect(url, {
          useNewUrlParser: true
        })

        client
          .db('log')
          .collection('login')
          .insertOne(logObject)
      } catch (err) {
        throw err
      }
    }
  }
}
