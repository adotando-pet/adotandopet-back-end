'use strict'

const Adoption = use('App/Models/Adoption')

class AdoptionController {
  async index ({ auth }) {
    const user = auth.user

    const adoption = await Adoption.query()
      .where('user_id', user.id)
      .with('advertisement.pet')
      .fetch()

    return adoption
  }

  async store ({ params, auth }) {
    const user = auth.user.id
    const advertisement = params.advertisement_id

    const adoption = await Adoption.create({
      user_id: user,
      advertisement_id: advertisement,
      status: 'pending'
    })

    await adoption.load('advertisement.pet')

    return adoption
  }

  async show ({ params }) {
    const adoption = await Adoption.findOrFail(params.id)

    await adoption.loadMany(['user', 'advertisement'])

    return adoption
  }

  async update ({ params, request }) {
    const data = request.only(['status'])

    const adoption = await Adoption.findOrFail(params.id)

    await adoption.merge(data)

    await adoption.save()

    await adoption.loadMany(['user', 'advertisement'])

    return adoption
  }

  async destroy ({ params }) {
    const adoption = await Adoption.findOrFail(params.id)

    await adoption.delete()
  }
}

module.exports = AdoptionController
