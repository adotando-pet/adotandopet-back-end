'use strict'

const Model = use('Model')

class File extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = File
