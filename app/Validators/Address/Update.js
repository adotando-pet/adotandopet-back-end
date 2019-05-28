'use strict'

class AddressUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      zip: 'string|min:8|max:8',
      country: 'string',
      state: 'string',
      city: 'string',
      street: 'string',
      number: 'alpha_numeric',
      district: 'string',
      complement: 'string'
      // validation rules
    }
  }
}

module.exports = AddressUpdate
