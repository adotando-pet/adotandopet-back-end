'use strict'

class CategoryUpdate {
  get rules () {
    return {
      title: "string|min:10|max:150",
      description: "string|min:20|max:500"
        }
  }
}

module.exports = CategoryUpdate
