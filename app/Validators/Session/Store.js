'use strict'

class SessionStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = SessionStore
