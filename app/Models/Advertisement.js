'use strict'

const Model = use('Model')

class Advertisement extends Model {
  category () {
    return this.belongsTo('App/Models/Category')
  }

  owner () {
    return this.belongsTo('App/Models/User')
  }

  pictures () {
    return this.hasMany('App/Models/AdvertisementPicture')
  }

  comments () {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = Advertisement
