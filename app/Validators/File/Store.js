'use strict'

class FileStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      file: 'required|file|file_ext:png,jpg|file_size:5mb|file_types:image'
    }
  }  
}

module.exports = FileStore
