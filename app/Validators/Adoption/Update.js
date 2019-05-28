'use strict'

class AdoptionUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      user_id: 'integer',
      advertisement_id: 'integer',
      status: 'string'
    }
  }
}


module.exports = AdoptionUpdate
