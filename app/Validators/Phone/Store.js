'use strict'

class PhoneStore {
  get validateAll(){
    return true;
  }
  get rules () {
    return {
      number:'required|string',
      type: 'required|string|in:residential,work,personal',
      haveWhatsapp: 'required|boolean'
    }
  }
}

module.exports = PhoneStore
