'use strict'

class CategoryStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      title: "required",
      description: "required"
    }
  }
}

module.exports = CategoryStore
