'use strict'

const Model = use('Model')

class Category extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'title'
      },
      strategy: 'dbIncrement',
      disableUpdates: false
    })
  }

  pets () {
    return this.hasMany('App/Models/Pet')
  }
}

module.exports = Category
