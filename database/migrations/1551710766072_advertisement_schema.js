'use strict'

const Schema = use('Schema')

class AdvertisementSchema extends Schema {
  up () {
    this.create('advertisements', table => {
      table.increments()
      table.boolean('isDisabled').notNullable()
      table.boolean('isVacined').notNullable()
      table.boolean('specialCare').notNullable()
      table.text('specialCareDescription').notNullable()
      table.enu('temperament')
      table.enu('liveWell')
      table.enu('sociable')
      table.text('description')
      table
      .integer('pet_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('pets')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('advertisements')
  }
}

module.exports = AdvertisementSchema
