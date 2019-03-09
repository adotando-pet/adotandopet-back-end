'use strict'

const Picture = use('App/Models/AdvertisementFile')
const Helpers = use('Helpers')

class AdvertisementFileController {
  async index () {
    const pictures = Picture.query()
      .with('advertisement')
      .with('file')
      .fetch()

    return pictures
  }

  async store ({ params, request }) {
    const advertisement = params.advertisement_id
    const data = request.only(['file_id', 'featured'])

    const picture = await Picture.create({
      advertisement_id: advertisement,
      file_id: data.file_id,
      featured: data.featured
    })

    await picture.loadMany(['file', 'advertisement'])

    return picture
  }

  async show ({ params, response }) {
    const picture = await Picture.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${picture.file}`))
  }

  async update ({ params, request }) {}

  async destroy ({ params }) {}
}

module.exports = AdvertisementFileController
