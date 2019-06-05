'use strict'

const Pet = use('App/Models/Pet')

class PetController {
  async index ({ auth }) {
    const pets = await Pet.query()
      .where('user_id', auth.user.id)
      .with('user')
      .with('category')
      .with('files')
      .fetch()

    return pets
  }
  async store ({ request, response, auth }) {
    const { files, ...data } = request.all()

    const user = auth.user.id

    const pet = await Pet.create({ user_id: user, ...data })

    if (files && files.length > 0) {
      await pet.files().attach(files)
    }

    return pet
  }

  async show ({ params }) {
    const pet = await Pet.findOrFail(params.id)

    await pet.loadMany(['user', 'files', 'category'])

    return pet
  }

  async update ({ params, request }) {
    const { files, ...data } = request.all()

    const pet = await Pet.findOrFail(params.id)

    await pet.merge(data)

    await pet.save()

    if (files && files.length > 0) {
      await pet.files().sync(files)
    }

    await pet.loadMany(['user', 'files', 'category'])

    return pet
  }

  async destroy ({ params }) {
    const pet = await Pet.findOrFail(params.id)

    await pet.delete()
  }
}

module.exports = PetController
