'use strict'

const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }

  user () {
    return this.hasOne('App/Models/User')
  }

  pets () {
    return this.belongsToMany('App/Models/Pet').pivotTable('pet_file')
  }
}

module.exports = File
