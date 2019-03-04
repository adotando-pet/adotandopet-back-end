'use strict'

const Model = use('Model')

class AdvertisementPicture extends Model {
  advertisement () {
    return this.belongsTo('App/Models/Advertisement')
  }
}

module.exports = AdvertisementPicture
