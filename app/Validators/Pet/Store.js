'use strict'

class PetStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      gender: 'required',
      age: 'required',
      color: 'required',
      breed: 'required',
      isCastrated: 'required',
      size: 'required',
      category_id: 'required'
      // validation rules
    }
  }
}

module.exports = PetStore
