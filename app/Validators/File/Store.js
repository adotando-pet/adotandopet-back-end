'use strict'

class FileStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      
        file: 'required|file|file_ext:png,jpg,jpeg|file_size:6mb'
      }
    }
  }
}

module.exports = FileStore
