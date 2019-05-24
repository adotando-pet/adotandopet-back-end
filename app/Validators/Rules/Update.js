'use strict'

class RulesUpdate {
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

module.exports = RulesUpdate
