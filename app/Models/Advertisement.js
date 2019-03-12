'use strict'

const Model = use('Model')

class Advertisement extends Model {
  category () {
    return this.belongsTo('App/Models/Category')
  }

  owner () {
    return this.belongsTo('App/Models/User')
  }

  files () {
    return this.belongsToMany('App/Models/File').withTimestamps()
  }
}

module.exports = Advertisement
