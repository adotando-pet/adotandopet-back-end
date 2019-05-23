'use strict'

class PhoneUpdate {
  get validateAll(){
    return true;
  }
  get rules () {
    return {
      number:'',
      type: '',
      haveWhatsapp: ''
    }
  }
}
module.exports = PhoneUpdate
