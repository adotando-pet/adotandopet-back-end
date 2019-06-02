'use strict'

class UserUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string',
      email: 'email',
      password: 'string|confirmed',
      gender: 'string|in:male,female',
      have_notifications: 'boolean'
    }
  }
}

module.exports = UserUpdate
