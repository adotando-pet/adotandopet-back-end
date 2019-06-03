'use strict'

const Model = use('Model')

class Advertisement extends Model {
  adoptions () {
    return this.hasMany('App/Models/Adoption')
  }

  pet () {
    return this.belongsTo('App/Models/Pet')
  }
}

module.exports = Advertisement
