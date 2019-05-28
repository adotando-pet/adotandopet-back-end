'use strict'

class AdvertisementUpdate {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      isCastrated: "boolean",
      isDisabled: "boolean",
      description: "string|min:30|max:150",
      isVacined: "boolean",
      specialCare: "boolean",
      temperament: "string",
      liveWell: "array",
      sociable: "array",
      specialCareDescription: "required_if:specialCare|string|min:30|max:200"

    }
  }
}

module.exports = AdvertisementUpdate
