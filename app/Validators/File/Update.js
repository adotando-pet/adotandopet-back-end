'use strict'

class FileUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      file: 'file|file_ext:png,jpg|file_size:5mb|file_types:image'

    }
  }
}

module.exports = FileUpdate
