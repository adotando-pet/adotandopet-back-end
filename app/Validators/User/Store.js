'use strict'

class UserStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string',
      password_confirmation: 'required|string|equals:password',
      gender: 'required|string|in:male,female'
    }
  }
}

module.exports = UserStore
