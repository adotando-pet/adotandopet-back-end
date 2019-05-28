'use strict'

class FileStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      
        types: ['image'],
        size: '12mb',
        extnames: ['png', 'jpg']
      }
    }
  }
}

module.exports = FileStore
