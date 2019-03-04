'use strict'

const Schema = use('Schema')

class AdvertisementSchema extends Schema {
  up () {
    this.create('advertisements', table => {
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
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.enu('gender', ['male', 'female']).notNullable()
      table.integer('age').notNullable()
      table.string('color').notNullable()
      table.string('breed')
      table.boolean('isCastrated').notNullable()
      table.enu('size', ['small', 'medium', 'large']).notNullable()
      table.boolean('isDisabled').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('advertisements')
  }
}

module.exports = AdvertisementSchema
