'use strict'

class PetUpdate {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: '',
      gender: '',
      age: '',
      color: '',
      breed: '',
      isCastrated: '',
      size: '',
      category_id: 
    }
  }
}

module.exports = PetUpdate
