'use strict'

class UserUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: '',
      email: 'email',
      password: '',
      password_confirmation: '',
      gender: '',
      age: ''
    }
  }
}

module.exports = UserUpdate
