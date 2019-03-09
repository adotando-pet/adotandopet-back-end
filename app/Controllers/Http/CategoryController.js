'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index () {
    const category = await Category.query()
      .with('advertisements')
      .fetch()

    return category
  }

  async store ({ request }) {
    const data = request.only(['title', 'description'])

    const category = await Category.create(data)

    return category
  }

  async show ({ params }) {
    const category = await Category.findOrFail(params.id)

    await category.load('advertisements')

    return category
  }

  async update ({ params, request }) {
    const data = request.only(['title', 'description'])

    const category = await Category.findOrFail(params.id)

    await category.merge(data)

    await category.save()

    return category
  }

  async destroy ({ params }) {
    const category = await Category.findOrFail(params.id)

    await category.delete()
  }
}

module.exports = CategoryController
