'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name').notNullable()
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('password').notNullable()
      table.enu('gender', ['male', 'female', 'others']).notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.boolean('have_notifications')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
