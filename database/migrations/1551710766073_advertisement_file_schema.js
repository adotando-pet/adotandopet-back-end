'use strict'

const Schema = use('Schema')

class AdvertisementFileSchema extends Schema {
  up () {
    this.create('advertisement_file', table => {
      table.increments()
      table
        .integer('advertisement_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('advertisements')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('file_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('advertisement_file')
  }
}

module.exports = AdvertisementFileSchema
