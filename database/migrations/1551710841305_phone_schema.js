'use strict'

const Schema = use('Schema')

class PhoneSchema extends Schema {
  up () {
    this.create('phones', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('number').notNullable()
      table.enu('type', ['residential', 'work', 'personal']).notNullable()
      table.boolean('haveWhatsapp')
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhoneSchema
