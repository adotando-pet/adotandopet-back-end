'use strict'

class PhoneStore {
  get validateAll(){
    return true;
  }
  get rules () {
    return {
      number:'required',
      type: 'required',
      haveWhatsapp: 'required'
    }
  }
}

module.exports = PhoneStore
