'use strict'

class PhoneUpdate {
  get validateAll(){
    return true;
  }
  get rules () {
    return {
      number:'string',
      type: 'string|in:residential,work,personal',
      haveWhatsapp: 'boolean'
    }
  }
}
module.exports = PhoneUpdate
