'use strict'

const Model = use('Model')

class Category extends Model {
  advertisements () {
    return this.hasMany('App/Models/Advertisement')
  }
}

module.exports = Category
