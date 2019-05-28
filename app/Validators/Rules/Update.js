'use strict'

class RulesUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'string',
      slug: 'string',
      description: 'string'
    }
  }
}

module.exports = RulesUpdate
