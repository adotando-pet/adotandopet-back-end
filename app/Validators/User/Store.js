'use strict'

class UserStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string|confirmed|min:6',
      gender: 'required|string|in:male,female',
      have_notifications: 'required|boolean'
    }
  }
}

module.exports = UserStore
