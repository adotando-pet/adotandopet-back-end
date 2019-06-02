'use strict'

class AdvertisementSotre {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      pet_id: 'required|integer',
      isDisabled: 'required|boolean',
      isVacined: 'required|boolean',
      specialCare: 'required|boolean',
      specialCareDescription: 'required_if:specialCare|string|min:8|max:200',
      temperament: 'required|string',
      liveWell: 'required|string',
      sociable: 'required|string',
      description: 'required|string|min:30|max:150'
    }
  }
}

module.exports = AdvertisementSotre
