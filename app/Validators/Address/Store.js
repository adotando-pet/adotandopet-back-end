'use strict'

class AddressStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      zip: 'required|integer|min:8|max:8',
      country: 'required|string',
      state: 'required|string',
      city: 'required|string',
      street: 'required|string',
      number: 'required|alpha_numeric',
      district: 'required|string',
      complement: 'string'
    }
  }
}

module.exports = AddressStore
