'use strict'

const Model = use('Model')

class Advertisement extends Model {
  pet () {
    return this.hasOne('App/Models/Pet')
  }
}

module.exports = Advertisement
