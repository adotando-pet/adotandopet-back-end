'use strict'

class AdoptionStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      user_id: 'required',
      advertisement_id: 'required',
      status: 'required'
    }
  }
}

module.exports = AdoptionStore
