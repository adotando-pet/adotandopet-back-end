'use strict'

const Address = use('App/Models/Address')

class AddressController {
  async index () {
    const address = await Address.query()
      .with('user')
      .fetch()

    return address
  }
 
  async store ({ request, response, auth }) {
    const data = request.only([
      'zip',
      'country',
      'state',
      'city',
      'street',
      'number',
      'district',
      'complement'
    ])

    const user = auth.user.id

    const address = await Address.create({ user_id: user, ...data })

    await address.load('user')

    return address
  }

  async show ({ params }) {
    const address = await Address.findOrFail(params.id)

    await address.load('user')

    return address
  }

  async update ({ params, request }) {
    const data = request.only([
      'zip',
      'country',
      'state',
      'city',
      'street',
      'number',
      'district',
      'complement'
    ])

    const address = await Address.findOrFail(params.id)

    await address.merge(data)

    await address.save()

    await address.load('user')

    return address
  }

  async destroy ({ params }) {
    const address = await Address.findOrFail(params.id)

    await address.delete()
  }
}

module.exports = AddressController
