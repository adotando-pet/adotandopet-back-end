'use strict'

const Model = use('Model')

class Comment extends Model {
  owner () {
    return this.belongsTo('App/Models/User')
  }

  advertisement () {
    return this.belongsTo('App/Models/Advertisement')
  }
}

module.exports = Comment
