'use strict'

class PetStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      gender: 'required|string',
      age: 'required|integer|above:0',
      color: 'required|string',
      breed: 'required|string',
      isCastrated: 'required|boolean',
      size: 'required|string|in:small,medium,large',
      category_id: 'required|integer'
      // validation rules
    }
  }
}

module.exports = PetStore
