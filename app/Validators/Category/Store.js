'use strict'

class CategoryStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string|min:4|max:150',
      description: 'required|string|min:10|max:500'
    }
  }
}

module.exports = CategoryStore
