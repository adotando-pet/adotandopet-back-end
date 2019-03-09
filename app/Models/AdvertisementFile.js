'use strict'

const Model = use('Model')

class AdvertisementFile extends Model {
  advertisement () {
    return this.belongsTo('App/Models/Advertisement')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = AdvertisementFile
