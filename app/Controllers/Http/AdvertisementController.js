'use strict'

const Advertisement = use('App/Models/Advertisement')

class AdvertisementController {
  async index () {
    const advertisement = await Advertisement.query()
      .with('pet')
      .fetch()

    return advertisement
  }

  async store ({ request, auth }) {
    const data = request.only([
      'pet_id',
      'isDisabled',
      'isVacined',
      'specialCare',
      'specialCareDescription',
      'temperament',
      'liveWell',
      'sociable',
      'description'
    ])

    const advertisement = await Advertisement.create(data)

    await advertisement.load('pet')

    return advertisement
  }

  async show ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.load('pet')

    return advertisement
  }

  async update ({ params, request }) {
    const data = request.only([
      'pet_id',
      'isDisabled',
      'isVacined',
      'specialCare',
      'specialCareDescription',
      'temperament',
      'liveWell',
      'sociable',
      'description'
    ])

    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.merge(data)

    await advertisement.save()

    await advertisement.load('pet')

    return advertisement
  }

  async destroy ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.delete()
  }
}

module.exports = AdvertisementController
