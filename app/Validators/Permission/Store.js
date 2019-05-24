'use strict'

class PermissionStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'required',
      slug: 'required',
      description: 'required'
    }
  }
}

module.exports = PermissionStore
