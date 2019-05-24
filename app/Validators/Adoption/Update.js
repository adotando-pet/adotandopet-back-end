'use strict'

class AdoptionUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      user_id: '',
      advertisement_id: '',
      status: ''
    }
  }
}


module.exports = AdoptionUpdate
