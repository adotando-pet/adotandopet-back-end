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

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  adoptions () {
    return this.hasMany('App/Models/Adoption')
  }

  phones () {
    return this.hasMany('App/Models/Phone')
  }

  address () {
    return this.hasOne('App/Models/Address')
  }

  avatar () {
    return this.belongsTo('App/Models/File')
  }

  pets () {
    return this.hasMany('App/Models/Pet')
  }
}

module.exports = User
