'use strict'

const Phone = use('App/Models/Phone')

class PhoneController {
  async index () {
    const phone = await Phone.query()
      .with('user')
      .fetch()

    return phone
  }

  async store ({ request, response, auth }) {
    const data = request.only(['number', 'type', 'haveWhatsapp'])

    const user = auth.user.id

    const phone = await Phone.create({ user_id: user, ...data })

    await phone.load('user')

    return phone
  }

  async show ({ params }) {
    const phone = await Phone.findOrFail(params.id)

    await phone.load('user')

    return phone
  }

  async update ({ params, request }) {
    const data = request.only(['number', 'type', 'haveWhatsapp'])

    const phone = await Phone.findOrFail(params.id)

    await phone.merge(data)

    await phone.save()

    await phone.load('user')

    return phone
  }

  async destroy ({ params }) {
    const phone = await Phone.findOrFail(params.id)

    await phone.delete()
  }
}

module.exports = PhoneController
