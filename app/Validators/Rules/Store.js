'use strict'

class RulesStore {
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

module.exports = RulesStore
