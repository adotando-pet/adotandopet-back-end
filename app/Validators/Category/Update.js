'use strict'

class CategoryUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'string|min:4|max:150',
      description: 'string|min:10|max:500'
    }
  }
}

module.exports = CategoryUpdate
