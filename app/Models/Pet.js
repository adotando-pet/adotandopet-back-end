'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }

  files () {
    return this.belongsToMany('App/Models/File').pivotTable('pet_file').withTimestamps()
  }
}

module.exports = Pet
