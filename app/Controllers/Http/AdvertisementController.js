'use strict'

const Advertisement = use('App/Models/Advertisement')

class AdvertisementController {
  async index () {
    const advertisement = await Advertisement.query()
      .with('category')
      .with('owner')
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
      'description'
    ])

    const user = auth.user

    const advertisement = await Advertisement.create({
      user_id: user.id,
      ...data
    })

    await advertisement.loadMany(['category', 'owner', 'comments'])

    return advertisement
  }

  async show ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.loadMany(['category', 'owner', 'comments'])

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
      'description'
    ])

    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.merge(data)

    await advertisement.save()

    await advertisement.loadMany(['category', 'owner', 'comments'])

    return advertisement
  }

  async destroy ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.delete()
  }
}

module.exports = AdvertisementController
