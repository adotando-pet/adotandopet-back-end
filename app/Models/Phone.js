'use strict'

const Model = use('Model')

class Phone extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Phone
