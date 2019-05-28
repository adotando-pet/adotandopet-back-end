'use strict'

class AdoptionStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      user_id: 'required|integer',
      advertisement_id: 'required|integer',
      status: 'required|string'
    }
  }
}

module.exports = AdoptionStore
