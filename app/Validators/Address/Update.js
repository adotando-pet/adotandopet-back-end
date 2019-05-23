'use strict'

class AddressUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      zip: '',
      country: '',
      state: '',
      city: '',
      street: '',
      number: '',
      district: ''
      // validation rules
    }
  }
}

module.exports = AddressUpdate
