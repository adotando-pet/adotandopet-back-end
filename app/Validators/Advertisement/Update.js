'use strict'

class AdvertisementUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      isCastrated: "",
      isDisabled: "",
      description: "",
      isVacined: "",
      specialCare: "",
      temperament: "",
      liveWell: "",
      sociable: "",
      pet_id: ""
    }
  }
}

module.exports = AdvertisementUpdate
