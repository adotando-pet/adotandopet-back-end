'use strict'

const Model = use('Model')

class Advertisement extends Model {
  pet() {
    return this.belongsToMany('App/Models/Pet').withTimestamps()
  }
 
}

module.exports = Advertisement
