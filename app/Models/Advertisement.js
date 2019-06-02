'use strict'

const Model = use('Model')

class Advertisement extends Model {
  pet () {
    return this.belongsTo('App/Models/Pet')
  }
}

module.exports = Advertisement
