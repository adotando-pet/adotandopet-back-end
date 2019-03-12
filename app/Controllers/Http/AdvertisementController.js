'use strict'

const Advertisement = use('App/Models/Advertisement')

class AdvertisementController {
  async index () {
    const advertisement = await Advertisement.query()
      .with('category')
      .with('owner')
      .with('comments')
      .with('files')
      .fetch()

    return advertisement
  }

  async store ({ request, auth }) {
    const { files, ...data } = request.only([
      'category_id',
      'name',
      'gender',
      'age',
      'color',
      'breed',
      'isCastrated',
      'size',
      'isDisabled',
      'description',
      'files'
    ])

    const user = auth.user

    const advertisement = await Advertisement.create({
      user_id: user.id,
      ...data
    })

    if (files && files.length > 0) {
      await advertisement.files().attach(files)
    }

    await advertisement.loadMany(['category', 'owner', 'comments', 'files'])

    return advertisement
  }

  async show ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.loadMany(['category', 'owner', 'comments', 'files'])

    return advertisement
  }

  async update ({ params, request }) {
    const { files, ...data } = request.only([
      'category_id',
      'name',
      'gender',
      'age',
      'color',
      'breed',
      'isCastrated',
      'size',
      'isDisabled',
      'description',
      'files'
    ])

    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.merge(data)

    await advertisement.save()

    if (files && files.length > 0) {
      await advertisement.files().sync(files)
    }

    await advertisement.loadMany(['category', 'owner', 'comments', 'files'])

    return advertisement
  }

  async destroy ({ params }) {
    const advertisement = await Advertisement.findOrFail(params.id)

    await advertisement.delete()
  }
}

module.exports = AdvertisementController
