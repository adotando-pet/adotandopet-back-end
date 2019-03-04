'use strict'

const Schema = use('Schema')

class AdvertisementPicturesSchema extends Schema {
  up () {
    this.create('advertisement_pictures', table => {
      table.increments()
      table
        .integer('advertisement_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('advertisements')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('file_url').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('advertisement_pictures')
  }
}

module.exports = AdvertisementPicturesSchema
