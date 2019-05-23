'use strict'

class AddressStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      zip: 'required',
      country: 'required',
      state: 'required',
      city: 'required',
      street: 'required',
      number: 'required',
      district: 'required'
    }
  }
}

module.exports = AddressStore
