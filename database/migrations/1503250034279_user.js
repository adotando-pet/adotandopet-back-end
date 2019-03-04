'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('name').notNullable()
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('password').notNullable()
      table.enu('gender', ['male', 'female', 'others']).notNullable()
      table.integer('age')
      table.string('avatar_url')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
