'use strict'

class ForgotPasswordUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ForgotPasswordUpdate
