'use strict'

class PermissionUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: '',
      slug: '',
      description: ''
    }
  }
}

module.exports = PermissionUpdate
