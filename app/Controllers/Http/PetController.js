'use strict'

const Pet = use('App/Model/Pet')

class PetController {
  async index(){
    const pets = await Pet.query()
        .with('user')
        .fetch()
    return pets
  }
  async store ({request, response, auth}){
    const data = request.all()

    const user = auth.user.id

    const pet = await Pet.create({user_id: user, ...data})
    
    await pet.load('user')

    return pet
  }

  async show({ params }){
    const pet = await Pet.findOrFail(params.id)

    await pet.load('user')

    return pet
  }

  async update ({ params, request }){
    const data = request.all()

    const pet = await Pet.findOrFail(params.id)

    await pet.merge(data)

    await pet.save()

    await pet.load('user')

    return pet

  }

  async destroy ( { params }){
    const pet = await Pet.findOrFail(params.id)

    await pet.delete()
  }
}

module.exports = PetController
