'use strict'

class PetUpdate {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'string',
      gender: 'string',
      age: 'integer|above:0',
      color: 'string',
      breed: 'string',
      isCastrated: 'boolean',
      size: 'string|in:small,medium,large',
      category_id: 'integer'
    }
  }
}

module.exports = PetUpdate
