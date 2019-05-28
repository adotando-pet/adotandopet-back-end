'use strict'

class UserUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'string',
      email: 'email',
      password: 'string',
      password_confirmation: 'string|equals:password',
      gender: 'string|in:male,female',
      age: 'integer|above:15'
    }
  }
}

module.exports = UserUpdate
