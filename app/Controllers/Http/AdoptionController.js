'use strict'

const Adoption = use('App/Models/Adoption')
const User = use('App/Models/User')

class AdoptionController {
  async index ({ auth }) {
    const user = auth.user

    console.log(user)

    const data = await User.findByOrFail(user.id)

    console.log(data.toJson())

    const adoption = await Adoption.query()
      .with('user')
      .with('advertisement')
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

    await adoption.loadMany(['user', 'advertisement'])

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
