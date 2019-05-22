'use strict'

const Model = use('Model')

class Advertisement extends Model {
  pet () {
    return this.hasMany('App/Models/Pet')
  }
}

module.exports = Advertisement
