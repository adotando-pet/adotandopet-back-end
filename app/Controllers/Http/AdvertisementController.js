'use strict'

const Advertisement = use('App/Models/Advertisement')

class AdvertisementController {
  async index () {
    const advertisement = await Advertisement.query()
      .with('category')
      .with('owner')
      .with('pictures')
      .with('comments')
      .fetch()

    return advertisement
  }

  async store ({ request, auth }) {
    const data = request.only([
      'category_id',
      'name',
      'gender',
      'age',
      'color',
      'breed',
      'isCastrated',
      'size',
      'isDisabled',
      'descrition'
    ])

    const user = auth.user

    const advertisement = await Advertisement.create({
      user_id: user.id,
      ...data
    })

    await advertisement.loadMany(['category', 'owner', 'pictures', 'comments'])

    return advertisement
  }

  async show ({ params }) {
    const advertisement = await Advertisement.findOrFail(
      params.advertisement_id
    )

    await advertisement.loadMany(['category', 'owner', 'pictures', 'comments'])

    return advertisement
  }

  async update ({ params, request }) {
    const data = request.only([
      'category_id',
      'name',
      'gender',
      'age',
      'color',
      'breed',
      'isCastrated',
      'size',
      'isDisabled',
      'descrition'
    ])

    const advertisement = await Advertisement.findOrFail(
      params.advertisement_id
    )

    await advertisement.merge(data)

    await advertisement.save()

    await advertisement.loadMany(['category', 'owner', 'pictures', 'comments'])

    return advertisement
  }

  async destroy ({ params }) {
    const advertisement = await Advertisement.findOrFail(
      params.advertisement_id
    )

    await advertisement.delete()
  }
}

module.exports = AdvertisementController
