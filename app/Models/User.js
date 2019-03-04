'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  adoptions () {
    return this.hasMany('App/Models/Adoption')
  }

  advertisements () {
    return this.hasMany('App/Models/Advertisement')
  }

  comments () {
    return this.hasMany('App/Models/Comment')
  }

  phones () {
    return this.hasMany('App/Models/Phone')
  }

  address () {
    return this.hasOne('App/Models/Address')
  }
}

module.exports = User
