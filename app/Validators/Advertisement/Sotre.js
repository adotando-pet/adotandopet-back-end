'use strict'

class AdvertisementSotre {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      isCastrated: "required",
      isDisabled: "required",
      description: "required",
      isVacined: "required",
      specialCare: "required",
      temperament: "required",
      liveWell: "required",
      sociable: "required",
      pet_id: "required"
    }
  }
}

module.exports = AdvertisementSotre
