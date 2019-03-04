'use strict'

const Schema = use('Schema')

class AdoptionSchema extends Schema {
  up () {
    this.create('adoptions', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('advertisement_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('advertisements')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.enu('status', ['approved', 'reproved']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('adoptions')
  }
}

module.exports = AdoptionSchema
