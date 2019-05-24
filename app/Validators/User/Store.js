'use strict'

class UserStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'required',
      email: 'required|email',
      password: 'required',
      password_confirmation: 'required',
      gender: 'required',
      age: 'required'
    }
  }
}

module.exports = UserStore
