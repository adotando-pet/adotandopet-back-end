'use strict'

const Schema = use('Schema')

class PetFileSchema extends Schema {
  up () {
    this.create('pet_file', table => {
      table.increments()
      table
        .integer('pet_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('pets')
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
    this.drop('pet_file')
  }
}

module.exports = PetFileSchema
