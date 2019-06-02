'use strict'

class AdvertisementUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      pet_id: 'integer',
      isDisabled: 'boolean',
      isVacined: 'boolean',
      specialCare: 'boolean',
      specialCareDescription: 'string|min:30|max:200',
      temperament: 'string',
      liveWell: 'array',
      sociable: 'array',
      description: 'string|min:30|max:150'
    }
  }
}

module.exports = AdvertisementUpdate
