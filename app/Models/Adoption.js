'use strict'

const Model = use('Model')

class Adoption extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  advertisement () {
    return this.belongsTo('App/Models/Advertisement')
  }
}

module.exports = Adoption
